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
                <Typography variant='h4' data-testid='head1'>
                  About Sudomega
                </Typography>
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
                    <Typography variant={'h5'} data-testid='head2'>
                      Our Story
                    </Typography>
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
                    Sudomega started as a Lambda School Labs project, meaning we
                    were given an idea and told to run with it! Currently we are
                    the second team to work on Sudomega, previously known as
                    Omega2020. Our goal is to bring Sudoku to everyone. We want
                    to make it easy and fun to learn while still challenging
                    more experienced users.
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
                    <Typography variant={'h5'} data-testid='head2'>
                      About Our Teams
                    </Typography>
                  </Box>
                )
              }
            />
            <CardHeader
              subheader={
                loading ? (
                  <Skeleton width={400} height={400} />
                ) : (
                  <Typography data-testid='subheader'>
                    An overview of the founding team and core contributors to
                    Sudomega. Teams are composed of Web Developers, Ux
                    Designers, and Data Scientists. Feel free to click on each
                    members picture to learn more about them!
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
