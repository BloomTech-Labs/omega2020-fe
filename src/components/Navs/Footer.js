import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import Container from '@material-ui/core/Container';


function Copyright() {
    return (
      <Typography variant="body2" color="white" align="left">
        {'Copyright © '}
        <Link style={{textDecoration: "none"}} color="inherit" href="https://material-ui.com/">
          Omega2020
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const useStyles = makeStyles(theme => ({
    nav: {
        backgroundColor: "#1d1c1d",
    },
    label: {
    },
    footer: {
        padding: theme.spacing(1),
        display: 'flex',
        height: 'auto'
        
    },
    image: {
        width: '180px',
        height: 'auto',
        margin: '10px',
        fontFamily: 'Julius Sans One',
    },
    icons: {
        marginRight: theme.spacing(2),
      },
  }));
  

const Nav = () => { 
    const classes = useStyles();

      return (
        <AppBar position="static" className={classes.nav} title="My App">
            <footer className={classes.footer}>
                <Copyright className={classes.footer} />
                <Grid 
                justify='flex-end'
                container 
                spacing={24}>
                    <InstagramIcon className={classes.icons} />
                    <FacebookIcon className={classes.icons} />
                    <TwitterIcon className={classes.icons} />
                </Grid>
            </footer>
        </AppBar>
      )
    }
  
export default Nav;