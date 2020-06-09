import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import FiberManualRecordTwoToneIcon from '@material-ui/icons/FiberManualRecordTwoTone';
import { makeStyles } from '@material-ui/core/styles';
import WhiteButton from '../../assets/WhiteButton';
import AvatarElement from './AvatarElement';

const NavBarWebSkeleton = (props) => {
  const classes = useStyles();
  const { loading = false } = props;

  return (
    <Box className={classes.root} boxShadow={1}>
      <dark className={classes.root}>
        <Box className={classes.leftContainer}>
          <CardHeader
            title={
              loading ? (
                <Skeleton className={classes.text} width={60} height={55} />
              ) : (
                <Link to='/' className={(classes.root, classes.Link)}>
                  <dark className={classes.root}>
                    <Typography variant='h5'>Omega 2020</Typography>
                  </dark>
                </Link>
              )
            }
          />
          <CardHeader
            subheader={
              loading ? (
                <Skeleton className={classes.text} width={60} height={55} />
              ) : (
                <Link to='/about' className={(classes.root, classes.Link)}>
                  <dark className={classes.root}>
                    <Typography variant='subtitle2'>ABOUT US</Typography>
                  </dark>
                </Link>
              )
            }
          />
        </Box>

        <Box className={classes.rightContainer}>
          <Box className={classes.links}>
            <CardHeader
              subheader={
                loading ? (
                  <Skeleton className={classes.text} width={60} height={55} />
                ) : (
                  <Link to='/' className={(classes.root, classes.Link)}>
                    <dark className={classes.root}>
                      <Typography variant='subtitle2'>GET STARTED</Typography>
                    </dark>
                  </Link>
                )
              }
            />
            <CardHeader
              subheader={
                loading ? (
                  <Skeleton className={classes.text} width={60} height={55} />
                ) : (
                  <Link to='/' className={(classes.root, classes.Link)}>
                    <dark className={classes.root}>
                      <Typography variant='subtitle2'>ARCHIVE</Typography>
                    </dark>
                  </Link>
                )
              }
            />
            <CardHeader
              subheader={
                loading ? (
                  <Skeleton className={classes.text} width={60} height={55} />
                ) : (
                  <Link to='/' className={(classes.root, classes.Link)}>
                    <dark className={classes.root}>
                      <Typography variant='subtitle2'>LEADERBOARD</Typography>
                    </dark>
                  </Link>
                )
              }
            />
            <CardHeader
              action={
                loading ? (
                  <Skeleton className={classes.text_4} width={60} height={55} />
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
    width: '49%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'left',
    alignItems: 'center',
    marginLeft: '10px',
  },
  rightContainer: {
    width: '50%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'left',
    alignItems: 'center',
  },
  Link: {
    textDecoration: 'none',
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  mode: {
    marginRight: '25px',
    marginLeft: '10px',
  },
}));

export default NavBarWebSkeleton;
