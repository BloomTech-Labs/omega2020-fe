import React from 'react';
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

    let border = '3px solid black';

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
      <div className='Square_Input'>
        <input
          className={classes.input}
          id={props.key}
          className='Square'
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
  input: {
    //TBD
  },
}));

export default Grid;
