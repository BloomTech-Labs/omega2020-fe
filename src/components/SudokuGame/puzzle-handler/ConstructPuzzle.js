import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Board from '../puzzle-builder/Board';
import { Get4x4 } from './grid-axios-call/4x4';
import { Get6x6 } from './grid-axios-call/6x6';
import { Get9x9 } from './grid-axios-call/9x9';
import axiosWithAuth from '../../../utils/axiosWithAuth';

// FUNCTIONS
import { formatPuzzle } from './functions/formatPuzzle';
import { stringify } from './functions/stringify';
import { getDeepCopyOfArray } from './functions/getDeepCopyOfArray';
import {
  flatten,
  getConflicts,
  getConflictsInArray,
} from './functions/conflicts';

// -------------------------------------------------------------

const ConstructPuzzle = (props) => {
  console.log(`theme in puzzle: ${props.themes}`);

  const classes = useStyles();

  const [win, setWin] = useState('');

  const [gameBoardState, setGameBoardState] = useState({
    boardState: '',
    puzzleId: '',
    history: [],
    conflicts: new Set([]),
  });

  // Retrieve puzzle data
  async function getPuzzle4x4() {
    var puzzles = await Get4x4();
    setWin(puzzles.solution);

    return puzzles;
  }

  async function getPuzzle6x6() {
    var puzzles = await Get6x6();
    setWin(puzzles.solution);

    return puzzles;
  }

  async function getPuzzle9x9() {
    var puzzles = await Get9x9();
    setWin(puzzles.solution);

    return puzzles;
  }

  const getFormattedPuzzle = async () => {
    const puzzle = await getPuzzle9x9();
    const formattedPuzzle = formatPuzzle(
      puzzle.sudoku,
      gameBoardState.gridlength
    );

    console.log('Game Board State in formatted puzzle', gameBoardState);
    console.log('Loaded puzzle in formatted puzzle', puzzle);
    console.log('formattedPuzzle  in formatted puzzle', formattedPuzzle);
    setGameBoardState({
      ...gameBoardState,
      gridlength: puzzle.gridlength,
      row: puzzle.row,
      col: puzzle.col,
      puzzleId: puzzle.id,
      level: puzzle.level,
      boardState: formattedPuzzle,
      solved: puzzle.solution,
      original: puzzle.sudoku,
    });
  };

  // Start the game here by getting a formatted puzzle
  useEffect(() => {
    getFormattedPuzzle();
  }, []);

  const handleSquareValueChange = (i, j, newValue) => {
    setGameBoardState((prevState) => {
      const newBoardState = getDeepCopyOfArray(prevState.boardState);
      const prevEditable = prevState.boardState[i][j].editable;
      newBoardState[i][j] = {
        cellValue: newValue,
        cellId: stringify(i, j),
        editable: prevEditable,
      };
      console.log('newBoardState: ', prevState.newBoardState);

      // Now push the previous board state on the history stack
      const newHistory = getDeepCopyOfArray(prevState.history);
      newHistory.push(prevState.boardState);

      return {
        ...gameBoardState,
        boardState: newBoardState,
        history: newHistory,
        conflicts: new Set([]),
      };
    });
  };

  const handleUndoClick = () => {
    setGameBoardState((prevState) => {
      const newHistory = getDeepCopyOfArray(prevState.history);
      const lastBoardState = newHistory.pop();

      // Now assign the previous board state as the current board state
      return {
        ...gameBoardState,
        boardState: lastBoardState,
        history: newHistory,
        conflicts: new Set([]),
      };
    });
  };

  const handleNewGameClick = () => {
    setGameBoardState({
      ...gameBoardState,
      boardState: getFormattedPuzzle(),
      history: [],
      conflicts: new Set([]),
    });
  };

  // saves sudoku state (data, diffuculty, time) to backend.
  const handleSaveClick = () => {
    console.log(gameBoardState);

    const puzzleId = gameBoardState.puzzleId;

    // Turn boardState into a string
    var playString = [];
    var playStringNow;

    for (var i = 0; i < gameBoardState.boardState.length; i++) {
      // for each row
      for (var j = 0; j < gameBoardState.boardState.length; j++) {
        // for each column
        playStringNow = gameBoardState.boardState[i][j].cellValue; // the value in each cell
        playString.push(playStringNow); // is pushed to playString
      }
    }
    // activePuzzleString = single string represents current board state
    var activePuzzleString = playString.join('');

    const req = {
      difficulty: gameBoardState.level,
      data: activePuzzleString,
      solved: gameBoardState.solved,
      original: gameBoardState.original,
    };

    console.log('GridNumxNum', puzzleId);
    axiosWithAuth()
      .post(`/user-puzzles/${puzzleId}`, req)
      .then((res) => {
        console.log('REQ', res);
        alert('Puzzle saved');
      });
  };

  console.log('WIN', win);
  console.log('GBS101', gameBoardState);
  console.log('GBS101 9x9 puzzleId', gameBoardState.puzzleId);

  function handleVerifyClick() {
    const { boardState, setBoardState } = gameBoardState;

    // Assigns id to boxes in two digit format for xy (row column)
    // rows[0]/cols[0] -> first row/column
    const rows = {};
    const cols = {};
    // Example: boxes['00'] -> an array of values in the first box.
    const boxes = {};

    // populating rows
    for (let i = 0; i < boardState.length; i++) {
      rows[i] = getDeepCopyOfArray(boardState[i]);

      for (let j = 0; j < boardState[i].length; j++) {
        // populating columns
        if (cols.hasOwnProperty(j)) {
          cols[j].push(boardState[i][j]); //set a new cell value in the board
        } else {
          cols[j] = [boardState[i][j]]; // or keep the value
        }

        // populating boxes
        const boxId = stringify(
          Math.floor(i / gameBoardState.row),
          Math.floor(j / gameBoardState.col)
        );

        if (boxes.hasOwnProperty(boxId)) {
          boxes[boxId].push(boardState[i][j]);
        } else {
          boxes[boxId] = [boardState[i][j]];
        }
      }
    }
    // creates an array of conflicts found by location
    const rowConflicts = flatten(getConflicts(Object.values(rows)));
    const colConflicts = flatten(getConflicts(Object.values(cols)));
    const boxConflicts = flatten(getConflicts(Object.values(boxes)));

    const mergedConflicts = [...rowConflicts, ...colConflicts, ...boxConflicts];
    setGameBoardState({
      ...gameBoardState,
      conflicts: new Set(mergedConflicts),
    });

    // Turn boardState into a string
    var playString = [];
    var playStringNow;

    for (var i = 0; i < gameBoardState.boardState.length; i++) {
      // for each row
      for (var j = 0; j < gameBoardState.boardState.length; j++) {
        // for each column
        playStringNow = gameBoardState.boardState[i][j].cellValue; // the value in each cell
        playString.push(playStringNow); // is pushed to playString
      }
    }

    // activePuzzleString = single string represents current board state
    var activePuzzleString = playString.join('');
    console.log('activePuzzleString', activePuzzleString);
    console.log('WIN', win);

    if (mergedConflicts.length === 0) {
      if (activePuzzleString === win) {
        return (
          // build some animation for win here
          alert('Congratulations! You have solved the puzzle!')
        );
      }
    }
  }

  return (
    <div className={classes.root}>
      <div>
        <Board
          theme={props.theme}
          boardState={gameBoardState.boardState}
          conflicts={gameBoardState.conflicts}
          onSquareValueChange={handleSquareValueChange}
          historyLength={gameBoardState.history.length}
        />
      </div>

      {/* 
      in the KeyPad add: 
          historyLength  = {gameBoardState.history.length}
          onUndoClick = {handleUndoClick}
          onNewGameClick = {handleNewGameClick}
          onVerifyClick  = {handleVerifyClick}
          onSaveClick = {handleSaveClick}
      */}
    </div>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    display: 'felx',
    flexFlow: 'column wrap',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
}));

export default ConstructPuzzle;
