import React, {  } from 'react';
import Square from './square.js';
// import SudokuButtons from './SudokuButtons.js';

const Board = (props) => {
    console.log("BOARD PROPS: ", props)
	const handleSquareValueChange = (i, j, newValue) => {
		props.onSquareValueChange(i, j, newValue);
    }
    

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
                {/* <div>
                    <SudokuButtons
                        historyLength  = {props.historyLength}
                        onUndoClick    = {props.onUndoClick}
                        onNewGameClick = {props.onNewGameClick}
                        onVerifyClick  = {props.onVerifyClick}
                        />
                    
                </div> */}
            </div>
    );
	
};

export default Board;