import React, {  } from 'react';
import Square from './Square';
import SudokuButtons from './SudokuButtons.js';

const Board = (props) => {
    // let connor = connor;
    // console.log("CONNOR: ", connor);

	const handleSquareValueChange = (i, j, newValue) => {
		props.onSquareValueChange(i, j, newValue);
    }
    

    const boardState = props.boardState;
	const generateBoard = () => {
		const board = [];
        
        console.log("boardState", boardState)

		for(let i=0; i<9; i++) {
            // console.log("boardState.length", boardState.length)
			let currRow = [];
			for(let j=0; j<boardState[i].length; j++) {
				const conflicts = props.conflicts;
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
                // console.log("CURROW: ", curRow)
			}
			board.push(<div className="row" key = {i}>{currRow}</div>);
		}
		return board;
	}

    console.log(props);

	const board = generateBoard();
    return (
            <div>
            <div className = "Board">
                <p>
                {board}
                </p>
            </div>
            <SudokuButtons
                historyLength  = {props.historyLength}
                onUndoClick    = {props.onUndoClick}
                onNewGameClick = {props.onNewGameClick}
                onVerifyClick  = {props.onVerifyClick}
            />
            </div>
    );
	
};

export default Board;