import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import HomePage from './HomePage';
import GameSimulation from './GameSimulation';
import Banner from './Banner';

const LandingPage = (props) => {
  return (
    <Box>
      <Container>
        <HomePage theme={props.theme} />
        <GameSimulation />
      </Container>
      <Banner />
    </Box>
  );
};

export default LandingPage;
