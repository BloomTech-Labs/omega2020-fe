import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import {NavLink} from "react-router-dom";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import menuItem from '@material-ui/core/MenuItem';
import { withRouter } from "react-router-dom";
import history from '../../utils/history';

const useStyles = makeStyles(theme => ({
    nav: {
        backgroundColor: "#1d1c1d",

    },
    grid: {
  },
    label: {
        style:'none',
        margin: theme.spacing(3,2,2,2),
        color:'white',
        
        
    },
    image: {
        width: '180px',
        height: 'auto',
        margin: '8px',
    },
    menu: {
    },
    menuItem: {
      color:'black',
      display: 'flex',
      flexDirection: 'column',
      margin: theme.spacing(2,2,2,2),
    },
    Button: {
      display: 'inline-block',
      boxShadow: '0px 1px 0px 0px #ffffff',
      background: 'linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%)',
      backgroundColor: '#ffffff',
      borderRadius: '4px',
      border: '2px solid #dcdcdc',
      cursor: 'pointer',
      color: '#1e85e0',
      fontFamily: 'Julius Sans One',
      fontSize: '16px',
      fontWeight: 'bold',
      padding: '4px 22px',
      height: '18px',
      textDecoration: 'none',
      textShadow: '0px 1px 0px #ffffff',
      margin: theme.spacing(2,2,2,2),
    
      '&:hover': {
      background: 'linear-gradient(to bottom, #f6f6f6 5%, #ffffff 100%)',
      backgroundColor: '#f6f6f6',
      },
      '&:active': {
      position: 'relative',
      top: '1px'
      }
    },
  }));
  

const LoggedOut = (props) => { 
    const classes = useStyles();

    const logout = () => {
      localStorage.removeItem("token");
  }

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

      return (
        <AppBar position="static" className={classes.nav} title="My App">
          <Tabs>
          <NavLink style={{textDecoration: "none"}} to="/">
            <img className={classes.image} src={require('../../images/omegalogo.PNG')} />
          </NavLink> 
          <Link style={{textDecoration: "none"}} href="/about" className={classes.label} label="About Team">
                    About Us
          </Link>
          <Grid
            justify='flex-end' // Add it here :)
            container 
            spacing={24}
            className={classes.grid}>

                {/* href='/archive' */}
                <Link style={{textDecoration: "none"}} href='/archive' className={classes.label} label='Archive'>
                  Archive
                </Link>
                {/* href='/leaderboard' */}
                <Link style={{textDecoration: "none"}} href='/leaderboard' className={classes.label} label='Leaderboard'>
                  Leaderboard
                </Link> 
                {/* href='/instructions' */}
                <Link style={{textDecoration: "none"}} href='/' className={classes.label} label='Instructions'>
                  What is Sudoku?
                </Link>
                {/* href='/play' */}
                <Link style={{textDecoration: "none"}} className={classes.Button} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} label='Play'>
                  Play
                </Link>
                <Menu
                  className={classes.menu}
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  width="75%"                
                  > 
                    <Link style={{textDecoration: "none"}} href="/easy" onClick={handleClose} className={classes.menuItem} label="Play Puzzle">
                      Easy
                    </Link>
                    <Link style={{textDecoration: "none"}} href="/medium" onClick={handleClose} className={classes.menuItem} label="Play Puzzle">
                      Medium
                    </Link>
                    <Link style={{textDecoration: "none"}} href="/hard" onClick={handleClose} className={classes.menuItem} label="Play Puzzle">
                      Hard
                    </Link>
                </Menu>
                <NavLink style={{textDecoration: "none"}} to="/login">
                  <img className={classes.label} style={{margin:'16px'}} src={require('../../images/account-icon.png')} />
                </NavLink>
            </Grid>
          </Tabs>
        </AppBar>
      )
    }
  
export default LoggedOut;