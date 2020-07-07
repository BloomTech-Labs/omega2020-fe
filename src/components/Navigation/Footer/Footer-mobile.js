import React from 'react';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import AppsIcon from '@material-ui/icons/Apps';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import { makeStyles } from '@material-ui/core/styles';

const FooterMobile = (props) => {
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
                <BookmarkIcon style={{ fontSize: 30, paddingTop: 10 }} />
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
                <AppsIcon style={{ fontSize: 30, paddingTop: 10 }} />
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
                  <EqualizerIcon style={{ fontSize: 30, paddingTop: 10 }} />
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
    bottom: 0,
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

export default FooterMobile;
