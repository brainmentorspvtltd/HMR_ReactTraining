import React from 'react';
import * as firebase from 'firebase';
export class Product extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    addToCart(itemObject){
        itemObject.isAdded = !itemObject.isAdded;
        firebase.database().ref("items/"+itemObject.id).set(itemObject);
        this.props.showCount();
    }
    
    render(){
    const myStyle = {width:'18rem'};
    return (
        <div className="row">
            <div className="col-sm-6">
            <div className="card" style={myStyle}>
  <img className="card-img-top" src={this.props.item.url} alt="Card image cap"/>>
  <div className="card-body">
    <h5 className="card-title">{this.props.item.name}</h5>
    <p className="card-text">{this.props.item.price}</p>
    <a href="#" className="btn btn-primary" onClick={()=>this.addToCart(this.props.item)}>Add to Cart</a>
  </div>
</div>
</div>
        
            <div className="col-sm-6">
                <h2>Name : {this.props.item.name} Avaliable at Rs {this.props.item.price}</h2>
                <p>{this.props.item.isAdded?"Item Added in Cart":"Item Not in Cart"}</p>
            </div>
        </div>
    )
}
}