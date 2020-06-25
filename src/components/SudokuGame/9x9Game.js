import React from 'react';

const Game9x9 = () => {
  const [win, setWin] = useState('');

  const [gameBoardState, setGameBoardState] = useState({
    boardState: '',
    puzzleId: '',
    history: [],
    conflicts: new Set([]),
  });

  return null;
};

export default Game9x9;
