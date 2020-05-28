import React from 'react';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import banner from '../../images/banner-img.png';
import puzzle from '../../images/game.png';
import { blue } from '@material-ui/core/colors';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const Home = (props) => {
  const classes = useStyles();
  const { loading = false } = props;

  return (
    <Box className={classes.root}>
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
            ) : (
              <Typography variant='h4' style={{ width: '70%' }}>
                OMEGA 2020 is an online sudoku app. <br /> Learn how to play,
                upload your own sudoku games, and compete with friends :&#41;
              </Typography>
            )
          }
        />
      </Box>
      <Box className={classes.rightContainer}>
        <Box className={classes.container}>
          <CardHeader
            title={
              loading ? (
                <Skeleton
                  className={classes.title}
                  width={600}
                  height={100}
                  m={0}
                  p={0}
                />
              ) : (
                <img src={puzzle} alt='game' />
              )
            }
          />
          <CardHeader
            subheader={
              loading ? (
                <Skeleton width={500} height={400} margin={0} padding={0} />
              ) : (
                <Typography variant='h6'>HAVE FUN ON THE GO!</Typography>
              )
            }
          />
          <CardHeader
            subheader={
              loading ? (
                <Skeleton className={classes.text_4} width={60} height={55} />
              ) : (
                <ColorButton variant='contained' color='primary'>
                  Get Started
                </ColorButton>
              )
            }
          />
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-evenly',
    background: '#000000',
    color: '#FFFFFF',
    padding: 90,
  },
  leftContainer: {
    width: '40%',
    height: '80vh',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  rightContainer: {
    width: '40%',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    padding: 30,
  },
  container: {
    width: '100%',
  },
  title: {
    width: '15%',
    height: 30,
    margin: '5px',
  },
}));

const ColorButton = withStyles((theme) => ({
  root: {
    paddingLeft: 20,
    paddingRight: 20,
    color: theme.palette.getContrastText(blue[600]),
    backgroundColor: blue[600],
    '&:hover': {
      backgroundColor: blue[800],
    },
  },
}))(Button);

export default Home;
