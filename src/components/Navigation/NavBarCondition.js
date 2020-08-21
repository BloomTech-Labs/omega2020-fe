import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import NavBarMobile from './NavBar/NavBar-mobile';
import NavBarWeb from './NavBar/NavBar-web';

const NavCondition = (props) => {
  const classes = useStyles();

  let viewPort = false;
  const viewPortWidth = false;
  const md = useMediaQuery('(min-width: 1050px)');
  if (viewPortWidth === md) {
    viewPort = true;
  } else {
    viewPort = false;
  }

  return (
    <Box className={classes.root}>
      <Container>
        {(() => {
          switch (viewPort) {
            case true:
              return (
                <NavBarMobile
                  toggleTheme={props.toggleTheme}
                  theme={props.theme}
                />
              );
            default:
              return (
                <NavBarWeb
                  toggleTheme={props.toggleTheme}
                  theme={props.theme}
                />
              );
          }
        })()}
      </Container>
      <hr style={{ opacity: 0.2 }} />
    </Box>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    position: 'sticky',
    top: 0,
    left: 0,
    zIndex: 2,
  },
}));

export default NavCondition;
