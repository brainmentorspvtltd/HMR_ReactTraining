import React from 'react';
import {ProductList} from './ProductList';
import * as firebase from 'firebase';
import {Item} from '../../models/Item';
import {Search} from './Search';
import { Cart } from './Cart';
export class BuyerMain extends React.Component{
    constructor(){
        super();
        this.items=[];
        this.getAllProducts();
        this.state = {items:this.items,count:0};
        this.price = 0;
    }
    takePrice(event){
        this.price = event.target.value;
        console.log('take price called.... ',this.price);
    }
    searchByPrice(){
        console.log("Search BY Price ",this.price);
        var searchArr = [];
        if(this.price>0){
        var items = firebase.database().ref("items");
        
        items.on('value',(snapshot)=>{
            var obj = snapshot.val();
            console.log("Object is::::: ",obj);
            for(let key in obj){
                var itemObject = obj[key];
                var item = new Item(itemObject.id,itemObject.name,itemObject.price,itemObject.url);
            searchArr.push(item);
            }
            console.log("Search By Price ",searchArr);
            this.items = searchArr.filter(itemObj=>itemObj.price>=this.price);
            console.log("After Filter ",this.items);
            this.setState({items:this.items});
        })
    }
    else{
        this.getAllProducts();
        
    }
    }
    showCount(){
        var items = firebase.database().ref('items');
        items.on('value',(snapshot)=>{
            var obj = snapshot.val();
            console.log("Object is ",obj);
            for(let key in obj){
                var itemObject = obj[key];
                var item = new Item(itemObject.id,itemObject.name,itemObject.price,itemObject.url);
            this.items.push(item);
            }
            var total = this.items.filter(item=>item.isAdded).length;
            this.setState({...this.state,count:total});
        });
    }
    getAllProducts(){
        var items = firebase.database().ref('items');
        items.on('value',(snapshot)=>{
            var obj = snapshot.val();
            console.log("Object is ",obj);
            for(let key in obj){
                var itemObject = obj[key];
                var item = new Item(itemObject.id,itemObject.name,itemObject.price,itemObject.url);
            this.items.push(item);
            }
            
            
            console.log('After Add Array is ',this.items);
            this.setState({item:this.items});
        });
       
    }
    render(){
        return(<div>
            <h1>Buyer</h1>
            <Search searchByPrice={this.searchByPrice.bind(this)} takePrice={this.takePrice.bind(this)}/>
            <Cart count={this.state.count}/>
            <ProductList showCount={this.showCount.bind(this)} items={this.state.items}/>
        </div>)
    }
}