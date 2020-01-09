import React, { useState } from 'react';
import Board from './square';
import { solvedPuzzle, unsolvedPuzzle } from './Puzzles';
// import './Sudoku.css';

const Sudoku = () => {

    const getFormattedPuzzle = () => {
      const puzzle = getRandomPuzzle();
      const formattedPuzzle = formatPuzzle(puzzle);
      return formattedPuzzle;
    }

    const [gameBoardState, setGameBoardState] = useState(
    {
            boardState : getFormattedPuzzle(),
            // history   : [],
            // conflicts : new Set([])  
    });
  

  function getRandomPuzzle() {
    return unsolvedPuzzle;
  }

  function getDeepCopyOfArray(arr) {
    return JSON.parse(JSON.stringify(arr));
  }

//   const handleSquareValueChange = (i, j, newValue) => {
//     this.setState(prevState => {
//       const newBoardState = this.getDeepCopyOfArray(prevState.boardState);
//       const prevEditable = prevState.boardState[i][j].editable;
//       newBoardState[i][j] = {
//         cellValue : newValue,
//         cellId    : this.stringify(i, j),
//         editable  : prevEditable
//       };

//       // Now push the previous board state on the history stack
//       const newHistory = this.getDeepCopyOfArray(prevState.history);
//       newHistory.push(prevState.boardState);

//       return {boardState: newBoardState, history: newHistory,conflicts : new Set([])};
//     });
//   }

//   const handleUndoClick = () => {
//     this.setState(prevState => {
//       const newHistory = this.getDeepCopyOfArray(prevState.history);
//       const lastBoardState = newHistory.pop();

//       // Now assign the previous board state as the current board state
//       return {boardState:lastBoardState, history:newHistory,conflicts : new Set([])};
//     });
//   }

//   const handleNewGameClick = () => {
//     this.setState({
//       boardState: this.getFormattedPuzzle(),
//       history   : [],
//       conflicts : new Set([])
//     });
//   }

//   const handleVerifyClick = () => {
//     const boardState = this.state.boardState;

//     // rows[0]/cols[0] -> first row/column
//     const rows = {};
//     const cols = {};
//     // Example: boxes['00'] -> an array of values in the first box. 
//     const boxes = {};

//     for(let i=0; i<boardState.length; i++) {
//       rows[i] = this.getDeepCopyOfArray(boardState[i]);
//       for(let j=0; j<boardState[i].length;j++) {
//         // populating cols
//         if(cols.hasOwnProperty(j)) {
//           cols[j].push(boardState[i][j]);
//         } else {
//           cols[j] = [boardState[i][j]];
//         }

//         // populating boxes
//         const boxId = this.stringify(Math.floor(i/3), Math.floor(j/3));
//         if(boxes.hasOwnProperty(boxId)) {
//           boxes[boxId].push(boardState[i][j]);
//         } else {
//           boxes[boxId] = [boardState[i][j]];
//         }
//       }
//     }

//     const rowConflicts = this.flatten(this.getConflicts(Object.values(rows)));
//     const colConflicts = this.flatten(this.getConflicts(Object.values(cols)));
//     const boxConflicts = this.flatten(this.getConflicts(Object.values(boxes)));

//     const mergedConflicts = [...rowConflicts, ...colConflicts, ...boxConflicts];
//     this.setState({conflicts: new Set(mergedConflicts)});
//   }

  function flatten(a) {
    return Array.isArray(a) ? [].concat(...a.map(flatten)) : a;
}

  function getConflicts(arrs) {
    return (arrs.map(arr => getConflictsInArray(arr)));
  }

  function getConflictsInArray(arr) {
    const conflictMap = {};
    for(let i=0; i<arr.length; i++) {
      let curr = arr[i];
      if(curr.cellValue !== "0") {
        if(conflictMap.hasOwnProperty(curr.cellValue)) {
          conflictMap[curr.cellValue].push(curr.cellId);
        } else {
          conflictMap[curr.cellValue] = [curr.cellId];
        }        
      }
    }
    return Object.values(conflictMap).filter(arr => arr.length>1); 
  }

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
    }
    console.log("Formatted Puzzle", formattedPuzzle);
    return formattedPuzzle;
  }

  function stringify(num1, num2) {
    return num1 + '' + num2;
  }

  function getRowId(i) {
    return Math.floor(i/9);
  }

  function getColId(i) {
    return (i%9);
  }

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
      <div className = "sudoku">
        <h1 className="sudokuHeader">Sudoku!</h1>
        {/* <Board
          boardState          = {gameBoardState}
        //   conflicts           = {state.conflicts}
        //   onNewGameClick      = {handleNewGameClick}
        //   onSquareValueChange = {handleSquareValueChange}
        //   historyLength       = {state.history.length}
        //   onUndoClick         = {handleUndoClick}
        //   onVerifyClick       = {handleVerifyClick}
        /> */}
      </div>
    );
  
}
//
function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }
    console.log("Return of arr: ", arr)
    return arr;
}

export default Sudoku;