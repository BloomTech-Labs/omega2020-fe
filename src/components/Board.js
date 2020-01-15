import React, {  } from 'react';
import Square from './square.js';

const Board = (props) => {
    console.log("BOARD PROPS: ", props)

	const handleSquareValueChange = (i, j, newValue) => {
		props.onSquareValueChange(i, j, newValue);
    };
    
    const boardState = props.boardState;

	const generateBoard = () => {
		const board = [];
        
        // console.log("boardState", boardState.length)

		for(let i=0; i<boardState.length; i++) {
			let currRow = [];
			for(let j=0; j<boardState[i].length; j++) {
                const conflicts = props.conflicts;
                // console.log("CONFLICTS: ", conflicts)
				const conflict = conflicts.has(i+""+j) ? true: false
				let currSquare = (
                    <Square
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

    console.log(props);

    const board = generateBoard();
    
    return (
            <div>
                <div className = "Board">
                    <div>
                        {board}
                    </div>
                </div>
            </div>           
    );
	
};

export default Board;