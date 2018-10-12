import React from 'react';
export const CalcInput=(props)=>{
    return(
        <div>
            <label htmlFor="">First Number</label>
            <input type="text" 
            onChange={props.firstInput}
            placeholder="Type First Number"/>
            <br/>
            <label htmlFor="">Second Number</label>
            <input type="text" placeholder="Type Second Number" onChange={props.secondInput}/>
        </div>
    )
}