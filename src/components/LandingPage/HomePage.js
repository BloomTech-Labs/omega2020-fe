import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

import CategoryIcon from '@material-ui/icons/Category';
import AppsIcon from '@material-ui/icons/Apps';
import GetAppIcon from '@material-ui/icons/GetApp';

import BlueButton from '../assets/BlueButton';
import Cube from '../../images/cube4.gif';

const HomePage = (props) => {
  const classes = useStyles();
  const { loading = false } = props;

  let viewPort = false;
  const md = useMediaQuery('(min-width: 1050px)');
  if (viewPort === md) {
    viewPort = true;
  } else {
    viewPort = false;
  }

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
                {(() => {
                  switch (viewPort) {
                    case true:
                      return (
                        <Box>
                          <Typography
                            className={classes.header}
                            style={{ fontSize: '1.3rem' }}
                            id='sudo'
                          >
                            Sudomega Interactive Sudoku
                          </Typography>
                          <br />
                          <Typography className={classes.subheader} id='upload'>
                            Learn how to play, upload your own sudoku
                            <br />
                            games, and compete with friends :&#41;
                          </Typography>
                        </Box>
                      );
                    default:
                      return (
                        <Box>
                          <Typography variant='h3' className={classes.header}>
                            Sudomega Interactive Sudoku
                          </Typography>
                          <br />
                          <Typography
                            variant='body1'
                            className={classes.subheader}
                          >
                            Learn how to play, upload your own sudoku
                            <br />
                            games, and compete with friends :&#41;
                          </Typography>
                        </Box>
                      );
                  }
                })()}
              </Box>
            )
          }
        />
        <CardHeader
          action={
            loading ? (
              <Skeleton className={classes.text} width={60} height={55} />
            ) : (
              <Box>
                <br />
                <br />
                <Box className={classes.space}>
                  <BootstrapTooltip title='Get Started'>
                    <IconButton color='inherit' href={'/tutorial'}>
                      <CategoryIcon className={classes.icon} />
                    </IconButton>
                  </BootstrapTooltip>
                  <BootstrapTooltip title='Play'>
                    <IconButton color='inherit' href={'/levels'}>
                      <AppsIcon className={classes.icon} />
                    </IconButton>
                  </BootstrapTooltip>
                  <BootstrapTooltip title='Upload'>
                    <IconButton color='inherit' href={'/upload'}>
                      <GetAppIcon className={classes.icon} />
                    </IconButton>
                  </BootstrapTooltip>
                </Box>
                <br />
                <br />
              </Box>
            )
          }
        />
        <CardHeader
          action={
            loading ? (
              <Skeleton className={classes.text} width={60} height={55} />
            ) : (
              <Box>
                <BlueButton title={'Get Started'} href={'/tutorial'} />
              </Box>
            )
          }
        />

        <CardHeader
          action={
            loading ? (
              <Skeleton className={classes.text} width={60} height={55} />
            ) : (
              <Box className={classes.gameBoard}>
                {/* <RenderPuzzle /> */}
                <img src={Cube} alt={'cibe'} width={300} />
              </Box>
            )
          }
        />
      </Box>
    </Box>
  );
};

const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    color: grey[200],
  },
  tooltip: {
    backgroundColor: grey[200],
    color: '#000',
  },
}));

function BootstrapTooltip(props) {
  const classes = useStylesBootstrap();

  return <Tooltip arrow classes={classes} {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginBotom: 100,
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
    // color: '#A2A2A2',
  },
  icon: {
    fontSize: 80,
    color: grey[700],
  },
  gameBoard: {
    marginTop: 100,
  },
  space: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default HomePage;
