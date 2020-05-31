import React from 'react';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import grid4x4 from '../../images/4x4-grid.png';
import { blue } from '@material-ui/core/colors';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const Home = (props) => {
  const classes = useStyles();
  const { loading = false } = props;

  return (
    <Box className={classes.root}>
      <Box className={classes.Container}>
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
                <Typography variant='h4'>
                  Let’s start off with something easy
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
                  m={0}
                  p={0}
                />
              ) : (
                <Box>
                  <Typography variant='h4'>
                    Try to solve this 4x4 sudoku:
                  </Typography>
                  <Typography variant='subtitle1'>
                    Each row, column and square needs to be filled out with the
                    numbers 1-4, without repeating any numbers within the row,
                    column or square.
                  </Typography>
                </Box>
              )
            }
          />
          <CardHeader
            subheader={
              loading ? (
                <Skeleton width={500} height={400} margin={0} padding={0} />
              ) : (
                <img src={grid4x4} alt='game' />
              )
            }
          />
          <CardHeader
            subheader={
              loading ? (
                <Skeleton className={classes.text_4} width={60} height={55} />
              ) : (
                <Box>
                  <ColorButton variant='contained' color='primary'>
                    Reveal Answer
                  </ColorButton>
                </Box>
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
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-evenly',
    background: '#000000',
    color: '#FFFFFF',
    padding: 90,
  },
  Container: {
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
    width: '40%',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    border: '2px solid red',
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
