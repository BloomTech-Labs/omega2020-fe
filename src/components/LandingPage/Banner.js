import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import BlueButton from '../assets/BlueButton';
import games from '../../images/games.png';

const Banner = (props) => {
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
                            id='improve1'
                          >
                            Improve Your Skills
                            <br />
                            By Understanding Game Strategies
                          </Typography>
                          <br />
                          <Typography
                            className={classes.subheader}
                            id='improve2'
                          >
                            Learn to recognize key patterns and methods
                            <br />
                            to improve your speed and skill level
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
                            Improve Your Skills By Understanding Game Strategies
                          </Typography>
                          <br />
                          <Typography
                            variant='h6'
                            className={classes.subheader}
                          >
                            Learn to recognize key patterns and methods to
                            improve your speed and skill level
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
          action={
            loading ? (
              <Skeleton className={classes.text} width={60} height={55} />
            ) : (
              <Box>
                <BlueButton title={'Get Started Today'} href={'/tutorial'} />
              </Box>
            )
          }
        />

        <CardHeader
          action={
            loading ? (
              <Skeleton className={classes.text} width={60} height={55} />
            ) : (
              <Box className={classes.gameBoard}>
                {(() => {
                  switch (viewPort) {
                    case true:
                      return (
                        <Box className={classes.img}>
                          {/* <img src={games} alt='games' width='300' /> */}
                        </Box>
                      );
                    default:
                      return (
                        <Box className={classes.img}>
                          {/* <img src={games} alt='games' /> */}
                        </Box>
                      );
                  }
                })()}
              </Box>
            )
          }
        />
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
  },
  mainContainer: {
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
  img: {
    width: '90vw',
    height: '50vh',
    backgroundImage: `url(${games})`,
    backgroundRepeat: 'no-repeat',
    // backgroundSize: 'contain, cover',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  gameBoard: {
    marginTop: 200,
  },
  space: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default Banner;
