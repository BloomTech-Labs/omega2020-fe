import React from 'react';
import Box from '@material-ui/core/Box';
import Banner from './Banner';
import Info from './Info';
import Ad from './Advertisement';

const LandingPage = () => {
  return (
    <Box>
      <Banner />
      <Info />
      <Ad />
    </Box>
  );
};

export default LandingPage;
