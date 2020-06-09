import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

const AvatarLogin = (props) => {
  const classes = useStyles();

  return (
    <Box>
      <Link to='/' className={(classes.root, classes.Link)}>
        <MenuItem className={classes.MenuItem} onClick={props.handleClose}>
          Home
        </MenuItem>
      </Link>
      <hr style={{ height: '1px' }} />
      <Link to='/login' className={(classes.root, classes.Link)}>
        <MenuItem className={classes.MenuItem} onClick={props.handleClose}>
          Log In
        </MenuItem>
      </Link>
      <hr style={{ height: '1px' }} />
      <Link to='/register' className={(classes.root, classes.Link)}>
        <MenuItem className={classes.MenuItem} onClick={props.handleClose}>
          Subscribe
        </MenuItem>
      </Link>
      <hr style={{ height: '1px' }} />
      <Link to='/about' className={(classes.root, classes.Link)}>
        <MenuItem className={classes.MenuItem} onClick={props.handleClose}>
          About Us
        </MenuItem>
      </Link>
    </Box>
  );
};

const useStyles = makeStyles(() => ({
  MenuItem: {
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingRight: 120,
  },
  Link: {
    textDecoration: 'none',
    color: '#141414',
  },
}));

export default AvatarLogin;
