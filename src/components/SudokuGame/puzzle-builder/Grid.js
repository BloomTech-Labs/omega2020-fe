import React, { useContext } from 'react';
import { GridContext } from '../../../store/contexts/GridContext';
import styled from 'styled-components';
import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import KeyButton from '../../assets/KeyButton';

function Grid(props) {
  const classes = useStyles();

  const { gridState, setGridState } = useContext(GridContext);

  const generateSquareContent = () => {
    // A Square may only be edited if it's value is "."
    const disabled = !props.editable;
    const squareValue = props.value === '.' ? '' : props.value;

    // Style validation - if conflicts exist, turn square red if it was edited wrong.
    // turn border red of conflicting squares for hint as to why.
    const style = {};
    const ri = props.rowIndex;
    const ci = props.colIndex;

    // -------------------------------------------------------------

    let conditionRow = gridState.row || 3;
    let conditionCol = gridState.col || 3;

    // -------------------------------------------------------------

    let border = `3px solid ${blue.A700}`;

    if (ri > 0 && ri % conditionRow === 0) {
      style['borderTop'] = border;
    } // Lines to seperate middle rows
    if (ci > 0 && ci % conditionCol === 0) {
      style['borderLeft'] = border;
    } // Lines to seperate middle colums

    if (props.conflict) {
      if (props.editable) {
        style['background'] = 'red';
      } else {
        style['background'] = 'pink';
      }
    }

    return (
      <div className={classes.grid}>
        <Input
          className={classes.square}
          id={props.key}
          style={style}
          type='text'
          value={squareValue}
          disabled={disabled}
          onChange={handleSquareValueChange}
        />

        <KeyButton change={handleSquareValueChange} />
      </div>
    );
  };

  const handleSquareValueChange = (e) => {
    const newSquareValue = e.target.value;

    if (isValidInput(newSquareValue)) {
      const ri = props.rowIndex;
      const ci = props.colIndex;
      props.onValueChange(ri, ci, newSquareValue);
    }
  };

  // Cell validation
  const isValidInput = (i) => {
    return i === '' || (i.length === 1 && isNumeric(i));
  };

  return generateSquareContent();
}

const isNumeric = (num) => {
  return !isNaN(num);
};

const useStyles = makeStyles(() => ({
  grid: {
    height: '100%',
    width: '100%',
  },
  square: {
    border: '0.5px solid grey',
    width: '100%',
    height: '100%',
    textAlign: 'center',
  },
}));

const Input = styled.input`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};

  &[type='text']:disabled {
    background-color: #cdcac9;
    color: black;
  }
  &[type='text']:focus {
    background: #608cff;
  }
`;

export default Grid;
