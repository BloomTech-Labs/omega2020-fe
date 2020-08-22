import React, { useState, useEffect, useContext } from "react";
import { WinContext } from "../../../store/contexts/WinContext";
import { GridContext } from "../../../store/contexts/GridContext";
import { PuzzleContext } from "../../../store/contexts/PuzzleContext";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

// puzzle builder
import Board from "../puzzle-builder/Board";
import KeyPad from "../puzzle-builder/KeyPad/KeyPad";
// key value rendering:
import KeyButton from "../../assets/KeyButton";
import Length from "../../KeyPad/keypad/lengthKey";
import { keysPuzzle } from "./functions/keys";

import { Get4x4 } from "./grid-axios-call/4x4";
import { Get6x6 } from "./grid-axios-call/6x6";
import { Get9x9 } from "./grid-axios-call/9x9";

// Authentication
import axiosWithAuth from "../../../utils/axiosWithAuth";
import { postWithAuth } from "../Upload-image/postWithAuth";

// FUNCTIONS
import { formatPuzzle } from "./functions/formatPuzzle";
import { stringify } from "./functions/stringify";
import { getDeepCopyOfArray } from "./functions/getDeepCopyOfArray";
import {
  flatten,
  getConflicts,
  getConflictsInArray,
} from "./functions/conflicts";

const RenderPuzzle = (props) => {
  const classes = useStyles();

  const { win, setWin } = useContext(WinContext);

  const { gridState, setGridState } = useContext(GridContext);

  const { puzzleState, setPuzzleState } = useContext(PuzzleContext);

  console.log(`puzzleState from renderPuzzle: ${puzzleState}`);

  // Retrieve puzzle data
  async function getPuzzle4x4() {
    let puzzles = await Get4x4();
    setWin(puzzles.solution);
    return puzzles;
  }

  async function getPuzzle6x6() {
    let puzzles = await Get6x6();
    setWin(puzzles.solution);
    return puzzles;
  }

  async function getPuzzle9x9() {
    let puzzles = await Get9x9();
    setWin(puzzles.solution);
    return puzzles;
  }

  async function uploadPuzzle() {
    let puzzles = await gridState.solved.solution;
    setWin(puzzles.solution.solution);
    return puzzles.solution;
  }

  const getFormattedPuzzle = async () => {
    const getPuzzle = () => {
      switch (puzzleState) {
        case "4":
          const puzzle4x4 = getPuzzle4x4();
          return puzzle4x4;
          break;
        case "6":
          const puzzle6x6 = getPuzzle6x6();
          return puzzle6x6;
          break;
        case "9":
          const puzzle9x9 = getPuzzle9x9();
          return puzzle9x9;
          break;
        default:
          const puzzleDefault = getPuzzle9x9();
          return null;
          break;
      }
    };
    // getPuzzle();

    // const puzzle = await getPuzzle9x9();
    const puzzle = await getPuzzle();
    let Length = puzzle.gridlength;
    const formattedPuzzle = formatPuzzle(puzzle.sudoku, Length);
    // key value rendering:
    const keyFunction = keysPuzzle(puzzle.sudoku, Length);

    console.log("Game Board State in formatted puzzle", gridState);
    console.log("Loaded puzzle in formatted puzzle", puzzle);
    console.log("formattedPuzzle  in formatted puzzle", formattedPuzzle);

    setGridState({
      ...gridState,
      boardState: formattedPuzzle,
      gridlength: puzzle.gridlength,
      row: puzzle.row,
      col: puzzle.col,
      puzzleId: puzzle.id,
      level: puzzle.level,
      solved: puzzle.solution,
      original: puzzle.sudoku,
    });
  };

  // Start the game here by getting a formatted puzzle
  useEffect(() => {
    getFormattedPuzzle();
  }, []);

  const handleSquareValueChange = (i, j, newValue) => {
    setGridState((prevState) => {
      const newBoardState = getDeepCopyOfArray(prevState.boardState);
      const prevEditable = prevState.boardState[i][j].editable;
      newBoardState[i][j] = {
        cellValue: newValue,
        cellId: stringify(i, j),
        editable: prevEditable,
      };
      console.log("newBoardState: ", prevState.newBoardState);

      // Now push the previous board state on the history stack
      const newHistory = getDeepCopyOfArray(prevState.history);
      newHistory.push(prevState.boardState);

      return {
        ...gridState,
        boardState: newBoardState,
        history: newHistory,
        conflicts: new Set([]),
      };
    });
  };

  const handleUndoClick = () => {
    setGridState((prevState) => {
      const newHistory = getDeepCopyOfArray(prevState.history);
      const lastBoardState = newHistory.pop();

      // Now assign the previous board state as the current board state
      return {
        ...gridState,
        boardState: lastBoardState,
        history: newHistory,
        conflicts: new Set([]),
      };
    });
  };

  const handleNewGameClick = () => {
    setGridState({
      ...gridState,
      boardState: getFormattedPuzzle(),
      history: [],
      conflicts: new Set([]),
    });
  };

  // saves sudoku state (data, diffuculty, time) to backend.
  const handleSaveClick = () => {
    console.log(gridState);

    const puzzleId = gridState.puzzleId;

    // Turn boardState into a string
    var playString = [];
    var playStringNow;

    for (var i = 0; i < gridState.boardState.length; i++) {
      // for each row
      for (var j = 0; j < gridState.boardState.length; j++) {
        // for each column
        playStringNow = gridState.boardState[i][j].cellValue; // the value in each cell
        playString.push(playStringNow); // is pushed to playString
      }
    }
    // activePuzzleString = single string represents current board state
    var activePuzzleString = playString.join("");

    const req = {
      difficulty: gridState.level,
      data: activePuzzleString,
      solved: gridState.solved,
      original: gridState.original,
    };

    console.log("GridNumxNum", puzzleId);
    axiosWithAuth()
      .post(`/user-puzzles/${puzzleId}`, req)
      .then((res) => {
        console.log("REQ", res);
        alert("Puzzle saved");
      });

    postWithAuth(puzzleId, req);
  };

  console.log("WIN", win);
  console.log("GBS101", gridState);
  // console.log("GBS101 9x9 puzzleId", gridState.puzzleId);

  function handleVerifyClick() {
    const { boardState, setBoardState } = gridState;

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
          Math.floor(i / gridState.row),
          Math.floor(j / gridState.col)
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
    setGridState({
      ...gridState,
      conflicts: new Set(mergedConflicts),
    });

    // Turn boardState into a string
    var playString = [];
    var playStringNow;

    for (var i = 0; i < gridState.boardState.length; i++) {
      // for each row
      for (var j = 0; j < gridState.boardState.length; j++) {
        // for each column
        playStringNow = gridState.boardState[i][j].cellValue; // the value in each cell
        playString.push(playStringNow); // is pushed to playString
      }
    }

    // activePuzzleString = single string represents current board state
    var activePuzzleString = playString.join("");
    console.log("activePuzzleString", activePuzzleString);
    console.log("WIN", win);

    if (mergedConflicts.length === 0) {
      if (activePuzzleString === win) {
        return (
          // build some animation for win here
          alert("Congratulations! You have solved the puzzle!")
        );
      }
    }
  }

  let viewPort = false;
  const md = useMediaQuery("(min-width: 1050px)");
  if (viewPort === md) {
    viewPort = true;
  } else {
    viewPort = false;
  }

  return (
    <div className={classes.root}>
      {(() => {
        switch (viewPort) {
          case true:
            return (
              <Box>
                <Board
                  theme={props.theme}
                  boardState={gridState.boardState}
                  conflicts={gridState.conflicts}
                  onSquareValueChange={handleSquareValueChange}
                  historyLength={gridState.history.length}
                  className={classes.Item}
                />
              </Box>
            );
          default:
            return (
              <Grid container spacing={10}>
                <Grid item xs={12} sm={6}>
                  <Board
                    theme={props.theme}
                    boardState={gridState.boardState}
                    conflicts={gridState.conflicts}
                    onSquareValueChange={handleSquareValueChange}
                    historyLength={gridState.history.length}
                    className={classes.Item}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <KeyPad
                    historyLength={gridState.history.length}
                    onUndoClick={handleUndoClick}
                    onNewGameClick={handleNewGameClick}
                    onVerifyClick={handleVerifyClick}
                    onSaveClick={handleSaveClick}
                  />
                </Grid>
              </Grid>
            );
        }
      })()}
    </div>
  );
};
const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  Item: {
    width: "40%",
  },
}));

export default RenderPuzzle;
