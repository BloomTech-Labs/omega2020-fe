import React, {  } from 'react';

import SavedSquare from './SavedSquare';

const SavedBoard = (props) => {

	const handleSquareValueChange = (i, j, newValue) => {
		props.onSquareValueChange(i, j, newValue);
    };
    
    const boardState = props.boardState;

	const generateBoard = () => {
		const board = [];
        
        console.log("boardState", props)

		for(let i=0; i<boardState.length; i++) {
			let currRow = [];
			for(let j=0; j<boardState[i].length; j++) {
                const conflicts = props.conflicts;
                // console.log("CONFLICTS: ", conflicts)
                const conflict = conflicts.has(i+""+j) ? true: false
                // const changable = props.original.has(".") ? true: boardState[i][j].editable
				let currSquare = (
                    <SavedSquare
                        className="SquareContent"
                        key = {"" + i + j}
                        value = {boardState[i][j].cellValue}
                        // editable = {changable}
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

    console.log(props);
    console.log("CONNORLOG: ", props)

    const board = generateBoard();

    return (<div className="Board">{board}</div>);
};

export default SavedBoard;