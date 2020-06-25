import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

function Grid(props) {
  const classes = useStyles();

  const generateSquareContent = () => {
    // A Square may only be edited if it's value is "."
    const disabled = !props.editable;
    const squareValue = props.value === '.' ? '' : props.value;

    // Style validation - if conflicts exist, turn square red if it was edited wrong.
    //  		  - turn border red of conflicting squares for hint as to why.
    const style = {};
    const ri = props.rowIndex;
    const ci = props.colIndex;

    // -------------------------------------------------------------

    let conditionRow = 3;
    let conditionCol = 3;

    // -------------------------------------------------------------

    console.log(`theme in grid: ${props.theme}`);

    let border = `3px solid ${({ theme }) => theme.text}`;
    // let border = `3px solid black`;

    if (ri === 0) {
      style['borderTop'] = border;
    } // Lines top of grid
    if (ri > 0 && ri % conditionRow === 0) {
      style['borderTop'] = border;
    } // Lines to seperate middle rows
    if (ci === 0) {
      style['borderLeft'] = border;
    } // Line left of grid
    if (ci > 0 && ci % conditionCol === 0) {
      style['borderLeft'] = border;
    } // Lines to seperate middle colums
    if (ci > 0 && ci % 1 === 0) {
      style['borderRight'] = border;
    } // Line right of grid
    if (ri > 0 && ri % 1 === 0) {
      style['borderBottom'] = border;
    } // Line bottom of grid

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
  // background-color: #2B2B2B;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};

  input {
    height: 40px;
    width: 40px;
  }
  &[type='text']:disabled {
    background-color: #cdcac9;
  }
  &[type='text']:disabled {
    color: ${({ theme }) => theme.text};
  }
  &[type='text']:focus {
    background: #608cff;
  }
`;

export default Grid;
