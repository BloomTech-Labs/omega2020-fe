import React, { useState, useContext } from 'react';
import { GridContext } from '../../store/contexts/GridContext' 
import Numbers from './numBtn'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


function Keys (props) {
    console.log(props, 'data')

    const handleClick = (i, j, newValue) => {
        console.log(i, j, newValue, 'BIGbANG')
        // props.valueChange(i, j, newValue)

    }

    const handleChange = () => {
        const target = props.data
        if((target)) {
            const row = props.rowIndex;
            const col = props.colIndex;
            handleClick(row, col, target)

        }
    }

    return (
        <div className={props.boardRow}>
            <Typography className={props.boardRow} variant='body2' onClick= {() =>
                handleChange(console.log(props.data, 'valen'))
            }>
                 {props.data}
            </Typography>
        </div>
    )
}

export default Keys;