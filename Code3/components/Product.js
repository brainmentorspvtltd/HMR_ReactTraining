import React from 'react';
export const Product = (props)=>{
    const myStyle = {width:'18rem'};
    return (
        <div className="row">
            <div className="col-sm-6">
            <div className="card" style={myStyle}>
  <img className="card-img-top" src={props.item.url} alt="Card image cap"/>>
  <div className="card-body">
    <h5 className="card-title">{props.item.name}</h5>
    <p className="card-text">{props.item.price}</p>
    <a href="#" className="btn btn-primary">Add to Cart</a>
  </div>
</div>
</div>
        
            <div className="col-sm-6">
                <h2>Product Details</h2>
            </div>
        </div>
    )
}