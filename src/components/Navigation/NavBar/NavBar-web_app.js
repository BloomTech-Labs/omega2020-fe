import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import VerticalSplitIcon from '@material-ui/icons/VerticalSplit';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import FiberManualRecordTwoToneIcon from '@material-ui/icons/FiberManualRecordTwoTone';
import { makeStyles } from '@material-ui/core/styles';
import WhiteButton from '../../assets/WhiteButton';
import logo from '../../../images/omega-logo.png';
import AvatarElement from './AvatarElement';

const NavBarWebApp = (props) => {
  const classes = useStyles();
  const { loading = false } = props;

  return (
    <Box className={classes.root} boxShadow={4}>
      <dark className={classes.root}>
        <Box className={classes.leftContainer}>
          <CardHeader
            action={
              loading ? (
                <Skeleton className={classes.text} width={60} height={55} />
              ) : (
                <Link to='/' className={(classes.root, classes.Link)}>
                  <dark className={classes.root}>
                    <VerticalSplitIcon
                      style={{ fontSize: 30, paddingTop: 10 }}
                    />
                  </dark>
                </Link>
              )
            }
          />
          <CardHeader
            action={
              loading ? (
                <Skeleton className={classes.text} width={60} height={55} />
              ) : (
                <Link to='/' className={(classes.root, classes.Link)}>
                  <dark className={classes.root}>
                    <BookmarkIcon style={{ fontSize: 30, paddingTop: 10 }} />
                  </dark>
                </Link>
              )
            }
          />
          <CardHeader
            action={
              loading ? (
                <Skeleton className={classes.text} width={60} height={55} />
              ) : (
                <Link to='/' className={(classes.root, classes.Link)}>
                  <dark className={classes.root}>
                    <EqualizerIcon style={{ fontSize: 30, paddingTop: 10 }} />
                  </dark>
                </Link>
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
          <Box className={classes.links}>
            <CardHeader
              action={
                loading ? (
                  <Skeleton className={classes.text} width={60} height={55} />
                ) : (
                  <WhiteButton title={'Play'} />
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
                  <FiberManualRecordTwoToneIcon
                    className={classes.mode}
                    style={{ fontSize: 25, paddingTop: 10 }}
                  />
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
    justifyContent: 'left',
    alignItems: 'center',
    marginLeft: '10px',
  },
  rightContainer: {
    width: '40%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerContainer: {
    width: '10%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  links: {
    width: '55%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  icons: {
    width: '45%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mode: {
    marginRight: '25px',
    marginLeft: '10px',
  },
}));

export default NavBarWebApp;
