import React, { useState, useContext } from 'react';
import { GridContext } from '../../store/contexts/GridContext' 
import Numbers from './numBtn'

function Keys (props) {
    const [value, setValue] = useState(props.value);

    const handleChange = (e) => {
        const target = setValue(e);

        if(target) {
            const row = props.rowIndex;
            const col = props.colIndex;
            props.onValueChange(row, col, target)

        }
    }
    
    return (
        <div>
            {/* <h1>{value}</h1> */}
            <button 
            onClick={
                () =>
                {handleChange(console.log(props.data, 'bang'))}}
            >
                    {props.data}
            </button>
            
        </div>
        

    )
}

export default Keys