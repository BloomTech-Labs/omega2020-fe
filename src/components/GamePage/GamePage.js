import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import GameMenu from './GameMenu';
import Game from './Game';

const GamePage = (props) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  console.log(`handlePrint from game page: ${handlePrint}`);

  return (
    <Box ref={componentRef}>
      <Container>
        <GameMenu handlePrint={handlePrint} />
        <Game />
      </Container>
    </Box>
  );
};

export default GamePage;
