import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import GameMenu from './GameMenu';
import Game from './Game';

const GamePage = (props) => {
  return (
    <Box>
      <Container>
        <GameMenu />
        <Game />
      </Container>
    </Box>
  );
};

export default GamePage;
