import React from 'react';
import RenderPuzzle from '../SudokuGame/puzzle-handler/RenderPuzzle';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import { makeStyles } from '@material-ui/core/styles';
import ClearButton from '../assets/ClearButton';

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
    marginTop: 100,
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-evenly',
    textDecoration: 'none',
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
    margin: theme.spacing(1),
    marginRight: '10px',
    // border: '2px solid red',
  },
  links: {
    width: '75%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  icons: {
    width: '25%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  disabled: {
    color: 'red',
  },
}));

export default Game;
