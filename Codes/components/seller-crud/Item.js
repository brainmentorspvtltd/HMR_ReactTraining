import React from 'react';

export class Item extends React.Component{

    constructor(props){
        super(props);
        
        this.state = {item:{}};
        console.log("Cons Call ",this.state);
        }
        

render(){
return(
    
        <tr className= 'table-default' key={this.props.item.id}>
        
            <td>{this.props.item.id}</td>
            <td>{this.props.item.name}</td>
            <td>{this.props.item.price}</td>
            <td>{this.props.item.url}</td>
        </tr>
    
)
}
}