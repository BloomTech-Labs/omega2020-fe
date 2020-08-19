import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Simulation4x4 from './Simulation4x4';
import Simulation6x6 from './Simulation6x6';

const GameSimulation = (props) => {
  const classes = useStyles();
  const { loading = false } = props;

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
        <CardHeader
          avatar={
            loading ? (
              <Skeleton
                className='bannerIMG'
                variant='rect'
                width={600}
                height={600}
              />
            ) : (
              <Box className={classes.headerBox}>
                {(() => {
                  switch (viewPort) {
                    case true:
                      return (
                        <Box style={{ textAlign: 'center' }}>
                          <Typography
                            className={classes.header}
                            style={{ fontSize: '1.3rem' }}
                            id='learn'
                          >
                            Learn The Game Play
                          </Typography>
                          <br />
                          <Typography className={classes.subheader} id='start'>
                            Start off with something easy
                            <br />
                            then kick it up a notch
                          </Typography>
                          <br />
                          <br />
                          <br />
                          <br />
                        </Box>
                      );
                    default:
                      return (
                        <Box style={{ textAlign: 'center' }}>
                          <Typography
                            variant='h4'
                            className={classes.header}
                            id='bang'
                          >
                            Learn The Game Play
                          </Typography>
                          <br />
                          <Typography
                            variant='h6'
                            className={classes.subheader}
                          >
                            Start off with something easy then kick it up a
                            notch
                          </Typography>
                          <br />
                          <br />
                          <br />
                          <br />
                        </Box>
                      );
                  }
                })()}
              </Box>
            )
          }
        />
        <CardHeader
          avatar={
            loading ? (
              <Skeleton
                className='bannerIMG'
                variant='rect'
                width={600}
                height={600}
              />
            ) : (
              <Box className={classes.Simulation}>
                <Simulation4x4 />
                <br />
                <Simulation6x6 />
              </Box>
            )
          }
        />
      </Box>
    </Box>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200,
  },
  mainContainer: {
    width: '100%',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'left',
  },
  subheader: {
    // opacity: 0.3,
    color: '#A2A2A2',
  },
  Simulation: {
    width: '100%',
  },
}));

export default GameSimulation;
