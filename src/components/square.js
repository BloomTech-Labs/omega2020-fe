import React, {  } from 'react';

function Square(props) {

	console.log(props);

	const generateSquareContent = () => {
		// A Square may only be edited if it's value is "."
		const disabled = !props.editable;
		const squareValue = props.value === '.' ? ""   : props.value;

		// custom borders to get look of sudoku board
		const style = {};
		const ri = props.rowIndex;
		const ci = props.colIndex;
		if(ri > 0 && ri % 3 === 0) {
			style['borderTop'] = '2px solid black';
		}
		if(ci > 0 && ci % 3 === 0) {
			style['borderLeft'] = '2px solid black'
		}
		if(props.conflict) {
			if(props.editable) {
				style['background'] = 'red';
			} else {
				style['border'] = '1px solid red';
			};
		};

		return (
			<div className="Square">
				<input
					// className = "Square"
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

	const isValidInput = (i) => {
		return (i === '' || (i.length === 1 && isNumeric(i)));
	};

	return generateSquareContent();
};

const isNumeric = (num) => {
		return !isNaN(num);
};

export default Square;