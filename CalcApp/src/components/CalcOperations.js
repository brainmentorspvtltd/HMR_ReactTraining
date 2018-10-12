import React from 'react';
export const CalcOperations=(props)=>{
return (
    <div>
    <button onClick={props.opr}>+</button>
    <button onClick={props.opr}>-</button>
    <button onClick={props.opr}>*</button>
    <button onClick={props.opr}>/</button>
    </div>
)
}