import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

import CategoryIcon from '@material-ui/icons/Category';
import AppsIcon from '@material-ui/icons/Apps';
import GetAppIcon from '@material-ui/icons/GetApp';
import GridOnIcon from '@material-ui/icons/GridOn';

import BlueButton from '../assets/BlueButton';
import game from '../../images/gameOfTheDay.png';
import game2 from '../../images/gameOfTheDay2.png';

const HomePage = (props) => {
  const classes = useStyles();
  const { loading = false } = props;

  let viewPort = false;
  const viewPortWidth = false;
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
                        <Box>
                          <Typography
                            className={classes.header}
                            style={{ fontSize: '1.3rem' }}
                          >
                            Omega 2020 Interactive Sudoku
                          </Typography>
                          <br />
                          <Typography className={classes.subheader}>
                            Learn how to play, upload your own sudoku
                            <br />
                            games, and compete with friends :&#41;
                          </Typography>
                        </Box>
                      );
                    default:
                      return (
                        <Box>
                          <Typography variant='h3' className={classes.header}>
                            Omega 2020 Interactive Sudoku
                          </Typography>
                          <br />
                          <Typography
                            variant='h6'
                            className={classes.subheader}
                          >
                            Learn how to play, upload your own sudoku
                            <br />
                            games, and compete with friends :&#41;
                          </Typography>
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
                <br />
                <br />
                <Box className={classes.space}>
                  <CategoryIcon className={classes.icon} />
                  <AppsIcon className={classes.icon} />
                  <GetAppIcon className={classes.icon} />
                </Box>
                <br />
                <br />
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
                <BlueButton title={'Get Started; learn the game play'} />
                <br />
                <br />
                <Typography variant='caption'>No signup required</Typography>
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
                        <Box>
                          {/* <GridOnIcon style={{ fontSize: 400 }} /> */}
                          {/* <img src={game} alt='game of the day' width='300' /> */}
                          {(() => {
                            switch (props.theme) {
                              case 'dark':
                                return (
                                  <img
                                    src={game}
                                    alt='game of the day'
                                    width='300'
                                  />
                                );
                              default:
                                return (
                                  <img
                                    src={game2}
                                    alt='game of the day'
                                    width='300'
                                  />
                                );
                            }
                          })()}
                        </Box>
                      );
                    default:
                      return (
                        <Box>
                          {/* <GridOnIcon style={{ fontSize: 400 }} /> */}
                          {(() => {
                            switch (props.theme) {
                              case 'dark':
                                return (
                                  <img
                                    src={game}
                                    alt='game of the day'
                                    width='600'
                                  />
                                );
                              default:
                                return (
                                  <img
                                    src={game2}
                                    alt='game of the day'
                                    width='600'
                                  />
                                );
                            }
                          })()}
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
    // border: '2px solid red',
  },
  mainContainer: {
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    // border: '2px solid orange',
  },
  subheader: {
    // opacity: 0.3,
    color: '#A2A2A2',
  },
  icon: {
    fontSize: 80,
    color: grey[700],
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

export default HomePage;
