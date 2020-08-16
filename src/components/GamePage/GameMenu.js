import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ClearButton from '../assets/ClearButton';
import Timer from './Timer';

const GameMenu = (props) => {
  const classes = useStyles();

  let time = false;

  let viewPort = false;
  const viewPortWidth = false;
  const md = useMediaQuery('(min-width: 1050px)');
  if (viewPort === md) {
    viewPort = true;
  } else {
    viewPort = false;
  }

  console.log(`handlePrint from game menu: ${props.handlePrint}`);

  return (
    <Box>
      {(() => {
        switch (viewPort) {
          case true:
            return (
              <Box className={classes.root}>
                <Box className={classes.leftContainer}>
                  <ClearButton title={'9x9'} />
                  <ClearButton title={'Easy'} />
                </Box>

                <Box className={classes.centerContainer}>
                  <Timer />
                </Box>
              </Box>
            );
          default:
            return (
              <Box className={classes.root}>
                <Box className={classes.leftContainer}>
                  <ClearButton title={'9x9'} />
                  <ClearButton title={'Easy'} />
                  {/* <ClearButton title={'Medium'} />
                  <ClearButton title={'Hard'} /> */}
                </Box>

                {/* ----------------------------------------------------------------- */}

                <Box className={classes.centerContainer}>
                  <Timer />
                </Box>
                {/* ----------------------------------------------------------------- */}

                <Box className={classes.rightContainer}>
                  <ClearButton title={'Print'} click={props.handlePrint} />
                  <ClearButton title={'Help'} />
                  <ClearButton title={'Settings'} disabled />
                </Box>
              </Box>
            );
        }
      })()}
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
  },
  centerContainer: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'left',
    alignItems: 'center',
  },
  rightContainer: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: '10px',
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
