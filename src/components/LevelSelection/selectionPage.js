import React from 'react';
import { makeStyles, Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import WhiteButton from '../assets/WhiteButton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import { grey } from '@material-ui/core/colors';
import useMediaQuery from '@material-ui/core/useMediaQuery';

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
    textAlign: 'center',
  },
  header: {
    fontSize: '2em',
    padding: '5%',
  },
  subheader: {
    // opacity: 0.3,
    color: '#A2A2A2',
  },
  levels: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    alignContent: 'space-evenly',
    width: '100%',
  },
  section1: {
    display: 'flex',
    flexFlow: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    alignContent: 'space-between',
  },
  section2: {
    display: 'flex',
    flexFlow: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    alignContent: 'space-evenly',
  },
  mobHeader: {
    fontSize: '1.3rem',
    padding: '5%',
  },
  mobLevels: {
    display: 'flex',
    flexFlow: 'column wrap',
    alignContent: 'space-evenly',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  mobGrid: {
    padding: '10%',
  },
  mobSection1: {
    display: 'flex',
    flexFlow: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    alignContent: 'space-between',
  },
  mobSection2: {
    display: 'flex',
    flexFlow: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    alignContent: 'space-evenly',
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

const SelectionPage = () => {
  const classes = useStyles();

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
        {(() => {
          switch (viewPort) {
            case true:
              return (
                <Box>
                  <Container className={classes.HeaderBox}>
                    <Typography
                      className={classes.mobHeader}
                      style={{ fontSize: '1.3rem' }}
                    >
                      Which game would you like to play?
                    </Typography>
                  </Container>
                  <Container className={classes.mobLevels}>
                    <Box className={classes.mobSection1}>
                      <Container className={classes.mobGrid}>
                        <img
                          src={require('../../images/4x4.png')}
                          alt='4x4 grid'
                        ></img>
                      </Container>
                      <Container className={classes.mobSection2}>
                        <Typography className={classes.mobHeader}>
                          4x4
                        </Typography>
                        <br />
                        <Typography>start off with something easy</Typography>
                        <br />
                        <WhiteButton title='Easy' href='/coming-soon' />
                        <br />
                        {/* <WhiteButton title='Medium' href='/coming-soon' />
                        <br />
                        <WhiteButton title='Hard' href='/coming-soon' /> */}
                      </Container>
                      <Container className={classes.mobGrid}>
                        <img
                          src={require('../../images/6x6.png')}
                          alt='6x6 grid'
                        ></img>
                      </Container>
                      <Container className={classes.mobSection2}>
                        <Typography className={classes.mobHeader}>
                          6x6
                        </Typography>
                        <br />
                        <Typography>let's kick it up a notch!</Typography>
                        <br />
                        <WhiteButton title='Easy' href='/coming-soon' />
                        <br />
                        {/* <WhiteButton title='Medium' href='/coming-soon' />
                        <br />
                        <WhiteButton title='Hard' href='/coming-soon' /> */}
                      </Container>
                      <Container className={classes.mobGrid}>
                        <img
                          src={require('../../images/9x9new.png')}
                          alt='9x9 grid'
                        ></img>
                      </Container>
                      <Container className={classes.mobSection2}>
                        <Typography className={classes.mobHeader}>
                          9x9
                        </Typography>
                        <br />
                        <Typography>Level up even further</Typography>
                        <br />
                        <WhiteButton title='Easy' href='/game/9x9/easy' />
                        <br />
                        {/* <WhiteButton title='Medium' href='/coming-soon' />
                        <br />
                        <WhiteButton title='Hard' href='/coming-soon' /> */}
                      </Container>
                    </Box>
                  </Container>
                </Box>
              );
            default:
              return (
                <Box>
                  <Container className={classes.headerBox}>
                    <Typography className={classes.header}>
                      Which game would you like to play?
                    </Typography>
                  </Container>
                  <Container className={classes.levels}>
                    <Box className={classes.section1}>
                      <Container>
                        <img
                          src={require('../../images/4x4.png')}
                          alt='4x4 grid'
                        ></img>
                      </Container>
                      <Container>
                        <img
                          src={require('../../images/6x6.png')}
                          alt='6x6 grid'
                        ></img>
                      </Container>
                      <Container>
                        <img
                          src={require('../../images/9x9new.png')}
                          alt='9x9 grid'
                        ></img>
                      </Container>
                    </Box>
                    <Box className={classes.section1}>
                      <Container className={classes.section2}>
                        <Typography className={classes.header}>4x4</Typography>
                        <br />
                        <Typography>start off with something easy</Typography>
                        <br />
                        <WhiteButton title='Easy' href='/coming-soon' />
                        {/* <br />
                        <WhiteButton title='Medium' href='/coming-soon' />
                        <br />
                        <WhiteButton title='Hard' href='/coming-soon' /> */}
                      </Container>
                      <Container className={classes.section2}>
                        <Typography className={classes.header}>6x6</Typography>
                        <br />
                        <Typography>let's kick it up a notch!</Typography>
                        <br />
                        <WhiteButton title='Easy' href='/coming-soon' />
                        {/* <br />
                        <WhiteButton title='Medium' href='/coming-soon' />
                        <br />
                        <WhiteButton title='Hard' href='/coming-soon' /> */}
                      </Container>
                      <Container className={classes.section2}>
                        <Typography className={classes.header}>9x9</Typography>
                        <br />
                        <Typography>Level up even further</Typography>
                        <br />
                        <WhiteButton title='Easy' href='/game/9x9/easy' />
                        {/* <br />
                        <WhiteButton title='Medium' href='/coming-soon' />
                        <br />
                        <WhiteButton title='Hard' href='/coming-soon' /> */}
                      </Container>
                    </Box>
                  </Container>
                </Box>
              );
          }
        })()}
      </Box>
    </Box>
  );
};
export default SelectionPage;
