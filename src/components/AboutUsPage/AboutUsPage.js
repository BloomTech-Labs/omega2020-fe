import React from 'react';
import Box from '@material-ui/core/Box';
import AboutUs from './AboutUs';
import Teams from './Teams';
import GitHubBanner from '../assets/GitHub-Banner';

const AboutUsPage = () => {
  return (
    <Box>
      <AboutUs />
      <GitHubBanner />
      <Teams />
    </Box>
  );
};

export default AboutUsPage;
