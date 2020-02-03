import React, { useState, useEffect } from 'react';
import Board from '../../Board.js';
import { GetMediumPuzzle, solvedPuzzle, unsolvedPuzzle } from './MediumPuzzle'
import SudokuButtons from '../../SudokuButtons.js';
import '../../Sudoku.css';
import { ga } from 'react-ga';
import axiosWithAuth from '../../../utils/axiosWithAuth';
import Settings from '../../themes/Settings'

const MediumSudoku = () => {
  const [win, setWin] = useState("");

  const [gameBoardState, setGameBoardState] = useState(
    {
      boardState : "",
      puzzleId: "",
      // time: 0,
      history   : [],
      conflicts : new Set([])  
    });
  
  
  // Retrieve puzzle data
  async function getRandomPuzzle() {
    var puzzles = await GetMediumPuzzle();
    setWin(puzzles.solution);

    return puzzles;
  };
  
  const getFormattedPuzzle = async () => {
    const puzzle = await getRandomPuzzle();
    const formattedPuzzle = formatPuzzle(puzzle.sudoku); // changed puzzles to puzzle.sudoku

    console.log("GBS in formatted puzzle", gameBoardState)
    console.log("Loaded puzzle in formatted puzzle", puzzle)
    console.log("formattedPuzzle  in formatted puzzle", formattedPuzzle);
      setGameBoardState({
        ...gameBoardState,
        puzzleId: puzzle.id,
        level: puzzle.level,
        boardState: formattedPuzzle,
        solved: puzzle.solution,
        original: puzzle.sudoku
      });
  };


  // const [gameBoardState, setGameBoardState] = useState(
  // {
  //         boardState : getFormattedPuzzle(),
  //         puzzleId: getPuzzle.id,
  //         difficulty: getPuzzle.difficulty,
  //         time: getPuzzle.time,
  //         solvedPuzzleState: solvedPuzzle,
  //         history   : [],
  //         conflicts : new Set([])  
  // });
  // console.log("GBS in SUD", win)

  
  useEffect(() => {
    getFormattedPuzzle();

  },[]) 

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
        ...gameBoardState,
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
        ...gameBoardState,
        boardState: lastBoardState, 
        history: newHistory,
        conflicts : new Set([])
      };
    });
  };
  
  const handleNewGameClick = () => {
    setGameBoardState({
      ...gameBoardState,
      boardState: getFormattedPuzzle(),
      history   : [],
      conflicts : new Set([])
    });
  };
  
  const boardStateAsString = (boardState) => {
    let board = "";
    for(let i=0; i<boardState.length; i++) {
      for(let j=0; j<boardState[i].length;j++) {
        board += boardState[i][j].cellValue;
      }
    }
    return board;
  }
  
  // saves sudoku state (data, diffuculty, time) to backend.
  const handleSaveClick = () => {

    console.log(gameBoardState);
    
    const puzzleId = gameBoardState.puzzleId;
    
    // Turn boardState into a string
    var playString = [];
    var playStringNow;
    
    for (var i=0; i<gameBoardState.boardState.length; i++) { // for each row
      for (var j=0; j<gameBoardState.boardState.length; j++) { // for each column
        playStringNow = gameBoardState.boardState[i][j].cellValue // the value in each cell
        playString.push(playStringNow)                // is pushed to playString
      };
    };
    // activePuzzleString = single string represents current board state
    var activePuzzleString = playString.join(''); 
    
    const req = {
      // time: gameBoardState.time,
      difficulty: gameBoardState.level,
      data: activePuzzleString,
      solved: gameBoardState.solved,
      original: gameBoardState.original
    };
  

    axiosWithAuth()
      .post(`/user-puzzles/${puzzleId}`, req)
      .then(res => {
        console.log("REQ", res);
        alert('Puzzle saved');
    });
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
    for(let i=0; i<boardState.length; i++) {
      rows[i] = getDeepCopyOfArray(boardState[i]);
      // console.log("BOX ID: ", "boxId")
      
      for(let j=0; j<boardState[i].length;j++) {
        // populating columns
        if(cols.hasOwnProperty(j)) {
          cols[j].push(boardState[i][j]); //set a new cell value in the board
        } else {
          cols[j] = [boardState[i][j]]; // or keep the value
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
    // creates an array of conflicts found by location
    const rowConflicts = flatten(getConflicts(Object.values(rows)));
    const colConflicts = flatten(getConflicts(Object.values(cols)));
    const boxConflicts = flatten(getConflicts(Object.values(boxes)));
    
    // console.log("BOX CONFLICTS1: ", boxConflicts)
    
    const mergedConflicts = [...rowConflicts, ...colConflicts, ...boxConflicts];
    setGameBoardState({...gameBoardState, conflicts: new Set(mergedConflicts)});
    
    // Turn boardState into a string
    var playString = [];
    var playStringNow;
    
    for (var i=0; i<gameBoardState.boardState.length; i++) { // for each row
      for (var j=0; j<gameBoardState.boardState.length; j++) { // for each column
        playStringNow = gameBoardState.boardState[i][j].cellValue // the value in each cell
        playString.push(playStringNow)                // is pushed to playString
      };
    };
    
    // activePuzzleString = single string represents current board state
    var activePuzzleString = playString.join(''); 
    console.log("activePuzzleString", activePuzzleString);
    console.log("WIN", win);
    
    if (mergedConflicts.length === 0){
      if (activePuzzleString === win){
        return (
          // build some animation for win here
          alert('Congratulations! You have solved the puzzle!')
          )};
        };
      };
      
      function flatten(a) {
        return Array.isArray(a) ? [].concat(...a.map(flatten)) : a;
      };
      
      function getConflicts(arrs) {
        return (arrs.map(arr => getConflictsInArray(arr)));
      };
      
      function getConflictsInArray(arr) {
        const conflictMap = {};
        
        for(let i=0; i<arr.length; i++) {
          let curr = arr[i];
          
          if(curr.cellValue !== ".") {
            if(conflictMap.hasOwnProperty(curr.cellValue)) {
              conflictMap[curr.cellValue].push(curr.cellId);
            } else {
              conflictMap[curr.cellValue] = [curr.cellId];
            };      
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
            onSaveClick = {handleSaveClick}
            />
        </div>
        <div>
          <Board
            className="Board"
            boardState = {gameBoardState.boardState}
            conflicts = {gameBoardState.conflicts}
            onSquareValueChange = {handleSquareValueChange}
            historyLength = {gameBoardState.history.length}
            />
        </div>  
        <Settings />

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
    return arr;
};
export default MediumSudoku;