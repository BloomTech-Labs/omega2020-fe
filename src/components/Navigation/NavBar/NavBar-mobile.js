import React from 'react';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import { IconButton } from '@material-ui/core';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import FiberManualRecordTwoToneIcon from '@material-ui/icons/FiberManualRecordTwoTone';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../../../images/omega-logo.png';

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
              <IconButton color='inherit' onClick={props.toggleTheme}>
                {(() => {
                  switch (props.theme) {
                    case 'dark':
                      return <WbSunnyIcon style={{ fontSize: 25 }} />;
                    default:
                      return (
                        <Brightness3Icon
                          style={{ fontSize: 25, transform: 'rotate(140deg)' }}
                        />
                      );
                  }
                })()}
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
              <Link href='/menu' className={classes.root}>
                <img src={Logo} alt='logo' style={{ width: 30, height: 30 }} />
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
