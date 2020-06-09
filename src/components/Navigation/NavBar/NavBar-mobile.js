import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../../images/omega-logo.png';
import AvatarElement from './AvatarElement';

const NavBarMobile = (props) => {
  const classes = useStyles();
  const { loading = false } = props;

  return (
    <Box className={classes.root} boxShadow={4}>
      <dark className={classes.root}>
        <Box className={classes.leftContainer}>
          <CardHeader
            action={
              loading ? (
                <Skeleton className={classes.text} width={40} height={40} />
              ) : (
                <MenuIcon style={{ fontSize: 30, paddingTop: 10 }} />
              )
            }
          />
        </Box>

        <Box className={classes.centerContainer}>
          <CardHeader
            avatar={
              loading ? (
                <Skeleton className={classes.text} width={40} height={40} />
              ) : (
                <Link to='/' className={(classes.root, classes.Link)}>
                  <img src={logo} alt='Logo' width='35' height='40' />
                </Link>
              )
            }
          />
        </Box>

        <Box className={classes.rightContainer}>
          <Box className={classes.icons}>
            <CardHeader
              avatar={
                loading ? (
                  <Skeleton variant='circle' width={40} height={40} />
                ) : (
                  <AvatarElement />
                )
              }
            />
          </Box>
        </Box>
      </dark>
    </Box>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    position: 'sticky',
    top: 0,
    left: 0,
    '& dark': {
      background: '#141414',
      color: '#FFFFFF',
    },
    '& light': {
      background: '#FFFFFF',
      color: '#141414',
    },
  },
  leftContainer: {
    width: '40%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rightContainer: {
    width: '40%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  centerContainer: {
    width: '10%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icons: {
    width: '45%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
}));

export default NavBarMobile;
