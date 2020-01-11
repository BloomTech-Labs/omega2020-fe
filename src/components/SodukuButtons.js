import React from 'react';
import Button from 'material-ui/Button';

export default SudokuButtons = (props) => {
	render() {
    	const btnStyle = {marginTop: 25, marginLeft: 18, marginRight: 10};
		return (
			<div className = "SudokuButtons">
			 <Button
		       className = "gameControlBtn"
		       color     = "primary"
		       variant   = "raised"
		       style     = {btnStyle}
		       onClick   = {props.onVerifyClick}>
		       Verify
		      </Button>

		      <Button
		       className = "gameControlBtn"
		       color     = "primary"
		       variant   = "raised"
		       style     = {btnStyle}
		       disabled  = {props.historyLength < 1}
		       onClick   = {props.onUndoClick}>
		       Undo
		       </Button>

		      <Button
		       className = "gameControlBtn"
		       color     = "primary"
		       variant   = "raised"
		       style     = {btnStyle}
		       onClick   = {props.onNewGameClick}>
		       New game!
		       </Button>
		    </div>
			);
	}
}