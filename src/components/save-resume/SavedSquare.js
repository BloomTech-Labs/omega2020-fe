import React, {  } from 'react';

function SavedSquare(props) {
    // console.log("CONNORLOG2 squaaaareee: ", props)
	
	// console.log(props);

	const generateSquareContent = () => {
		// 1. axios.get solved puzzle string
		// 2. compare puzzle string to the saved puzzle string
		// 3. if = then not editable
		// 4. if != then not editable
		// console.log("SAVED SQUARE")

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

export default SavedSquare;