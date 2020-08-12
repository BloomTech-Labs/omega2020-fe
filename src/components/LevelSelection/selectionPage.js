import React from 'react';
import { makeStyles, Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import WhiteButton from '../assets/WhiteButton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import { grey } from '@material-ui/core/colors';

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
      fontSize: '2em'
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
    }
}));

const SelectionPage = () => {
    const classes = useStyles();

    return (
        <Box className= {classes.root}>
            <Box className= {classes.mainContainer}>
                <Container className= {classes.headerBox}>
                    <Typography className= {classes.header}>
                        Which game would you like to play?
                    </Typography>
                </Container>
                <Container className= {classes.levels}>
                   <Box className= {classes.section1}>
                       <Container>
                         <img
                            src={require('../../images/4x4.png')}
                            alt='4x4 grid' >   
                          </img> 
                       </Container>
                        <Container>
                            <img
                            src={require('../../images/6x6.png')}
                            alt='6x6 grid' 
                            >   
                            </img> 
                        </Container>
                        <Container>
                          <img
                            src={require('../../images/9x9.png')}
                            width='75%'
                            height='74%'
                            alt='9x9 grid' 
                            >   
                          </img>  
                        </Container>
                        
                    </Box>
                    <Box className= {classes.section1}>
                        <Container className= {classes.section2}>
                            <Typography>4x4</Typography>
                            <Typography>start off with something easy</Typography>
                            <WhiteButton title='Easy'/>
                            <br/>
                            <WhiteButton title='Medium'/>
                            <br/>
                            <WhiteButton title='Hard'/>
                        </Container>
                        <Container className= {classes.section2}>
                            <Typography>6x6</Typography>
                            <Typography>let's kick it up a notch!</Typography>
                            <WhiteButton title='Easy'/>
                            <br/>
                            <WhiteButton title='Medium'/>
                            <br/>
                            <WhiteButton title='Hard'/>
                        </Container>
                        <Container className= {classes.section2}>
                            <Typography>9x9</Typography>
                            <Typography>Level up even further</Typography>
                            <WhiteButton title='Easy'/>
                            <br/>
                            <WhiteButton title='Medium'/>
                            <br/>
                            <WhiteButton title='Hard'/>
                        </Container>
                    </Box>
                </Container>
            </Box>
        </Box>
    )
};
export default SelectionPage;