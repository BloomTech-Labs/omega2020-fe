import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';

const AvatarLogout = (props) => {
  const classes = useStyles();

  return (
    <Box>
      <MenuItem className={classes.MenuItem}>
        Welcome to Omega 2020 <Typography>User Name</Typography>
        <br />
        <img src={PersonIcon} alt='user icon' width={70} />
        <br />
      </MenuItem>
      <hr style={{ height: '1px' }} />
      <Link to='/' className={(classes.root, classes.Link)}>
        <MenuItem className={classes.MenuItem} onClick={props.handleClose}>
          My account
        </MenuItem>
      </Link>
      <hr style={{ height: '1px' }} />
      <Link to='/' className={(classes.root, classes.Link)}>
        <MenuItem className={classes.MenuItem} onClick={props.handleClose}>
          Logout
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

export default AvatarLogout;
