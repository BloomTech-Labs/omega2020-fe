import React from 'react';
import Typography from '@material-ui/core/Typography';
import {
  makeStyles,
  rgbToHex,
  responsiveFontSizes,
} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import BlueButton from '../assets/BlueButton';
import { Button } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  buttonGrid: {
    textAlign: 'center',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    display: 'flex',
    justifyContent: 'space-around',
  },
  cardGrid: {
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(15),
  },
  image: {
    width: '100%',
    height: '100%',
  },
  sudokuImage: {
    width: '40%',
    height: '40%',
    marginLeft: '30%',
  },
  card: {
    width: '80%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  },
  button: {
    color: '#fff',
    paddingLeft: '20px',
    paddingRight: '20px',
    backgroundColor: '#2962ff',
    marginLeft: '40%',
    marginRight: '40%',
    '&:hover': {
      color: '#2962ff',
      backgroundColor: 'white',
    },
  },
  icons: {
    textAlign: 'center',
    padding: theme.spacing(5, 15, 5, 10),
  },
  textDiv: {
    margin: theme.spacing(0, 0, 0, 0),
    
  },
  topTextDiv: {
    margin: theme.spacing(3, 0, 3, 0),
    

    textAlign: 'justify',
    paddingLeft: '32px',
    paddingRight: '32px',
  },
  bottomTextDiv: {
    
    fontWeight: 'bold',
  },
  topTitle: {
    margin: theme.spacing(5, 0, 5, 0),
    fontSize: '40px',
  },
  bottomTitle: {
    margin: theme.spacing(5, 0, 5, 0),
    fontSize: '40px',
    color: '#62A4FF',
  },
  topText: {
    margin: theme.spacing(5, 0, 5, 5),

  },
  bottomText: {
    margin: theme.spacing(3, 0, 3, 0),
    paddingLeft: '32px',
    paddingRight: '32px',
  },
  link: {
    margin: theme.spacing(3, 0, 3, 0),
  },
}));

const Tutorial = () => {
  const classes = useStyles();
  let viewPort = false;
  const viewPortWidth = false;
  const md = useMediaQuery('(max-width: 500px)');
  if (viewPort === md) {
    viewPort = true;
  } else {
    viewPort = false;
  }

  return (
    <Box className={classes.root}>
      {(() => {
          switch (viewPort) {
          case true:
      return (
        <main style={{textAlign: 'center' }}>
          {/* Hero unit */}
          <img
            className={classes.image}
            src={require('../../images/tutorial-banner.png')}
            alt='purple banner'
          />
          <Container>
            <div className={classes.textDiv} width='400' height='400'>
              <div className={classes.topTextDiv}>
                <div className={classes.topTitle} variant='h3'>
                  <Typography variant='h3' className={classes.topTitle}>
                    Origins of Sudoku
                  </Typography>
                </div>
                <Container classname={classes.topTextDiv}>
                  <Typography variant='h6' className={classes.topTextDiv}>
                    The name Sudoku or more correctly 数独 comes from Japan and
                    consists of the Japanese characters Su (meaning ‘number’) and
                    Doku (meaning ‘single’); however, Sudoku was not invented in
                    Japan. Sudoku originated in Switzerland and then traveled to
                    Japan by way of America. Sudoku has its deep roots in ancient
                    number puzzles.
                  </Typography>
                  <Typography>
                    <Link
                      className={classes.link}
                      href='https://www.sudokudragon.com/sudokuhistory.htm'
                      variant='body2'
                    >
                      [Citation](https://www.sudokudragon.com/sudokuhistory.htm)
                    </Link>
                  </Typography>
                </Container>
                <div className={classes.topTitle}>
                  <Typography 
                  variant='h3' 
                  className={classes.topTitle}
                  style={{fontSize: '2rem' }}>
                    Getting Started with Sudoku
                  </Typography>
                  <Typography className={classes.topTextDiv} variant='h6'>
                    Originally Sudoku is played on a 9 x 9 grid. Within the rows
                    and columns are 9 “squares” (made up of 3 x 3 spaces). Each
                    row, column, and square (9 spaces each) needs to be filled out
                    with the numbers 1-9 without repeating any numbers within the
                    row, column, or square. Does it sound complicated? Well, not
                    to worry. Sudoku grid comes with a few spaces already filled
                    in; the more spaces filled in, the easier the game — the more
                    difficult Sudoku puzzles have very few spaces that are already
                    filled in.
                  </Typography>
                  <img
                    className={classes.sudokuImage}
                    src={require('../../images/sudoku1.png')}
                    alt='sudoku puzzle'
                  />

                  <Typography className={classes.topTextDiv} variant='h6'>
                    By seeing which numbers are missing from each square, row, or
                    column, we can use the process of elimination and deductive
                    reasoning to decide which numbers need to go in each blank
                    space.
                  </Typography>
                  <Typography className={classes.topTextDiv} variant='h6'>
                    Sudoku is a game of logic and reasoning, so you shouldn’t have
                    to guess. If you don’t know what number to put in a certain
                    space, keep scanning the other areas of the grid until you see
                    an opportunity to place a number. But don’t try to “force”
                    anything — Sudoku rewards patience, insights, and recognition
                    of patterns, not blind luck or guessing.
                  </Typography>
                  <Typography className={classes.topTextDiv} variant='h6'>
                    What do we mean by using “the process of elimination” to play
                    Sudoku? One way to figure out which numbers can go in each
                    space is to use “the process of elimination” by checking to
                    see which other numbers are already included within each
                    square — since there can be no duplication of numbers 1-9
                    within each square (or row or column).
                  </Typography>
                  <Typography className={classes.topTextDiv} variant='h6'>
                    Through the process of elimination — you find out which spaces
                    are available, which numbers are missing — and then deduce,
                    based on the position of those numbers within the grid, which
                    numbers fit into each space.
                  </Typography>
                  <Typography className={classes.topTextDiv} variant='h6'>
                    Sudoku rules are relatively uncomplicated — but the game is
                    infinitely varied, with millions of possible number
                    combinations and a wide range of levels of difficulty. But
                    it’s all based on the simple principles of using numbers 1-9,
                    filling in the blank spaces based on deductive reasoning, and
                    never repeating any numbers within each square, row, or
                    column.
                  </Typography>
                  <Typography>
                    <Link
                      className={classes.link}
                      href='https://sudoku.com/how-to-play/sudoku-rules-for-complete-beginners/'
                      variant='body2'
                    >
                      [Citation](https://www.sudokudragon.com/sudokuhistory.htm)
                    </Link>
                  </Typography>
                  {/* <Typography className={classes.topTextDiv} variant='h6'>
                    Sudoku can seem a little intimidating, so in this tutorial,
                    let’s start off with something a little easier like a 4x4 grid
                    to get you started.
                  </Typography> */}
                </div>
                {/* <div className={classes.bottomTitle}>
                  <Typography
                    variant='h3'
                    classname={classes.bottomTitle}
                    // style={{ fontFamily: 'Julius Sans One' }}
                  >
                    Take a look at images of our interactive tutorial below!
                  </Typography>
                </div>
                <div>
                  <Typography variant='h6' className={classes.bottomText}>
                    If you would rather learn by participating, head on over to
                    our interactive tutorial
                    <Link href='/soon'> Here!</Link>
                  </Typography>
                </div>
                <div>
                  <Container className={classes.bottomTextDiv}>
                    <img
                      className={classes.sudokuImage}
                      src={require('../../images/popupcard_1.png')}
                      alt='4x4 sudoku'
                    />
                  </Container>
                  <Container className={classes.bottomTextDiv}>
                    <img
                      className={classes.sudokuImage}
                      src={require('../../images/popupcard_2.png')}
                      alt='6x6 sudoku'
                    />
                  </Container>
                </div> */}
                <Typography className={classes.bottomText} variant='h6'>
                  You're basically a pro now! Try your hand at a 9x9 puzzle, or
                  upload your own!
                </Typography>
                <Button className={classes.button} href='/coming-soon'>
                  Get Started!
                </Button>
              </div>
            </div>
          </Container>
          <Container className={classes.buttonGrid} maxWidth='lg' />
        </main>
      );
      default: 
        return(
          <main className={classes.main}>
            {/* Hero unit */}
            <img
              className={classes.image}
              src={require('../../images/tutorial-banner.png')}
              alt='purple banner'
            />
            <Container>
              <div className={classes.textDiv} width='400' height='400'>
                <div className={classes.topTextDiv}>
                  <div className={classes.topTitle} variant='h3'>
                    <Typography variant='h3' className={classes.topTitle}>
                      Origins of Sudoku
                    </Typography>
                  </div>
                  <Container classname={classes.topTextDiv}>
                    <Typography variant='h6' className={classes.topTextDiv}>
                      The name Sudoku or more correctly 数独 comes from Japan and
                      consists of the Japanese characters Su (meaning ‘number’) and
                      Doku (meaning ‘single’); however, Sudoku was not invented in
                      Japan. Sudoku originated in Switzerland and then traveled to
                      Japan by way of America. Sudoku has its deep roots in ancient
                      number puzzles.
                    </Typography>
                    <Typography>
                      <Link
                        className={classes.link}
                        href='https://www.sudokudragon.com/sudokuhistory.htm'
                        variant='body2'
                      >
                        [Citation](https://www.sudokudragon.com/sudokuhistory.htm)
                      </Link>
                    </Typography>
                  </Container>
                  <div className={classes.topTitle}>
                    <Typography variant='h3' className={classes.topTitle}>
                      Getting Started with Sudoku
                    </Typography>
                    <Typography className={classes.topTextDiv} variant='h6'>
                      Originally Sudoku is played on a 9 x 9 grid. Within the rows
                      and columns are 9 “squares” (made up of 3 x 3 spaces). Each
                      row, column, and square (9 spaces each) needs to be filled out
                      with the numbers 1-9 without repeating any numbers within the
                      row, column, or square. Does it sound complicated? Well, not
                      to worry. Sudoku grid comes with a few spaces already filled
                      in; the more spaces filled in, the easier the game — the more
                      difficult Sudoku puzzles have very few spaces that are already
                      filled in.
                    </Typography>
                    <img
                      className={classes.sudokuImage}
                      src={require('../../images/sudoku1.png')}
                      alt='sudoku puzzle'
                    />
                    <Typography className={classes.topTextDiv} variant='h6'>
                      By seeing which numbers are missing from each square, row, or
                      column, we can use the process of elimination and deductive
                      reasoning to decide which numbers need to go in each blank
                      space.
                    </Typography>
                    <Typography className={classes.topTextDiv} variant='h6'>
                      Sudoku is a game of logic and reasoning, so you shouldn’t have
                      to guess. If you don’t know what number to put in a certain
                      space, keep scanning the other areas of the grid until you see
                      an opportunity to place a number. But don’t try to “force”
                      anything — Sudoku rewards patience, insights, and recognition
                      of patterns, not blind luck or guessing.
                    </Typography>
                    <Typography className={classes.topTextDiv} variant='h6'>
                      What do we mean by using “the process of elimination” to play
                      Sudoku? One way to figure out which numbers can go in each
                      space is to use “the process of elimination” by checking to
                      see which other numbers are already included within each
                      square — since there can be no duplication of numbers 1-9
                      within each square (or row or column).
                    </Typography>
                    <Typography className={classes.topTextDiv} variant='h6'>
                      Through the process of elimination — you find out which spaces
                      are available, which numbers are missing — and then deduce,
                      based on the position of those numbers within the grid, which
                      numbers fit into each space.
                    </Typography>
                    <Typography className={classes.topTextDiv} variant='h6'>
                      Sudoku rules are relatively uncomplicated — but the game is
                      infinitely varied, with millions of possible number
                      combinations and a wide range of levels of difficulty. But
                      it’s all based on the simple principles of using numbers 1-9,
                      filling in the blank spaces based on deductive reasoning, and
                      never repeating any numbers within each square, row, or
                      column.
                    </Typography>
                    <Typography>
                      <Link
                        className={classes.link}
                        href='https://sudoku.com/how-to-play/sudoku-rules-for-complete-beginners/'
                        variant='body2'
                      >
                        [Citation](https://www.sudokudragon.com/sudokuhistory.htm)
                      </Link>
                    </Typography>
                    {/* <Typography className={classes.topTextDiv} variant='h6'>
                      Sudoku can seem a little intimidating, so in this tutorial,
                      let’s start off with something a little easier like a 4x4 grid
                      to get you started.
                    </Typography> */}
                  </div>
                  {/* <div className={classes.bottomTitle}>
                    <Typography
                      variant='h3'
                      classname={classes.bottomTitle}
                      // style={{ fontFamily: 'Julius Sans One' }}
                    >
                      Take a look at images of our interactive tutorial below!
                    </Typography>
                  </div>
                  <div>
                    <Typography variant='h6' className={classes.bottomText}>
                      If you would rather learn by participating, head on over to
                      our interactive tutorial
                      <Link href='/soon'> Here!</Link>
                    </Typography>
                  </div>
                  <div>
                    <Container className={classes.bottomTextDiv}>
                      <img
                        className={classes.sudokuImage}
                        src={require('../../images/popupcard_1.png')}
                        alt='4x4 sudoku'
                      />
                    </Container>
                    <Container className={classes.bottomTextDiv}>
                      <img
                        className={classes.sudokuImage}
                        src={require('../../images/popupcard_2.png')}
                        alt='6x6 sudoku'
                      />
                    </Container>
                  </div> */}
                  <Typography className={classes.bottomText} variant='h6'>
                    You're basically a pro now! Try your hand at a 9x9 puzzle, or
                    upload your own!
                  </Typography>
                  <Button className={classes.button} href='/coming-soon'>
                    Get Started!
                  </Button>
                </div>
              </div>
            </Container>
            <Container className={classes.buttonGrid} maxWidth='lg' />
          </main>
        );
      }
    })()}
    </Box>
  );
};
export default Tutorial;
