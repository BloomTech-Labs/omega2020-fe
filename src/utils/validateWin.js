// If board has all squares filled and no conflicts, compare board state string with the solved puzzle string.
// if board state string = solved puzzle string, then win animation
import { solvedPuzzle } from '../components/Puzzles.js';

// import { Setup, Draw } from '../components/fireworks/sketch.js';
// import Particle from '../components/fireworks/particle.js';

const validateWin = ({ boardState, conflicts }) => {
    if (boardState === solvedPuzzle){
        if (conflicts.length === 0){
        return (
            // build some animation for win here
            alert('Congratulations! You have solved the puzzle!')
        )}
    } else {
        return (
            alert('Hmmm. This is odd.')
        )
    }
};

export default validateWin;