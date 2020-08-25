import React, { useState, useEffect } from 'react';
import Board from './UploadBoard';
import { postWithAuth } from './postWithAuth.js';

const UploadSudoku2 = (solution) => {
  const [win, setWin] = useState('');

  //// Description of gameBoardState below
  // {
  //   boardState : "", => String of formated board values
  //   puzzleId: "", => Puzzle Id from DS and passed thru BE
  //   // time: 0, => Not yet implemented
  //   history   : [], => The history of current game play
  //   conflicts : new Set([])   => Array of conflicting values across fields (3x3 grid of cells), rows and columns.
  // });

  const [gameBoardState, setGameBoardState] = useState({
    ...solution,
    boardState: '',
    puzzleId: '',
    history: [],
    conflicts: new Set([]),
  });

  // Retrieve puzzle data
  async function getRandomPuzzle() {
    var puzzles = await solution;
    {
      console.log(`solution: ${solution}`);
    }
    setWin(puzzles.solution.solution);
    return puzzles.solution;
  }

  const getFormattedPuzzle = async () => {
    const puzzle = await getRandomPuzzle();
    const formattedPuzzle = formatPuzzle(puzzle.values);

    setGameBoardState({
      ...gameBoardState,
      puzzleId: '',
      level: puzzle.difficulty,
      boardState: formattedPuzzle,
      original: puzzle.values,
      solved: puzzle.solution,
    });
  };

  // START HERE  by getting a formatted puzzle
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

  // ************** Saves sudoku state (data, difficulty, time) to backend *********

  const handleSaveClick = () => {
    const puzzleId = 100;

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
    console.log('GBS in formatted puzzle', gameBoardState.level);
    console.log('GBS in formatted puzzle', gameBoardState.solved);
    console.log('GBS in formatted puzzle', gameBoardState.original);

    const req = {
      // time: gameBoardState.time,
      difficulty: gameBoardState.solution.level,
      data: activePuzzleString,
      solved: gameBoardState.solved,
      original: gameBoardState.original,
    };

    postWithAuth(puzzleId, req);
  };

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
        const boxId = stringify(Math.floor(i / 3), Math.floor(j / 3));

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

    // Check for Win when no conflicts are there
    if (mergedConflicts.length === 0) {
      if (activePuzzleString === win) {
        return alert('Congratulations! You have solved the puzzle!');
      }
    }
  }

  function flatten(a) {
    return Array.isArray(a) ? [].concat(...a.map(flatten)) : a;
  }

  // Get conflicts from the array of locations from line 173
  function getConflicts(arrs) {
    return arrs.map((arr) => getConflictsInArray(arr));
  }

  function getConflictsInArray(arr) {
    const conflictMap = {};

    for (let i = 0; i < arr.length; i++) {
      let curr = arr[i];

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

  // Takes the puzzle string and formats it into an array of arrays.
  function formatPuzzle(puzzle) {
    const formattedPuzzle = createArray(9, 9);

    for (let i = 0; i < puzzle.length; i++) {
      const rowId = getRowId(i);
      const colId = getColId(i);

      const editable = puzzle[i] === '.' ? true : false;

      formattedPuzzle[rowId][colId] = {
        cellValue: puzzle[i],
        cellId: stringify(rowId, colId),
        editable: editable,
      };
    }
    return formattedPuzzle;
  }

  function stringify(num1, num2) {
    return num1 + '' + num2;
  }

  function getRowId(i) {
    return Math.floor(i / 9);
  }

  function getColId(i) {
    return i % 9;
  }

  return (
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
    </div>
  );
};

function createArray(length) {
  var arr = new Array(length || 0),
    i = length;

  if (arguments.length > 1) {
    var args = Array.prototype.slice.call(arguments, 1);
    while (i--) arr[length - 1 - i] = createArray.apply(this, args);
  }
  return arr;
}

export default UploadSudoku2;
