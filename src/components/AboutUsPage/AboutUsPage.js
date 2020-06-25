import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import AboutUs from './AboutUs';
import Teams from './Teams';
import GitHubBanner from '../assets/GitHub-Banner';

const AboutUsPage = () => {
  return (
    <Box>
      <Container>
        <AboutUs />
      </Container>
      {/* <GitHubBanner /> */}
      {/* <Teams /> */}
    </Box>
  );
};

export default AboutUsPage;
