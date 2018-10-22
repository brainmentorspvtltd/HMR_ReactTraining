import React from 'react';
import {Product} from './Product';
export const ProductList =(props)=>{
    return (
        <div>
        <h1>Product List</h1>
        {props.items.map((itemObject,id)=><Product showCount={props.showCount} key={id} item={itemObject}/>)}
        </div>
    )
}