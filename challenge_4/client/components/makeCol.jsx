import React from 'react';
import Box from './box.jsx'

const MakeCol=(props)=>{
        return(
            <tr>
                {props.side.map((item, col)=>(
                    <Box sect={item} click={props.click} row={props.row} col={col}/>    
                ))}
            </tr>
        )

}

export default MakeCol