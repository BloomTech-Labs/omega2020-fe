import React from 'react';
import '../Sudoku.css';

function Square(props) {
  // console.log(props);

  const generateSquareContent = () => {
    // A Square may only be edited if it's value is "."
    const disabled = !props.editable;
    const squareValue = props.value === '.' ? '' : props.value;

    // Style validation - if conflicts exist, turn square red if it was edited wrong.
    //  		  - turn border red of conflicting squares for hint as to why.
    const style = {};
    const ri = props.rowIndex;
    const ci = props.colIndex;

    /*
    
    if statments
    
    */

    return (
      <div className='Square_Input'>
        <input
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

export default Square;
