import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import { makeStyles } from '@material-ui/core/styles';

const Timer = () => {
  const classes = useStyles();
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <Box className={classes.root}>
      <Box className={classes.time}>
        <Typography variant='caption'>{seconds}s</Typography>
      </Box>
      <Box className={classes.icons}>
        <IconButton
          color='inherit'
          className={`button button-primary button-primary-${
            isActive ? 'active' : 'inactive'
          }`}
          onClick={toggle}
        >
          {isActive ? (
            <PauseIcon style={{ fontSize: 20 }} />
          ) : (
            <PlayArrowIcon style={{ fontSize: 20 }} />
          )}
        </IconButton>
        {/* <IconButton color='inherit' onClick={reset}>
          <SettingsBackupRestoreIcon style={{ fontSize: 20 }} />
        </IconButton> */}
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
  time: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icons: {},
}));

export default Timer;
