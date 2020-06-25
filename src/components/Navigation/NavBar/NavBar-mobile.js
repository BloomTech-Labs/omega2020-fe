import React from 'react';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import FiberManualRecordTwoToneIcon from '@material-ui/icons/FiberManualRecordTwoTone';
import GridOnIcon from '@material-ui/icons/GridOn';
import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
// import logo from '../../../images/omega-logo.png';

import AvatarElement from './AvatarElement';

const NavBarMobile = (props) => {
  const classes = useStyles();
  const { loading = false } = props;

  return (
    <Box className={classes.root}>
      <Box className={classes.leftContainer}>
        <CardHeader
          action={
            loading ? (
              <Skeleton className={classes.text} width={40} height={40} />
            ) : (
              // <MenuIcon style={{ fontSize: 30, paddingTop: 10 }} />
              <IconButton color='inherit' onClick={props.toggleTheme}>
                <FiberManualRecordTwoToneIcon style={{ fontSize: 30 }} />
              </IconButton>
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
              <Link to='/' className={classes.root}>
                {/* <img src={'logo'} alt='Logo' width='35' height='40' /> */}
                <GridOnIcon style={{ color: blue.A700 }} />
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
    </Box>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    textDecoration: 'none',
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
