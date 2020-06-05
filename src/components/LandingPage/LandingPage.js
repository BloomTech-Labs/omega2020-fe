import React from 'react';
import Box from '@material-ui/core/Box';
import Banner from './Banner';
import Info from './Info';
import Ad from './Advertisement';
import InstructionsPage from '../InstructionsPage/InstructionsPage';

const LandingPage = () => {
  return (
    <Box>
      <Banner />
      <Info />
      <Ad />
      <InstructionsPage />
    </Box>
  );
};

export default LandingPage;
