import React from 'react';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import GridOnIcon from '@material-ui/icons/GridOn';
import GetAppIcon from '@material-ui/icons/GetApp';
import videoGame from '../../images/video-game-icon.png';
import puzzle from '../../images/puzzle-icon.png';
import upload from '../../images/inbox-icon.png';
import { blueGrey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const Info = (props) => {
  const classes = useStyles();
  const { loading = false } = props;

  return (
    <Box className={classes.root}>
      <Box className={classes.mainContainer}>
        <Box className={classes.leftContainer}>
          <Box className={classes.container}>
            <CardHeader
              title={
                loading ? (
                  <Skeleton
                    className={classes.title}
                    width={200}
                    height={200}
                  />
                ) : (
                  <Box>
                    <Box className={classes.img}>
                      {/* <img src={videoGame} alt='' /> */}
                      <SportsEsportsIcon
                        style={{ fontSize: 70, color: blueGrey[500] }}
                      />
                    </Box>
                    <Typography variant={'h5'}>
                      Customize your game play!
                    </Typography>
                    <br />
                    <Typography>
                      Choose one of three difficulty levels on a 4x4, 6x6 or a
                      9x9 game board. Try a dark mode puzzle or share your game
                      with a friend.
                    </Typography>
                  </Box>
                )
              }
            />
          </Box>
        </Box>

        <Box className={classes.centerContainer}>
          <Box className={classes.container}>
            <CardHeader
              title={
                loading ? (
                  <Skeleton
                    className={classes.title}
                    width={200}
                    height={200}
                  />
                ) : (
                  <Box>
                    <Box className={classes.img}>
                      {/* <img src={puzzle} alt='' /> */}
                      <GridOnIcon
                        style={{ fontSize: 70, color: blueGrey[500] }}
                      />
                    </Box>
                    <Typography variant={'h5'}>
                      What is Sudoku? — Origins
                    </Typography>
                    <br />
                    <Typography>
                      The name Sudoku or more correctly 数独 comes from Japan
                      and consists of the Japanese characters Su (meaning
                      ‘number’) and Doku (meaning ‘single’); however, Sudoku was
                      not invented in Japan. Sudoku originated in Switzerland
                      and then traveled to Japan by way of America.
                    </Typography>
                  </Box>
                )
              }
            />
          </Box>
        </Box>

        <Box className={classes.rightContainer}>
          <Box className={classes.container}>
            <CardHeader
              title={
                loading ? (
                  <Skeleton
                    className={classes.title}
                    width={200}
                    height={200}
                  />
                ) : (
                  <Box>
                    <Box className={classes.img}>
                      {/* <img src={upload} alt='' /> */}
                      <GetAppIcon
                        style={{ fontSize: 70, color: blueGrey[500] }}
                      />
                    </Box>
                    <Typography variant={'h5'}>
                      Upload your puzzles online and play
                    </Typography>
                    <br />
                    <Typography>
                      Snap a photo of your puzzle and enjoy it with all of our
                      features. Save and continue your puzzle when you have
                      time.
                    </Typography>
                  </Box>
                )
              }
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#F8F8F8',
  },
  mainContainer: {
    width: 'auto',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 100,
  },
  leftContainer: {
    width: '400px',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'flex-start',
    margin: 20,
  },
  centerContainer: {
    width: '400px',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'flex-start',
    margin: 20,
  },
  rightContainer: {
    width: '400px',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'flex-start',
    margin: 20,
  },
  container: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
    alignItems: 'top',
    alignContent: 'top',
  },
}));

export default Info;
