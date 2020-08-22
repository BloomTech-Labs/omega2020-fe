import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles } from '@material-ui/core/styles';

const LoginLogOut = (props) => {
  const logout = () => {
    localStorage.removeItem('token');
  };

  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {localStorage.getItem('token') !== null ? (
        <Paper className={classes.tripleItemActive}>
          <MenuItem className={classes.MenuItem}>
            <span>
              <Typography color='interit'>Welcome</Typography>
              <PersonIcon color='interit' />
            </span>

            <br />
          </MenuItem>
          <hr style={{ height: '1px' }} />
          <Link to='/' className={(classes.root, classes.Link)}>
            <MenuItem className={classes.MenuItem} onClick={props.handleClose}>
              My account
            </MenuItem>
          </Link>
          <hr style={{ height: '1px' }} />
          <Link
            onClick={logout}
            to='/'
            className={(classes.root, classes.Link)}
          >
            <MenuItem className={classes.MenuItem} onClick={props.handleClose}>
              Logout
            </MenuItem>
          </Link>
        </Paper>
      ) : (
        <Paper className={classes.tripleItemGrey}>
          <Link to='/login' className={classes.Link}>
            <MenuItem className={classes.MenuItem} onClick={props.handleClose}>
              Log In
            </MenuItem>
          </Link>
          <hr style={{ height: '1px' }} />
          <Link to='/register' className={classes.Link}>
            <MenuItem className={classes.MenuItem} onClick={props.handleClose}>
              Subscribe
            </MenuItem>
          </Link>
        </Paper>
      )}
    </Box>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    background: '#fff',
  },
  MenuItem: {
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingRight: 100,
    background: '#fff',
  },
  Link: {
    textDecoration: 'none',
    color: '#141414',
  },
}));

export default LoginLogOut;
