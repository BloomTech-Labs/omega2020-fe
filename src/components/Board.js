import React, {  } from 'react';
import Square from './Square';
import SudokuButtons from './SudokuButtons';

function Board(props) {
    console.log(props);

	const handleSquareValueChange = (i, j, newValue) => {
		props.onSquareValueChange(i, j, newValue);
    }
    

	const generateBoard = () => {
		const board = [];
        const boardState = props.boardState;
        
        console.log("boardState", boardState)

		for(let i=0; i<boardState.length; i++) {
            console.log("boardState.length", boardState.length)
			let currRow = [];
			for(let j=0; j<boardState[i].length; j++) {
				const conflicts = props.conflicts;
				const conflict = conflicts.has(i+""+j) ? true: false
				let currSquare = (
                                <Square
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
			}
			board.push(<tr key = {i}>{currRow}</tr>);
		}
		return board;
	}

    console.log(props);

	const board = generateBoard();
    return (
            <div>
            <table className = "Board">
                <tbody>
                {board}
                </tbody>
            </table>
            {/* <SudokuButtons
                historyLength  = {props.historyLength}
                onUndoClick    = {props.onUndoClick}
                onNewGameClick = {props.onNewGameClick}
                onVerifyClick  = {props.onVerifyClick}
            /> */}
            </div>
    );
	
};

export default Board;