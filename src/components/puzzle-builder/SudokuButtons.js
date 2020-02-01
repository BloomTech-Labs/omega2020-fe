import React from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

import '../Sudoku.css';

const SudokuButtons = (props) => {
	
    	const btnStyle = {marginTop: 25, marginLeft: 18, marginRight: 10};
		return (
			<div  className = "SudokuButtons"
			>
		      <Button
			   size="large"
		       className = "gameControlBtn"
		       color     = "primary"
		       variant   = "contained"
		       style     = {btnStyle}
		       disabled  = {props.historyLength < 1}
		       onClick   = {props.onUndoClick}>
		       Undo
		       </Button>

			 <Button
			   size="large"
		       className = "gameControlBtn"
		       color     = "primary"
		       variant   = "contained"
		       style     = {btnStyle}
		       onClick   = {props.onVerifyClick}>
		       Get Hint
		      </Button>
             
	

			{(localStorage.getItem("token") !== null) ?
				(<Button
				size="large"
				className = "gameControlBtn"
				color     = "primary"
				variant   = "contained"
				style     = {btnStyle}
				startIcon={<SaveIcon />}
				onClick   = {props.onSaveClick}>
				Save
				</Button>) : (<div />)
				  
			}
		    </div>
			);
	
};   


export default SudokuButtons;