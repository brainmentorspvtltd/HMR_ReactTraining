import React from 'react';
import {Product} from './Product';
import {URLS} from '../utils/config';
// export const Products = (props)=>{
//     return (
//         props.items.map(itemObject=><Product item={itemObject}/>)
        
//     )
// }
export class Products extends React.Component{
    constructor(){
        super();
        this.state = {items:[],err:{}};
    }
    componentDidMount () {
        this.doAjax();
      }
    doAjax(){
        fetch(URLS.mobile).then(response=>{
            response.json().then(data=>{
                 this.setState({items:data['mobiles']});
                 console.log("Data is ",data['mobiles']); 
            }).catch(error=>{
              this.setState({err:error});
            })
        }).catch(error=>{
          this.setState({err:error});
        });
    }
    render(){
        return (
                    this.state.items.map(itemObject=><Product item={itemObject}/>)
                    
                 )
    }
}
