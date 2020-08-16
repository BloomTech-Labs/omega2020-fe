import React from 'react';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import { makeStyles } from '@material-ui/core/styles';
import ClearButton from '../assets/ClearButton';

const GameMenu = (props) => {
  const classes = useStyles();

  let time = false;

  return (
    <Box className={classes.root}>
      <Box className={classes.leftContainer}>
        <ClearButton title={'9x9'} />
        <ClearButton title={'Easy'} />
        <ClearButton title={'Medium'} />
        <ClearButton title={'Hard'} />
      </Box>

      {/* ----------------------------------------------------------------- */}

      <Box className={classes.centerContainer}>
        <Typography variant='caption'>0:00</Typography>
        <IconButton onClick={props.toggleTheme} color='inherit'>
          {(() => {
            switch (time) {
              case true:
                return <PauseIcon style={{ fontSize: 20 }} />;
              default:
                return <PlayArrowIcon style={{ fontSize: 20 }} />;
            }
          })()}
        </IconButton>
      </Box>
      {/* ----------------------------------------------------------------- */}

      <Box className={classes.rightContainer}>
        <ClearButton title={'Print'} />
        <ClearButton title={'Help'} />
        <ClearButton title={'Settings'} disabled />
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
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
  centerContainer: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'left',
    alignItems: 'center',
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

export default GameMenu;
