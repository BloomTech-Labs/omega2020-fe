import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Game6x6 from '../../images/Game6x6.png';
import PurpleButton from '../assets/PurpleButton';

const Simulation6x6 = (props) => {
  const classes = useStyles();

  let viewPort = false;
  const md = useMediaQuery('(min-width: 1050px)');
  if (viewPort === md) {
    viewPort = true;
  } else {
    viewPort = false;
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.mainContainer}>
        {(() => {
          switch (viewPort) {
            case true:
              return (
                <Box style={{ textAlign: 'center' }}>
                  <Typography
                    className={classes.header}
                    style={{ fontSize: '1.3rem' }}
                    id='solve'
                  >
                    Try to solve this 6x6 sudoku:
                  </Typography>
                  <br />
                  <Typography className={classes.subheader} id='row'>
                    Each row, column and square needs to be filled
                    <br />
                    out with the numbers 1-6, without repeating any
                    <br />
                    numbers within the row, column or square.
                  </Typography>
                  <br />
                  <Box>
                    <img src={Game6x6} alt='Game6x6' width='300' />
                  </Box>
                </Box>
              );
            default:
              return (
                <Box className={classes.container}>
                  <Box className={classes.rightContainer}>
                    <Typography
                      className={classes.header}
                      style={{ fontSize: '1.3rem' }}
                    >
                      Try to solve this 6x6 sudoku:
                    </Typography>
                    <br />
                    <Typography className={classes.subheader}>
                      Each row, column and square needs to be filled out with
                      the numbers 1-6,
                      <br />
                      without repeating any numbers within the row, column or
                      square.
                    </Typography>
                    <br />
                    <Typography
                      className={classes.header}
                      style={{ fontSize: '1.3rem' }}
                    >
                      Instructions:
                    </Typography>
                    <br />
                    <Typography className={classes.subheader}>
                      In the light blue box enter the number 6.
                    </Typography>
                    <br />
                    <Typography
                      className={classes.header}
                      style={{ fontSize: '1.3rem' }}
                    >
                      Do you know what comes next?
                    </Typography>
                    <br />
                    <Typography className={classes.subheader}>
                      Try to complete the rest… you got this!
                    </Typography>
                    <br />
                    <Box className={classes.space}>
                      <Typography variant='caption'>Need more help?</Typography>
                      <PurpleButton title={'Tutorial Coming Soon'} />
                    </Box>
                  </Box>
                  <Box className={classes.leftContainer}>
                    {/* <img src={Game6x6} alt='Game6x6'/> */}
                  </Box>
                </Box>
              );
          }
        })()}
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 100,
  },
  mainContainer: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  subheader: {
    // opacity: 0.3,
    color: '#A2A2A2',
    display: 'flex',
    flexFlow: 'row wrap',
  },
  container: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  leftContainer: {
    width: '500px',
    height: '400px',
    backgroundImage: `url(${Game6x6})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain, cover',
    backgroundPosition: 'center',
  },
  rightContainer: {
    width: '40%',
  },
  space: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default Simulation6x6;
