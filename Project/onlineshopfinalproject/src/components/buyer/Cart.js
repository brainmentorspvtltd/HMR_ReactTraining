import React from 'react';
export const Cart =(props)=>{
    return(
        <div>
            <span className="float-right alert-danger">Items in Cart {props.count}</span>
        </div>
    )
}