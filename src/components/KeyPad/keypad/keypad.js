import React from 'react';
import  NumberButton  from './NumberButton';
import ClearButton from './BangButton';
import { info } from '../data';

import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core/';
import Typography from '@material-ui/core/Typography';

const KeyPad = (props) => {

    return (
        <Input>

            {info.numbers.map((numbers, index) => (
                <Typography >
                    <NumberButton numbers={numbers} key={index} changeInfo = {props.change} redo = {props.redo} reset = {props.reset} undo = {props.undo} />                
                </Typography>
            ) )}

            {info.dictionary.map((dico, index) => (
                <Typography >
                    <ClearButton dico={dico} key={index} clearInfo = {props.reset} redo = {props.redo} reset = {props.reset} undo = {props.undo} />
                </Typography>
            ))}

        </Input>
    )
}

const Input = withStyles(() => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: "row",
        // marginRight: 60,
        // marginLeft: 710,
        // margin: 100,        
        backgroundColor: "#f5f5f5",
    }
}))(Button)

export default KeyPad 