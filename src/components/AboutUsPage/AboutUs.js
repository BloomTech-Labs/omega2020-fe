import React from 'react';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import GroupIcon from '@material-ui/icons/Group';
import { makeStyles } from '@material-ui/core/styles';
import { TeamVersion1, TeamVersion2 } from './TeamList';

const AboutUs = (props) => {
  const classes = useStyles();
  const { loading = false } = props;

  return (
    <Box className={classes.root}>
      <Box className={classes.banner}>
        <CardHeader
          title={
            loading ? (
              <Skeleton className={classes.title} width={400} height={100} />
            ) : (
              <Box>
                <Typography variant='h4'>About Sudomega</Typography>
                <TeamVersion2 />
              </Box>
            )
          }
        />
      </Box>

      <Box className={classes.mainContainer}>
        <Box className={classes.leftContainer}>
          <Box className={classes.container}>
            <CardHeader
              title={
                loading ? (
                  <Skeleton
                    className={classes.title}
                    width={400}
                    height={100}
                  />
                ) : (
                  <Box>
                    <Box className={classes.img}>
                      <AccessibilityNewIcon style={{ fontSize: 100 }} />
                    </Box>
                    <br />
                    <Typography variant={'h5'}>Our Story</Typography>
                  </Box>
                )
              }
            />
            <CardHeader
              subheader={
                loading ? (
                  <Skeleton width={400} height={400} />
                ) : (
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Typography>
                )
              }
            />
          </Box>
        </Box>

        <Box className={classes.rightContainer}>
          <Box className={classes.container}>
            <CardHeader
              title={
                loading ? (
                  <Skeleton
                    className={classes.title}
                    width={400}
                    height={100}
                  />
                ) : (
                  <Box>
                    <Box className={classes.img}>
                      <GroupIcon style={{ fontSize: 100 }} />
                    </Box>
                    <br />
                    <Typography variant={'h5'}>About Our Teams</Typography>
                  </Box>
                )
              }
            />
            <CardHeader
              subheader={
                loading ? (
                  <Skeleton width={400} height={400} />
                ) : (
                  <Typography>
                    An overview of the founding team and core contributors to
                    Omega 2020. eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Typography>
                )
              }
            />
          </Box>
        </Box>
      </Box>

      <hr width='100%' />
      <TeamVersion1 />
      <br />
      <br />
    </Box>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 150,
  },
  mainContainer: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-evenly',
    // marginTop: 150,
    marginBottom: 150,
  },
  leftContainer: {
    width: '600px',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    padding: 30,
    textAlign: 'center',
  },
  rightContainer: {
    width: '600px',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    padding: 30,
    textAlign: 'center',
  },
}));

export default AboutUs;
