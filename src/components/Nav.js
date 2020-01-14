import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles(theme => ({
    nav: {
        backgroundColor: "#1d1c1d",

    },
    label: {
        style:'none',
        margin: theme.spacing(3),
        marginRight: theme.spacing(7),
        color:'white',

    },
    image: {
        width: '180px',
        height: 'auto',
        margin: '10px',
    }
  }));
  

const Nav = () => { 
    const classes = useStyles();


      return (
        <AppBar position="static" className={classes.nav} title="My App">
          <Tabs>
          <img className={classes.image} src={require('../images/omegalogo.PNG')} />

          <Grid
            justify='flex-end' // Add it here :)
            container 
            spacing={24}>
                <Link href="/puzzle" className={classes.label} label="Play Puzzle">
                Play Puzzle
                </Link>
                <Link href="/home" className={classes.label} label="Play Puzzle">
                Home
                </Link>

            </Grid>
                {/* <Tab className={classes.label} label="Item 2" />
                <Tab className={classes.label} label="Item 3" />
                <Tab className={classes.label} label="Item 4" /> */}
          </Tabs>
        </AppBar>
      )
    }
  
export default Nav