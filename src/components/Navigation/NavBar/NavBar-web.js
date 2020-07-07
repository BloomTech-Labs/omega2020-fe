import React from 'react';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import FiberManualRecordTwoToneIcon from '@material-ui/icons/FiberManualRecordTwoTone';
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
              <Link href='/' className={classes.img} color='inherit'>
                <img src={Logo} alt='logo' style={{ width: 20, height: 20 }} />
                <Typography variant='subtitle2' style={{ fontWeight: 600 }}>
                  SUDOMEGA
                </Typography>
              </Link>
            )
          }
        />
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
      </Box>

      <Box className={classes.rightContainer}>
        <Box className={classes.links}>
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
                <WhiteButton title={'Play'} href={'/coming-soon'} />
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
                  <FiberManualRecordTwoToneIcon style={{ fontSize: 30 }} />
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
  img: {
    '& > *': {
      margin: theme.spacing(1),
    },
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    textDecoration: 'none',
  },
}));

export default NavBarWeb;
