import React, {  } from 'react';
import '../Sudoku.css';

function Square(props) {

	const generateSquareContent = () => {
		// A Square may only be edited if it's value is "."
		const disabled = !props.editable;
		const squareValue = props.value === '.' ? ""   : props.value;

		// Style validation - if conflicts exist, turn square red if it was edited wrong.
		//  		  - turn border red of conflicting squares for hint as to why.
		const style = {};
		const ri = props.rowIndex;
		const ci = props.colIndex;

		if(ri > 0 && ri % 3 === 0) {
			style['borderTop'] = '3px solid black';

		}
		if(ri === 0) {
			style['borderTop'] = '3px solid black';

		}
		if(ci === 0) {
			style['borderLeft'] = '3px solid black';

		}
		if(ri > 0 && ri % 1 === 0) {
			style['borderBottom'] = '3px solid black';

		}
		if(ci > 0 && ci % 3 === 0) {
			style['borderLeft'] = '3px solid black';
		}
		if(ci > 0 && ci % 1 === 0) {
			style['borderRight'] = '3px solid black';
		}
		if(props.conflict) {
			if(props.editable) {
				style['background'] = 'red';
			} else {
				style['background'] = 'pink';
			};
		};

		return (
			<div  className="Square_Input">
				<input
					id={props.key}
					className = "Square"
					style = {style}
					type = "text"
					value = {squareValue}
					disabled = {disabled}
					onChange = {handleSquareValueChange}
				/>
			</div>
			);
	};

	const handleSquareValueChange = (e) => {
		const newSquareValue = e.target.value;

		if(isValidInput(newSquareValue)) {
			const ri = props.rowIndex;
			const ci = props.colIndex;
			props.onValueChange(ri, ci, newSquareValue);			
		};
	};

	// Cell validation
	const isValidInput = (i) => {
		return (i === '' || (i.length === 1 && isNumeric(i)));
	};

	return generateSquareContent();
};

const isNumeric = (num) => {
		return !isNaN(num);
};

export default Square;