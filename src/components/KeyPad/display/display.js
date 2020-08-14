import React, { useState } from 'react';
import useUndo from 'use-undo';
import Content from './displayInfo';
import KeyPad from '../keypad/keypad'

const Display = () => {

    const [Num, {
        set: setNum,
        reset: resetNum,
        undo: undoNum,
        redo: redoNum,
    }] = useUndo("");

    const { present: presentNum } = Num

    const changeNumber = e => {
        setNum(e);
    }

    const resetNumber = () => {
        resetNum("")
    }

    const undoNumber = e => undoNum(e);

    const redoNumber = e => redoNum(e)

    return (
        <div>
            <Content info={presentNum} />
            <KeyPad change={changeNumber} reset = {resetNumber} undo = {undoNumber} redo = {redoNumber} />
        </div>
    )
}

export default Display