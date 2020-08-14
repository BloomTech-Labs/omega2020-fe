import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Box, Button } from '@material-ui/core/';
import Typography from '@material-ui/core/Typography';



const NumberButton = (props) => {
    console.log(props, 'num')
    
    return (
        <div>
            
            <button onClick={
                () => props.changeInfo(props.numbers)
            }>   
            
            {props.numbers} 
            </button> 
        </div>
    )
};

const ClearButton = withStyles(() => ({
    root: {
        // minHeight: '7vh',
        // width: 10,
        paddingLeft: 30,
        paddingRight: 30,
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 40,
        marginRight: 40,
        maxWidth: 40,
        width: 40,

        display: 'flex',
        flexWrap: 'wrap',
        color: 'black',
        backgroundColor: 'grey'
    }, 
    row : {
        width: '100%',
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    }
}))(Button)

export default NumberButton