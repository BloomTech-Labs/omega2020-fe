import React from 'react';
import RenderPuzzle from '../SudokuGame/puzzle-handler/RenderPuzzle';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const Game = (props) => {
  const classes = useStyles();

  let time = false;

  return (
    <Box className={classes.root}>
      <Box className={classes.leftContainer}>
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
    flexFlow: 'row wrap',
    justifyContent: 'left',
    alignItems: 'center',
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
