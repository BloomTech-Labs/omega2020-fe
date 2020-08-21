import React from 'react';
import { useContext } from 'react';
import {GridContext} from '../../../store/contexts/GridContext'

const Length = (props) => {
    const [gridState, setGridState] = useContext(GridContext)
    
    console.log(gridState, 'Neww State');

    console.log(props, 'Neww Props')




    return (
        <div>
            <h1>  </h1> 

        </div>
    )
}

export default Length