import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import NavBarMobile from './NavBar/NavBar-mobile';
import NavBarWebApp from './NavBar/NavBar-web_app';
import NavBarWeb from './NavBar/NavBar-web';

const NavCondition = () => {
  const viewPort = false;

  const sm = useMediaQuery('(min-width: 980px)');
  const md = useMediaQuery('(min-width: 1500px)');
  if (viewPort === sm) {
    return <NavBarMobile />;
  } else if (viewPort === md) {
    return <NavBarWebApp />;
  } else {
    return <NavBarWeb />;
  }
};

export default NavCondition;
