import React from 'react';
export const Search=(props)=>{
    return(
        <div className='form-group'>
            <input className='form-control' type="text" placeholder="Type to Search By Price" onChange={props.takePrice}/>
            <button onClick={props.searchByPrice} className="btn btn-dark">Search</button>
        </div>
    )
}