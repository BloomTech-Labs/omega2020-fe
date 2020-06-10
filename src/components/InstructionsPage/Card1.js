import React from 'react';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import puzzle4x4 from '../../images/game_4x4.png';
import puzzle4x4_s from '../../images/game_4x4small.png';
import { blue } from '@material-ui/core/colors';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const Card1 = (props) => {
  const classes = useStyles();
  const { loading = false } = props;

  return (
    <Box className={classes.root}>
      <Card className={classes.mainContainer}>
        <Box className={classes.TopContainer}>
          <CardHeader
            title={
              loading ? (
                <Skeleton className={classes.title} width={300} height={100} />
              ) : (
                <Box>
                  <ColorType variant='h3' color='primary'>
                    Let’s start off with something easy
                  </ColorType>
                  <br />
                  <Typography variant='h5'>
                    Try to solve this 4x4 sudoku:
                  </Typography>
                  <Box className={classes.row}>
                    <Typography className={classes.grid3_1}>
                      Each row, column and square needs to be filled out with
                      the numbers 1-4, without repeating any numbers within the
                      row, column or square.
                    </Typography>

                    <img src={puzzle4x4_s} alt='game' />
                  </Box>
                  <br />
                  <Typography variant='h5'>Instructions:</Typography>
                  <Typography>
                    1. In the light blue box enter the number 2.
                    <br />
                    2. In the next light blue box enter the number 1.
                  </Typography>
                  <br />
                  <Typography variant='h5'>
                    Do you know what comes next?
                  </Typography>
                  <Typography>
                    Try to complete the rest… you got this!
                  </Typography>
                </Box>
              )
            }
          />
        </Box>
        <Box className={classes.BottomContainer}>
          <CardHeader
            title={
              loading ? (
                <Skeleton className={classes.title} width={400} height={100} />
              ) : (
                <img src={puzzle4x4} alt='game' />
              )
            }
          />
          <CardHeader
            subheader={
              loading ? (
                <Skeleton width={400} height={400} />
              ) : (
                <Box className={classes.row2}>
                  <Typography variant='h6'>Need more help? </Typography>
                  <Button variant='contained' color='secondary' size='large'>
                    <Typography variant='body2'>Reveal Next answer</Typography>
                  </Button>
                </Box>
              )
            }
          />
        </Box>
      </Card>
    </Box>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-evenly',
    padding: 90,
  },
  mainContainer: {
    width: '450px',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  BottomContainer: {
    width: '100%',
    textAlign: 'center',
  },
  row: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
  },
  row2: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-evenly',
  },
  grid3_1: {
    width: '70%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
    marginRight: 20,
  },
  img: {
    width: '100%',
    maxWidth: '700px',
    height: 'auto',
  },
}));

const ColorType = withStyles(() => ({
  root: {
    color: blue[400],
    fontWeight: 600,
  },
}))(Typography);

export default Card1;
