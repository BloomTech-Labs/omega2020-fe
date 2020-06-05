import React from 'react';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import BG1 from '../../images/BG1.png';
import shapes from '../../images/shapes.png';
import shapes2 from '../../images/shapes2.png';
import { makeStyles } from '@material-ui/core/styles';

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
              <Typography variant='h4'>About Omega 2020</Typography>
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
                      <img src={shapes2} alt='' />
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
                      <img src={shapes} alt='' />
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
                    Omega 2020. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in
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
    </Box>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-evenly',
    background: '#FFFFFF',
  },
  banner: {
    width: '100%',
    height: '200px',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    backgroundImage: `url(${BG1})`,
    backgroundSize: 'cover',
    color: '#FFFFFF',
  },
  mainContainer: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-evenly',
    marginTop: 150,
    marginBottom: 150,
  },
  leftContainer: {
    width: '700px',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    padding: 30,
  },
  rightContainer: {
    width: '700px',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    padding: 30,
  },
}));

export default AboutUs;
