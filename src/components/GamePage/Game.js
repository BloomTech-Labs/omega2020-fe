import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import RenderPuzzle from '../SudokuGame/puzzle-handler/RenderPuzzle';

const Game = (props) => {
  const classes = useStyles();

  let time = false;
  let date = Date(); // needs fixing
  let grid = '9x9';
  let level = 'easy';

  return (
    <Box className={classes.root}>
      <Box className={classes.leftContainer}>
        <Typography variant='caption'>
          Sudoku {date} - {grid} {level}
        </Typography>
        <br />
        <RenderPuzzle />
      </Box>

      <Box className={classes.rightContainer}>keypad</Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-evenly',
    textDecoration: 'none',
    paddingTop: 100,
    paddingBottom: 100,
    // border: '2px solid red',
  },
  leftContainer: {
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'left',
    alignItems: 'left',
    marginLeft: '10px',
    // border: '2px solid red',
  },
  rightContainer: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: '10px',
    // border: '2px solid red',
  },
}));

export default Game;
