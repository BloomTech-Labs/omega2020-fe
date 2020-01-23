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
import MenuItem from '@material-ui/core/MenuItem';
import { withRouter } from "react-router-dom";
import history from '../utils/history';

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
  

const Nav = (props) => { 
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
            <img className={classes.image} src={require('../images/omegalogo.PNG')} />
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
          
                <Link href="/" onClick={logout} className={classes.label} label="Logout">
                Logout
                </Link>
                <Link href="/puzzles" className={classes.label} label="Saved Puzzles">
                  Saved Puzzles
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