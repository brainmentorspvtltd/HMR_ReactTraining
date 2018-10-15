import React from 'react';
import {Header} from '../components/Header';
import {Nav} from '../components/Nav';
import {URLS} from '../utils/config';
export class Shop extends React.Component{
  constructor(props){
    super(props);
    this.state = {items:[],err:{}};
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

  componentWillMount() {
      
  }
  componentDidMount () {
    this.doAjax();
  }
  
  
render(){
    return (
        <div>
            <Header/>
            <Nav/>
            <h3>Welcome {this.props.userid}</h3>
            
        </div>
    )
}
}