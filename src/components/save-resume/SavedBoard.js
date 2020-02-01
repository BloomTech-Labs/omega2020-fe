import React, {  } from 'react';

import SavedSquare from './SavedSquare';

const SavedBoard = (props) => {

	const handleSquareValueChange = (i, j, newValue) => {
		props.onSquareValueChange(i, j, newValue);
    };
    
    const boardState = props.boardState;

	const generateBoard = () => {
		const board = [];
        
		for(let i=0; i<boardState.length; i++) {
			let currRow = [];
			for(let j=0; j<boardState[i].length; j++) {
                const conflicts = props.conflicts;
                const conflict = conflicts.has(i+""+j) ? true: false
               
				let currSquare = (
                    <SavedSquare
                        className="SquareContent"
                        key = {"" + i + j}
                        value = {boardState[i][j].cellValue}
                        editable = {boardState[i][j].editable}
                        conflict = {conflict}
                        rowIndex = {i}
                        colIndex = {j}
                        onValueChange = {handleSquareValueChange}
                    />
				)
                currRow.push(currSquare);
			};
			board.push(<div className="Board_RowData" key = {i}>{currRow}</div>);
		};
        return board;
	};

    const board = generateBoard();

    return (<div className="Board">{board}</div>);
};

export default SavedBoard;
