import React from 'react';
import MakeCol from './makeCol.jsx'

const Col = (props)=>{
    return(
        <table align="center" >
            <tbody>

            {props.board.map((arr , index)=>{
                return <MakeCol click={props.click} color={props.color} side={arr} row={index}/>
            })}

            </tbody>
        </table>
    )

}

export default Col