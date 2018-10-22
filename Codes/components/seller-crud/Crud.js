import React from 'react';
import {Details} from './Details';

import {List} from './List';
import { Item } from '../../models/Item';
import * as firebase from 'firebase';
export class Crud extends React.Component{
    constructor(props){
        super(props);
       // this.currentId = 0;
       this.id = 0;
       this.name = '';
       this.price= 0.0;
       this.url='';
        this.state  = {items:[],message:''};
    }
    
    takeInputName(event){
        this.name = event.target.value;
    }
    takeInputId(event){
        this.id = event.target.value;
      

    }
    takeInputPrice(event){
        this.price = event.target.value;
        this.setState({...this.state,price:this.price});
      

    }
    takeInputUrl(event){
        this.url = event.target.value;
      

    }
    addtoGrid(){
        var item = new Item(this.id,this.name, this.price ,this.url);
        var items = this.state.items;
        items.push(item);
        this.setState({...this.state,"items":items,price:0});
        this.addToDb(item);
    }
    addToDb(itemObject){
         var promise =  firebase.database().ref("/items/"+itemObject.id).set(itemObject);  
        promise.then(data=>{
                this.setState({...this.state,message:'Record Added'});
        }).catch(error=>{
            this.setState({...this.state,message:'Error in Record Added'});
        })
        }
    
    render(){
        return(
            <div>
                
                <Details price={this.state.price} takeInputPrice={this.takeInputPrice.bind(this)} takeInputUrl={this.takeInputUrl.bind(this)} takeInputName={this.takeInputName.bind(this)} takeInputId = {this.takeInputId.bind(this)}  add={this.addtoGrid.bind(this)}/>
                <List   list={this.state.items}/>
                
            </div>
        )
}
}