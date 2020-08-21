import React from 'react';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Tooltip from '@material-ui/core/Tooltip';
import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import WhiteButton from '../../assets/WhiteButton';
import AvatarElement from './AvatarElement';
import Logo from '../../../images/omega-logo.png';

const NavBarWeb = (props) => {
  const classes = useStyles();
  const { loading = false } = props;

  return (
    <Box className={classes.root}>
      <Box className={classes.leftContainer}>
        <CardHeader
          title={
            loading ? (
              <Skeleton className={classes.text} width={60} height={55} />
            ) : (
              <Box className={classes.leftContainer}>
                <BootstrapTooltip title={'menu'}>
                  <Link href='/menu' className={classes.logo}>
                    <img
                      src={Logo}
                      alt='logo'
                      style={{ width: 20, height: 20 }}
                    />
                  </Link>
                </BootstrapTooltip>

                <Link href='/' className={classes.title} color='inherit'>
                  <Typography variant='subtitle2' style={{ fontWeight: 600 }}>
                    SUDOMEGA
                  </Typography>
                </Link>
              </Box>
            )
          }
        />
      </Box>

      <Box className={classes.rightContainer}>
        <Box className={classes.links}>
          <CardHeader
            title={
              loading ? (
                <Skeleton className={classes.text} width={60} height={55} />
              ) : (
                <Link href='/about' className={classes.root} color='inherit'>
                  <Typography variant='caption'>About Us</Typography>
                </Link>
              )
            }
          />
          <CardHeader
            title={
              loading ? (
                <Skeleton className={classes.text} width={60} height={55} />
              ) : (
                <Link href='/tutorial' className={classes.root} color='inherit'>
                  <Typography variant='caption'>Get Started</Typography>
                </Link>
              )
            }
          />
          <CardHeader
            title={
              loading ? (
                <Skeleton className={classes.text} width={60} height={55} />
              ) : (
                <Link
                  href='/coming-soon'
                  className={classes.root}
                  color='inherit'
                >
                  <Typography variant='caption'>Archive</Typography>
                </Link>
              )
            }
          />
          <CardHeader
            title={
              loading ? (
                <Skeleton className={classes.text} width={60} height={55} />
              ) : (
                <Link
                  href='coming-soon'
                  className={classes.root}
                  color='inherit'
                >
                  <Typography variant='caption'>Leaderboard</Typography>
                </Link>
              )
            }
          />
          <CardHeader
            action={
              loading ? (
                <Skeleton className={classes.text_4} width={60} height={55} />
              ) : (
                <WhiteButton title={'Play'} href={'/levels'} />
              )
            }
          />
        </Box>

        <Box className={classes.icons}>
          <CardHeader
            action={
              loading ? (
                <Skeleton
                  className={classes.mode}
                  variant='circle'
                  width={25}
                  height={25}
                />
              ) : (
                <IconButton color='inherit' onClick={props.toggleTheme}>
                  {(() => {
                    switch (props.theme) {
                      case 'dark':
                        return <WbSunnyIcon style={{ fontSize: 20 }} />;
                      default:
                        return (
                          <Brightness3Icon
                            style={{
                              fontSize: 20,
                              transform: 'rotate(140deg)',
                            }}
                          />
                        );
                    }
                  })()}
                </IconButton>
              )
            }
          />
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

const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    color: grey[200],
  },
  tooltip: {
    backgroundColor: grey[200],
    color: '#000',
  },
}));

function BootstrapTooltip(props) {
  const classes = useStylesBootstrap();

  return <Tooltip arrow classes={classes} {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    textDecoration: 'none',
  },
  leftContainer: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'left',
    alignItems: 'center',
    marginLeft: '10px',
  },
  rightContainer: {
    width: '70%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  links: {
    width: '75%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  icons: {
    width: '25%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  mode: {
    marginRight: '25px',
    marginLeft: '10px',
  },
  title: {
    '& > *': {
      margin: theme.spacing(1),
    },
    width: '70%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    textDecoration: 'none',
  },
}));

export default NavBarWeb;
