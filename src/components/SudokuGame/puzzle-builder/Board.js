import React, { useContext } from 'react';
import { GridContext } from '../../../store/contexts/GridContext';
import { makeStyles } from '@material-ui/core/styles';
import Grid from './Grid';

const Board = (props) => {
  const classes = useStyles();
  const [gridState, setGridState] = useContext(GridContext);

  console.log(gridState, ('Lord Grid'))
  console.log('BOARD PROPS: ', props);
  console.log('AKAKFILES: ', props);

  const handleSquareValueChange = (i, j, newValue) => {
    props.onSquareValueChange(i, j, newValue);
  };

  const boardState = gridState.boardState;


  const generateBoard = () => {
    const board = [];

    for (let i = 0; i < boardState.length; i++) {
      console.log(boardState.length, 'length length')
      let currRow = [];
      for (let j = 0; j < boardState[i].length; j++) {
        const conflicts = props.conflicts;
        const conflict = conflicts.has(i + '' + j) ? true : false;
        let currSquare = (
          <div>
          <Grid
            theme={props.theme}
            key={'' + i + j}
            value={boardState[i][j].cellValue}
            editable={boardState[i][j].editable}
            conflict={conflict}
            rowIndex={i}
            colIndex={j}
            onValueChange={handleSquareValueChange}
          />

          </div>
        );
        currRow.push(currSquare);
      }
      board.push(
        <div className={classes.boardRow} key={i}>
          {currRow}
        </div>
      );
    }


    return board;
  };

  const board = generateBoard();
  console.log(board)

  return <div className={classes.board} >{board}</div>;
};

const useStyles = makeStyles(() => ({
  board: {
    display: 'felx',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  boardRow: {
    display: 'flex',
    width: '400px',
    height: '50px',
  },
}));

export default Board;
