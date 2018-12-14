import React from 'react'

const Box = (props)=>{
    return(
    
        <th onClick={()=>{
            props.click(props.row, props.col)
        }}
        id={props.row+','+props.col}
        style={props.sect !== 0 ? {'backgroundColor' : props.sect} : {'backgroundColor' : 'white'}}
        >
        </th>
    )


}
export default Box