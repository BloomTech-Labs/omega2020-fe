import React, { useState, useEffect } from 'react';
import Board from '../puzzle-builder/Board';
import { Get4x4 } from './grid-axios-call/4x4';
import { Get6x6 } from './grid-axios-call/6x6';
import { Get9x9 } from './grid-axios-call/9x9';
import axiosWithAuth from '../../../utils/axiosWithAuth';
import gridCondiditions from '../Seeds';
import { makeStyles } from '@material-ui/core/styles';

console.log(Get4x4());
function puzzleHandler() {
  const [win, setWin] = useState('');

  const [gameBoardState, setGameBoardState] = useState({
    boardState: '',
    puzzleId: '',
    history: [],
    conflicts: new Set([]),
  });
  //   to do: add the 4x4/6x6/9x9 switch
  async function getRandomPuzzle() {
    // const puzzles = await GetEasyPuzzle();
    const puzzles = await Get4x4();
    setWin(puzzles.solution);

    return puzzles;
  }
}
// retrieve puzzle data// possibly refactor more?
const getFormattedPuzzle = async () => {
  const puzzle = await getRandomPuzzle();
  const formattedPuzzle = formatPuzzle(puzzle.sudoku); // changed puzzles to puzzle.sudoku

  console.log('GBS in formatted puzzle', gameBoardState);
  // GBS= Game Board State
  console.log('Loaded puzzle in formatted puzzle', puzzle);
  console.log('formattedPuzzle  in formatted puzzle', formattedPuzzle);
  setGameBoardState({
    ...gameBoardState,
    puzzleId: puzzle.id,
    level: puzzle.level,
    boardState: formattedPuzzle,
    solved: puzzle.solution,
    original: puzzle.sudoku,
  });
};

useEffect(() => {
  getFormattedPuzzle();
}, []);

function getDeepCopyOfArray(arr) {
  return JSON.parse(JSON.stringify(arr));
}

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
    // time: gameBoardState.time,
    difficulty: gameBoardState.level,
    data: activePuzzleString,
    solved: gameBoardState.solved,
    original: gameBoardState.original,
  };
};
// come back to this and add it later! line 144 from original EasySudoku.js file

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
    // console.log("BOX ID: ", "boxId")

    for (let j = 0; j < boardState[i].length; j++) {
      // populating columns
      if (cols.hasOwnProperty(j)) {
        cols[j].push(boardState[i][j]); //set a new cell value in the board
      } else {
        cols[j] = [boardState[i][j]]; // or keep the value
      }

      // populating boxes// come back to this!
      const boxId = stringify(Math.floor(i / 3, Math.floor(j / 3)));

      if (boxes.hasOwnProperty(boxId)) {
        boxes[boxId].push(boardState[i][j]);
      } else {
        boxes[boxId] = [boardState[i][j]];
      }
    }

    // creates an array of conflicts found by location
    const rowConflicts = flatten(getConflicts(Object.values(rows)));
    const colConflicts = flatten(getConflicts(Object.values(cols)));
    const boxConflicts = flatten(getConflicts(Object.values(boxes)));

    // console.log("BOX CONFLICTS1: ", boxConflicts)

    const mergedConflicts = [...rowConflicts, ...colConflicts, ...boxConflicts];
    setGameBoardState({
      ...gameBoardState,
      conflicts: new Set(mergedConflicts),
    });

    // Turn boardState into a string
    const playString = [];
    let playStringNow;

    for (let i = 0; i < gameBoardState.boardState.length; i++) {
      // for each row
      for (let j = 0; j < gameBoardState.boardState.length; j++) {
        // for each column
        playStringNow = gameBoardState.boardState[i][j].cellValue; // the value in each cell
        playString.push(playStringNow); // is pushed to playString
      }
    }

    // activePuzzleString = single string represents current board state
    const activePuzzleString = playString.join('');
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

  function flatten(a) {
    return Array.isArray(a) ? [].concat(...a.map(flatten)) : a;
  }

  function getConflicts(arrs) {
    return arrs.map((arr) => getConflictsInArray(arr));
  }

  function getConflictsInArray(arr) {
    const conflictMap = {};

    for (let i = 0; i < arr.length; i++) {
      const curr = arr[i];

      if (curr.cellValue !== '.') {
        if (conflictMap.hasOwnProperty(curr.cellValue)) {
          conflictMap[curr.cellValue].push(curr.cellId);
        } else {
          conflictMap[curr.cellValue] = [curr.cellId];
        }
      }
    }

    return Object.values(conflictMap).filter((arr) => arr.length > 1);
  }
  // come back and change this to variables. line 227, 249, 253
  function formatPuzzle(puzzle) {
    const formattedPuzzle = createArray(9, 9);

    for (let i = 0; i < puzzle.length; i++) {
      const rowId = getRowId(i);
      const colId = getColId(i);

      const editable = puzzle[i] === '.';

      formattedPuzzle[rowId][colId] = {
        cellValue: puzzle[i],
        cellId: stringify(rowId, colId),
        editable,
      };
    }
    return formattedPuzzle;
  }

  function stringify(num1, num2) {
    return `${num1}${num2}`;
  }

  function getRowId(i) {
    return Math.floor(i / 9);
  }

  function getColId(i) {
    return i % 9;
  }

  return (
    //   change these values to styled
    <div className='Sudoku'>
      <div>
        <Board
          className='Board'
          boardState={gameBoardState.boardState}
          conflicts={gameBoardState.conflicts}
          onSquareValueChange={handleSquareValueChange}
          historyLength={gameBoardState.history.length}
        />
      </div>
      <Settings />
    </div>
  );
}
function createArray(length) {
  const arr = new Array(length || 0);
  let i = length;

  if (arguments.length > 1) {
    const args = Array.prototype.slice.call(arguments, 1);
    while (i--) arr[length - 1 - i] = createArray.apply(this, args);
  }
  return arr;
}
export default puzzleHandler;
