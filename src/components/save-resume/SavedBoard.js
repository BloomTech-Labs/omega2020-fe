// import React, {  } from 'react';

// import SavedSquare from './SavedSquare';

// const SavedBoard = (props) => {

// 	const handleSquareValueChange = (i, j, newValue) => {
// 		props.onSquareValueChange(i, j, newValue);
//     };
    
//     const boardState = props.boardState;
//     const formattedOriginalValues = props.formattedOriginalValues;
// console.log(formattedOriginalValues)
// console.log(boardState)

//  for(let a=0; a<formattedOriginalValues.length; a++) {
//             for(let b=0; b<formattedOriginalValues[a].length; b++) {
//                 const ABconflicts = props.conflicts;
//    };
//     }
// 	const generateBoard = () => {
// 		const board = [];
        
//         console.log("boardState", boardState)
       
       
// 		for(let i=0; i<boardState.length; i++) {
// 			let currRow = [];
// 			for(let j=0; j<boardState[i].length; j++) {
//                 const conflicts = props.conflicts;
//                 // console.log("CONFLICTS: ", conflicts)
// 				const conflict = conflicts.has(i+""+j) ? true: false
// 				let currSquare = (
//                     <SavedSquare
//                         className="SquareContent"
//                         key = {"" + i + j}
//                         value = {boardState[i][j].cellValue}
//                         // editable = {formattedOriginalValues[a][b].editable} 
//                         editable = {boardState[i][j].editable} 
//                         // editable = 'true'
//                         conflict = {conflict}
//                         rowIndex = {i}
//                         colIndex = {j}
//                         onValueChange = {handleSquareValueChange}
//                     />
// 				)
//                 currRow.push(currSquare);
// 			};
// 			board.push(<div className="Board_RowData" key = {i}>{currRow}</div>);
     
//          };
// 		return board;
// 	};

//     console.log(props);
//     console.log("CONNORLOG346: ", props)

//     const board = generateBoard();

//     return (<div className="Board">{board}</div>);
// };

// export default SavedBoard;

import React, {  } from 'react';

import SavedSquare from './SavedSquare';

const SavedBoard = (props) => {

	const handleSquareValueChange = (i, j, newValue) => {
		props.onSquareValueChange(i, j, newValue);
    };
    
    const boardState = props.boardState;
    console.log(props)
    console.log("BOARD", boardState)

	const generateBoard = () => {
		const board = [];
        
        console.log("boardState", props)

		for(let i=0; i<boardState.length; i++) {
			let currRow = [];
			for(let j=0; j<boardState[i].length; j++) {
                const conflicts = props.conflicts;
                // console.log("CONFLICTS: ", conflicts)
                const conflict = conflicts.has(i+""+j) ? true: false
                const changable = Array.from(props.original).includes(".") ? true: false
                console.log("SHEILALOG", props.original)
				let currSquare = (
                    <SavedSquare
                        className="SquareContent"
                        key = {"" + i + j}
                        value = {boardState[i][j].cellValue}
                        editable = {boardState[i][j].editable}
                        // editable = {changable}
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
