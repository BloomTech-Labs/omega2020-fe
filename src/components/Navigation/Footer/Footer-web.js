import React from 'react';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { makeStyles } from '@material-ui/core/styles';

const FooterWeb = (props) => {
  const classes = useStyles();
  const { loading = false } = props;

  return (
    <Box className={classes.root}>
      <dark className={classes.root}>
        <Box className={classes.leftContainer}>
          <CardHeader
            title={
              loading ? (
                <Skeleton className={classes.text} width={100} height={55} />
              ) : (
                <Typography variant='subtitle1'>
                  Copyright © SUDOMEGA 2020.
                </Typography>
              )
            }
          />
        </Box>

        <Box className={classes.rightContainer}>
          <Box className={classes.media}>
            <CardHeader
              action={
                loading ? (
                  <Skeleton className={classes.text} width={60} height={55} />
                ) : (
                  <Box className={classes.space}>
                    <GitHubIcon />
                    <TwitterIcon />
                    <InstagramIcon />
                    <FacebookIcon />
                    <LinkedInIcon />
                  </Box>
                )
              }
            />
          </Box>
        </Box>
      </dark>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
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
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  media: {
    width: '75%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  space: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default FooterWeb;
