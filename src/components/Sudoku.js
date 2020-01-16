import React, { useState } from 'react';
import Board from './Board.js';
import GetPuzzles, { solvedPuzzle, unsolvedPuzzle } from './Puzzles';
import SudokuButtons from './SudokuButtons.js';
import './Sudoku.css';

const Sudoku = () => {
  GetPuzzles()
  
  const getFormattedPuzzle = () => {
    const puzzle = getRandomPuzzle();
    const formattedPuzzle = formatPuzzle(puzzle);
    return formattedPuzzle;
  };

  const [gameBoardState, setGameBoardState] = useState(
  {
          boardState : getFormattedPuzzle(),
          history   : [],
          conflicts : new Set([])  
  });
  
  // console.log("gameBoardState: ", gameBoardState)

  function getRandomPuzzle() {
    return unsolvedPuzzle;
  };

  function getDeepCopyOfArray(arr) {
    return JSON.parse(JSON.stringify(arr));
  };

  const handleSquareValueChange = (i, j, newValue) => {
    setGameBoardState(prevState => {
      const newBoardState = getDeepCopyOfArray(prevState.boardState);
      const prevEditable = prevState.boardState[i][j].editable;
      newBoardState[i][j] = {
          cellValue : newValue,
          cellId    : stringify(i, j),
          editable  : prevEditable
        };
      console.log("newBoardState: ", prevState.newBoardState)

      // Now push the previous board state on the history stack
      const newHistory = getDeepCopyOfArray(prevState.history);
      newHistory.push(prevState.boardState);

      return {
        boardState: newBoardState, 
        history: newHistory, 
        conflicts: new Set([])
      };
    });
  };

  const handleUndoClick = () => {
    setGameBoardState(prevState => {
      const newHistory = getDeepCopyOfArray(prevState.history);
      const lastBoardState = newHistory.pop();

      // Now assign the previous board state as the current board state
      return {
        boardState: lastBoardState, 
        history: newHistory,
        conflicts : new Set([])
      };
    });
  };
  
  const handleNewGameClick = () => {
    setGameBoardState({
      boardState: getFormattedPuzzle(),
      history   : [],
      conflicts : new Set([])
    });
  };
  
  function handleVerifyClick() {
    const { boardState } = gameBoardState;
    console.log("HANDLE VERIFY CLICK", boardState)
    
    // rows[0]/cols[0] -> first row/column
    const rows = {};
    const cols = {};
    // Example: boxes['00'] -> an array of values in the first box. 
    const boxes = {};
    
    for(let i=0; i<boardState.length; i++) {
      rows[i] = getDeepCopyOfArray(boardState[i]);
      console.log("BOX ID: ", "boxId")
      for(let j=0; j<boardState[i].length;j++) {
        // populating cols
        if(cols.hasOwnProperty(j)) {
          cols[j].push(boardState[i][j]);
        } else {
          cols[j] = [boardState[i][j]];
        };
        
        // populating boxes
        const boxId = stringify(Math.floor(i/3), Math.floor(j/3));
        
        if(boxes.hasOwnProperty(boxId)) {
          boxes[boxId].push(boardState[i][j]);
        } else {
          boxes[boxId] = [boardState[i][j]];
        };
      };
    };
    
    const rowConflicts = flatten(getConflicts(Object.values(rows)));
    const colConflicts = flatten(getConflicts(Object.values(cols)));
    const boxConflicts = flatten(getConflicts(Object.values(boxes)));
    console.log("BOX CONFLICTS1: ", boxConflicts)
    const mergedConflicts = [...rowConflicts, ...colConflicts, ...boxConflicts];
    setGameBoardState({...gameBoardState, conflicts: new Set(mergedConflicts)});
  };
  
  function flatten(a) {
    return Array.isArray(a) ? [].concat(...a.map(flatten)) : a;
  };
  
  function getConflicts(arrs) {
    console.log("ARRSSS: ", getConflicts)

    return (arrs.map(arr => getConflictsInArray(arr)));
  };
  
  function getConflictsInArray(arr) {
    const conflictMap = {};
    console.log("ARR: ", arr)

    for(let i=0; i<arr.length; i++) {
      let curr = arr[i];

      if(curr.cellValue !== ".") {
        if(conflictMap.hasOwnProperty(curr.cellValue)) {
          conflictMap[curr.cellValue].push(curr.cellId);
        } else {
          conflictMap[curr.cellValue] = [curr.cellId];
        }        
      };
    };

    return Object.values(conflictMap).filter(arr => arr.length>1); 
  };

  function formatPuzzle(puzzle) {
    const formattedPuzzle = createArray(9, 9);
    
    for(let i=0; i<puzzle.length; i++) {
      const rowId = getRowId(i);
      const colId = getColId(i);

      const editable = puzzle[i] === '.' ? true : false;

      formattedPuzzle[rowId][colId] = {
                            cellValue : puzzle[i],
                            cellId    : stringify(rowId, colId),
                            editable  : editable
                        };
    };
    console.log("Formatted Puzzle", formattedPuzzle);
    return formattedPuzzle;
  };

  function stringify(num1, num2) {
    return num1 + '' + num2;
  };

  function getRowId(i) {
    return Math.floor(i/9);
  };

  function getColId(i) {
    return (i%9);
  };

  /*
    Returns a puzzle formatted like so:
      [
        [ob1, ob2, ob3],
        [.     .    . ],
        [.     .    . ],
      ]

    Where ob = {
      cellValue     : value of this cell,
      editable : true if this cell will be user defined, false otherwise
    }
  */  

    return (
      <div className = "Sudoku">
        <div>
          <SudokuButtons
            historyLength  = {gameBoardState.history.length}
            onUndoClick = {handleUndoClick}
            onNewGameClick = {handleNewGameClick}
            onVerifyClick  = {handleVerifyClick}
            />
        </div>
        <div>
          <Board
            className="Board"
            boardState = {gameBoardState.boardState}
            conflicts = {gameBoardState.conflicts}
            onSquareValueChange = {handleSquareValueChange}
            historyLength = {gameBoardState.history.length}
            // onVerifyClick = {handleVerifyClick}
            />
        </div>  
       
      </div>
    );
  
};
//
function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    };
    // console.log("Return of arr: ", arr)
    return arr;
};

export default Sudoku;