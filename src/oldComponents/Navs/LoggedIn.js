import React from 'react'
import {NavLink} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles(theme => ({
    nav: {
        backgroundColor: "#1d1c1d",

    },
    grid: {
  },
    label: {
        style:'none',
        margin: theme.spacing(3,5,3,5),
        color:'white',
        
    },
    image: {
        width: '180px',
        height: 'auto',
        margin: '10px',
    },
    menu: {
    },
    menuItem: {
      color:'black',
      display: 'flex',
      flexDirection: 'column',
      margin: theme.spacing(3,5,3,5),
    },
  }));
  

const LoggedIn = (props) => { 
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
          <Grid
            justify='flex-end' // Add it here :)
            container 
            spacing={24}
            className={classes.grid}>
                <Link className={classes.label} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                  New Puzzle
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
                    <Link style={{textDecoration: "none"}} href="/random" onClick={handleClose} className={classes.menuItem} label="Play Puzzle">
                      Random
                    </Link>
                    <Link style={{textDecoration: "none"}} href="/easy" onClick={handleClose} className={classes.menuItem} label="Play Puzzle">
                      Easy
                    </Link>
                    <Link style={{textDecoration: "none"}} href="/medium" onClick={handleClose} className={classes.menuItem} label="Play Puzzle">
                      Medium
                    </Link>
                    <Link style={{textDecoration: "none"}} href="/hard" onClick={handleClose} className={classes.menuItem} label="Play Puzzle">
                      Hard
                    </Link>
                    <Link style={{textDecoration: "none"}} href="/diabolical" onClick={handleClose} className={classes.menuItem} label="Play Puzzle">
                      Diabolical
                    </Link>
                </Menu>
                <Link href="/user-puzzles" className={classes.label} label="Resume Puzzle">
                  Resume Puzzle
                </Link>
                <Link href="/upload" className={classes.label} label="Upload Image">
                  Upload Puzzle
                </Link>
                <Link href="/about" className={classes.label} label="About Team">
                  About Us
                </Link>
                <Link href="/" onClick={logout} className={classes.label} label="Logout">
             Logout
           </Link>
            </Grid>
          </Tabs>
        </AppBar>
      )
}
  
export default LoggedIn;