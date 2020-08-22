import React, { useContext } from "react";
import { GridContext } from "../../store/contexts/GridContext";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import RenderPuzzle from "../SudokuGame/puzzle-handler/RenderPuzzle";

const Game = (props) => {
  const { gridState, setGridState } = useContext(GridContext);

  let grid = `${gridState.gridlength}x${gridState.gridlength}`;
  let level = gridState.level;

  const classes = useStyles();

  // Timer and date
  let date = Date.now();
  let todaysDate = Intl.DateTimeFormat("en-US").format(date);
  const month = new Intl.DateTimeFormat("en", { month: "short" }).format(date);
  const day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
  const year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);

  let time = false;

  return (
    <Box className={classes.root}>
      <Box className={classes.leftContainer}>
        <Typography variant="caption">
          Sudoku {month} {day} {year} - {grid} {level}
        </Typography>
        <br />
        <br />

        <RenderPuzzle />
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-evenly",
    textDecoration: "none",
    paddingTop: 100,
    paddingBottom: 100,
  },
  leftContainer: {
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "left",
    alignItems: "left",
  },
  rightContainer: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "flex-end",
    alignItems: "center",
    margin: "20px",
  },
}));

export default Game;
