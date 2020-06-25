import React from 'react';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const GitHubBanner = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.banner}>
        <Box className={classes.icon}>
          <IconButton
            href='https://github.com/Lambda-School-Labs/omega2020-fe'
            color='inherit'
          >
            <GitHubIcon style={{ fontSize: 40, padding: 20 }} />
          </IconButton>

          <Typography variant='h6'> Find us on GitHub</Typography>
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
  },
  icon: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    background: blue[300],
  },
  banner: {
    width: '100vw',
    height: '10vh',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    background: blue[300],
    // color: '#FFFFFF',
  },
}));

export default GitHubBanner;
