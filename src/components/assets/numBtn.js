import React from 'react';
import KeyButton from './KeyButton'

const Numbers = (props) => {
    console.log(props, 'number')

    const Length = 9;

    let board = [];

    for (let i = 0; i < Length; i++) {
        board.push(i + 1)
        
    }
    



    return (
        <div>
            {(board.map(data => 
            <KeyButton 
            data={JSON.stringify(data)}
            />
                
                ))}
        </div>
        // <KeyButton keyss ={board} />
    )
}

export default Numbers