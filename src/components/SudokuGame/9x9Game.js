import React from 'react';
import Board from './puzzle-builder/Board';

const Game9x9 = (props) => {
  return (
    <div>
      <div>
        <Board
          theme={props.theme}
          boardState={props.gameBoardState.boardState}
          conflicts={props.gameBoardState.conflicts}
          onSquareValueChange={props.handleSquareValueChange}
          historyLength={props.gameBoardState.history.length}
        />
      </div>
    </div>
  );
};

export default Game9x9;
