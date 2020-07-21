import React from 'react';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AppIcon from '../../images/omega-mobile-icon.png';
import BG1 from '../../images/omega-logo.png'; //Changed BG1.png to omega-logo.png because BG1.png doesn't exist
import BlueButton from './BlueButton';

const Advertisement = (props) => {
  const classes = useStyles();
  const { loading = false } = props;

  return (
    <Box className={classes.root}>
      <Box className={classes.centerContainer}>
        <Box className={classes.container}>
          <CardHeader
            avatar={
              loading ? (
                <Skeleton className={classes.title} width={600} />
              ) : (
                <img src={AppIcon} alt='App Icon' style={{ width: '150px' }} className='img' />
              )
            }
          />
          <CardHeader
            subheader={
              loading ? (
                <Skeleton width={500} height={400} />
              ) : (
                <Typography variant='h4'>Omega 2020</Typography>
              )
            }
          />
          <CardHeader
            subheader={
              loading ? (
                <Skeleton className={classes.title} width={400} height={50} />
              ) : (
                <Typography variant='h5'>
                  Coming soon to app stores near you :&#41;
                </Typography>
              )
            }
          />
          <CardHeader
            subheader={
              loading ? (
                <Skeleton className={classes.text} width={60} height={55} />
              ) : (
                <BlueButton
                  title={'GitHub'}
                  href={'https://github.com/Lambda-School-Labs/omega2020-fe'}
                />
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
    height: '700px',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundImage: `url(${BG1})`,
    backgroundSize: 'cover',
  },
  centerContainer: {
    width: '40%',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    padding: 30,
  },
  container: {
    width: '100%',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    color: 'white',
  },
}));

export default Advertisement;
