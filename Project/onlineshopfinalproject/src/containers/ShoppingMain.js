import React from 'react';
import { Nav } from '../components/ui/Nav';
import { Switch, Route} from 'react-router-dom';

import {Register} from '../components/Register';
import {Login} from '../components/Login';
import {Home} from './Home';
import {Contact} from '../components/Contact';

import * as firebase from 'firebase';
import { BuyerMain } from '../components/buyer/BuyerMain';
import { Crud } from '../components/seller-crud/Crud';
import {BrowserRouter} from 'react-router-dom';

export class ShoppingMain extends React.Component{
    constructor(props){
        super(props);
        this.state = {isLogin:false,userType:''};
        console.log("Props are ======= ",this.props.history)
    }
    updateLogin(loginStatus, role,history){
        console.log("Update Login Called ", loginStatus," ",role, " ");
        this.setState({isLogin:loginStatus, userType:role});
        var redirectTo =role=='S'?'/crud':'/products';
            history.push(redirectTo);
    }
render(){
    var jsx = (<div></div>);
    if(!this.state.isLogin){
        jsx = (<Route path="/login" exact render={(props)=><Login {...props} update={this.updateLogin.bind(this)}  />}/>);
    }
    else if(this.state.isLogin && this.state.userType=='B'){
        jsx = (<Route path='/products' exact component={BuyerMain}/>);
    }
    if(this.state.isLogin && this.state.userType=='S'){
        jsx = (<Route path='/crud' exact component={Crud}/>);
    }
    return(
        <BrowserRouter >
        <div>
        <Nav loginStatus={this.state.isLogin} userType={this.state.userType} />
        <div className='container'>


            <Switch>
                <Route path="/" exact component={Home}/>
                {jsx}
                
                <Route path="/register" exact component={Register}/>
                <Route path="/contact" exact component={Contact}/>
            </Switch>
            
            </div>
            </div>
            </BrowserRouter>
       
        
        
    )
}
}