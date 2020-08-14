import React from 'react';
import useUndo from 'use-undo';
import data from '../data';

const But = () => {
    const [state, {
        set: setNum,
        reset: resetNum,
        undo: undoNum,
        redo: redoNum,

    }] = useUndo("");


    const { present: presentNum} = state;
    console.log(presentNum)
    
    const Incre = () => setNum(presentNum + 1)

    const undoN = (e) => undoNum(e)

    const redoN = (e) => redoNum(e);

    const resetN = () => resetNum('')

    return (
        <div>
            <h4> hello {presentNum} </h4>
            <button key="increment" onClick={Incre}>
            +</button>

            <button key="undo" onClick={undoN}> 
            undo</button>

            <button key="redo" onClick={redoN}> 
            redo</button>

            <button key="reset" onClick={resetN}> 
            reset</button>
        </div>
    )

    
}

export default But

