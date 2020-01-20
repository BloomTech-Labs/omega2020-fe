// If board has all squares filled and no conflicts, compare board state string with the solved puzzle string.
// if board state string = solved puzzle string, then win animation

import React from 'react';

const validateWin = ({ boardState, solvedPuzzle }) => {
    if (boardState === solvedPuzzle){
        return (
            // build some animation for win here
            alert('Congratulations! You have solved the puzzle!')
        )
    } else {
        return (
            alert('Hmmm. This is odd.')
        )
    }
};

export default validateWin;