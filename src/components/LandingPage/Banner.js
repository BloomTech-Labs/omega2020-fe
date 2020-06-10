import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import BlueButton from '../assets/BlueButton';
import banner from '../../images/banner-img.png';
import puzzle from '../../images/game.png';

const Banner = (props) => {
  const classes = useStyles();
  const { loading = false } = props;

  let viewPort = false;
  const viewPortWidth = false;
  const md = useMediaQuery('(min-width: 1440px)');
  if (viewPortWidth === md) {
    viewPort = true;
  } else {
    viewPort = false;
  }

  return (
    <Box className={classes.root}>
      <dark className={classes.root}>
        <Box className={classes.mainContainer}>
          {(() => {
            switch (viewPort) {
              case true:
                return (
                  <Box className={classes.Container}>
                    <Typography variant='h3'>
                      Welcome to
                      <br />
                      OMEGA 2020
                    </Typography>
                  </Box>
                );
              default:
                // case false:
                return (
                  <Box className={classes.leftContainer}>
                    <CardHeader
                      avatar={
                        loading ? (
                          <Skeleton
                            className='bannerIMG'
                            variant='rect'
                            width={600}
                            height={600}
                          />
                        ) : null
                      }
                    />
                  </Box>
                );
            }
          })()}

          <Box className={classes.rightContainer}>
            <Box className={classes.container}>
              <CardHeader
                title={
                  loading ? (
                    <Skeleton
                      className={classes.title}
                      width={600}
                      height={100}
                    />
                  ) : (
                    <Typography variant='h4'>
                      OMEGA 2020 is an online sudoku app.
                      <br />
                      Learn how to play, upload your own sudoku games, and
                      compete with friends :&#41;
                    </Typography>
                  )
                }
              />
              <CardHeader
                title={
                  loading ? (
                    <Skeleton
                      className={classes.title}
                      width={600}
                      height={100}
                    />
                  ) : (
                    <img src={puzzle} alt='game' />
                  )
                }
              />
              <CardHeader
                subheader={
                  loading ? (
                    <Skeleton
                      className={classes.text}
                      width={500}
                      height={400}
                    />
                  ) : (
                    <Typography variant='h6'>HAVE FUN ON THE GO!</Typography>
                  )
                }
              />
              <CardHeader
                subheader={
                  loading ? (
                    <Skeleton className={classes.text} width={60} height={55} />
                  ) : (
                    <BlueButton title={'Get Started'} />
                  )
                }
              />
            </Box>
          </Box>
        </Box>
      </dark>
    </Box>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-evenly',
    height: '72rem',
    '& dark': {
      background: '#141414',
      color: '#FFFFFF',
    },
    '& light': {
      background: '#FFFFFF',
      color: '#141414',
    },
  },
  mainContainer: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  leftContainer: {
    width: '650px',
    height: '500px',
    backgroundImage: `url(${banner})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain, cover',
    backgroundPosition: 'center',
  },
  rightContainer: {
    width: '700px',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    padding: 30,
  },
  Container: {
    textAlign: 'center',
  },
}));

export default Banner;
