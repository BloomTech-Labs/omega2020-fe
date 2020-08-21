import React, { useContext } from 'react';
import { GridContext } from '../../../../store/contexts/GridContext';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const KeyPadBoard = (props) => {
  const classes = useStyles();
  const [gridState, setGridState] = useContext(GridContext);

  const GridLength = gridState.gridlength;

  const generateBoard = () => {
    const board = [];

    for (let i = 0; i < GridLength; i++) {
      let currRow = [];
      for (let j = 0; j < GridLength[i]; j++) {
        let currSquare = (
          <Box item xs={1} className={classes.squareItem}>
            <Typography variant='body2'>{j + 1}</Typography>
          </Box>
        );
        currRow.push(currSquare);
      }
      board.push(<div className={classes.boardRow}>{currRow}</div>);
    }

    return board;
  };

  const board = generateBoard();

  return <div className={classes.board}>{board}</div>;
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
    flexFlow: 'row wrap',
  },
  squareItem: {
    width: '30%',
    margin: 5,
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    color: grey[50],
    backgroundColor: grey[900],
    '&:hover': {
      backgroundColor: grey[800],
      cursor: 'pointer',
    },
  },
}));

export default KeyPadBoard;
