import React from 'react';
import {Item} from './Item';
export const List =(props)=> {

return(
    <div>
        <table className='table table-striped'>
            <thead className='thead-dark'>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>URL</th>
                </tr>
            </thead>
            <tbody>
                
                {props.list.map((itemObject,id)=>{
                    //console.log("State ",this.state.isMarked);
                    return <Item   key={id} item= {itemObject}/>})}
                
            </tbody>
        </table>
    </div>
);
}
