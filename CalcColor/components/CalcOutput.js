import React from 'react';
import './design.css';
export const CalcOutput = (props)=>{
    return (
        <div>
            <h3 className={props.result>20?'green':'red'}>Result is {props.result} </h3>
        </div>
    )
}