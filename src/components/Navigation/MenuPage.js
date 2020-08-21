import React from 'react';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const MenuPage = (props) => {
  const classes = useStyles();
  const { loading = false } = props;

  return (
    <Box className={classes.root}>
      <Box className={classes.mainContainer}>
        <CardHeader
          avatar={
            loading ? (
              <Skeleton
                className='bannerIMG'
                variant='rect'
                width={600}
                height={600}
              />
            ) : (
              <Box className={classes.headerBox}>
                <Typography
                  className={classes.header}
                  style={{ fontSize: '1.3rem' }}
                >
                  MENU
                </Typography>

                <br />
                <br />

                <Link href='/'>
                  <Typography className={classes.subheader}>Home</Typography>
                </Link>
                <br />
                <Link href='/levels'>
                  <Typography className={classes.subheader}>Play</Typography>
                </Link>
                <br />
                <Link href='/about'>
                  <Typography className={classes.subheader}>About</Typography>
                </Link>
                <br />
                <Link href='/tutorial'>
                  <Typography className={classes.subheader}>
                    Tutorials
                  </Typography>
                </Link>
                <br />
              </Box>
            )
          }
        />
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // height: '80vh',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200,
  },
  mainContainer: {
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  subheader: {
    // opacity: 0.3,
    color: '#A2A2A2',
  },
  space: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default MenuPage;
