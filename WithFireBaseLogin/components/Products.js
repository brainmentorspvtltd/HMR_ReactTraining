import React from 'react';
import {Product} from './Product';
export const Products = (props)=>{
    return (
        props.items.map(itemObject=><Product item={itemObject}/>)
        
    )
}