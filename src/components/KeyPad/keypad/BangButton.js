import React from 'react';
import {Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'

const useStyle = makeStyles({
    clearButton: {
        color: 'green',
        height: 40,
        
    }
})


function Clear (props) {
    const classes = useStyle();

    console.log(props, "clear")
    
    
    return(
        <div>
        <Button onClick={() => props.reset(props.number) } variant='outlined' className={classes.clearButton}>
            {props.dico.clear}
        </Button>

        <Button onClick={() => props.undo(props.number)}> {props.dico.undo} </Button>

         </div>
    )
} 

export default Clear