import React from 'react';
import KeyButton from './KeyButton'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


const Numbers = (props) => {
    console.log(props, 'numbern ')

    let squareItem = props.class.squareItem
    let boardRow = props.class.boardRow
    let bboard = props.class.board

    const Length = 9;

    let board = [];

    for (let i = 0; i < Length; i++) {
        let key = i + 1
        board.push(key)
        
    }

    const handleValueSquareChange = (i, j, newValue) => {
        console.log(i, j, newValue, 'bigbang');
        // props.onValueChange(i, j, newValue);
    }

    return (
        <Box>
            <Box className={boardRow}>
                {(board.map(data => 
                <Box xs={1} className={squareItem}>
                    <KeyButton 
                    data={(data)}
                    bigChange={handleValueSquareChange}
                    />
                </Box>
                ))}
            </Box>
        </Box>       
    )
}

export default Numbers