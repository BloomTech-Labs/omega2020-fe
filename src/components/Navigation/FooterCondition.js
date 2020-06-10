import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FooterMobile from './Footer/Footer-mobile';
import FooterWeb from './Footer/Footer-web';

const FooterCondition = () => {
  const viewPort = false;

  const sm = useMediaQuery('(min-width: 980px)');

  if (viewPort === sm) {
    // return <FooterMobile />;
    return null;
  } else {
    return <FooterWeb />;
  }
};

export default FooterCondition;
