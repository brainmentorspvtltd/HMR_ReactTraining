import React from 'react';
import * as firebase from 'firebase';

export class Login extends React.Component{
 constructor(props){
     super(props);
     this.state ={message:''};
 } 
 doLogin(){
     console.log("Login Props ",this.props.history);
    var userid= this.refs.userid.value;
    var pwd = this.refs.pwd.value;
    var user = firebase.database().ref("/users/"+userid);
    user.on('value',(snapshot)=>{
        
        var userObject = snapshot.val();
        console.log("User is ",userObject);
        if(userObject && userObject.password== pwd){
            this.setState({message:'Welcome '+userid});
            this.props.update(true,userObject.role,this.props.history);
            
            
        }
        else{
            this.setState({message:'Invalid Userid or Password'});
            this.props.update(false,'');

        }
    })
}  
render(){
    return(
        <div className='row'>
            <div className='col-sm-12'>
                <h1 className="alert-primary">Login Form</h1>
                <h2>{this.state.message}</h2>
                <div className='form-group'>
                    <label htmlFor="">Userid</label>
                    <input ref='userid' type="text" placeholder="Type Login Here" className="form-control" />
                </div>
                <div className='form-group'>
                    <label htmlFor="">Password</label>
                    <input ref='pwd' type="password" placeholder="Type Password Here" className="form-control" />
                </div>
                <div className="form-group">
                    <button onClick={this.doLogin.bind(this)} className="btn btn-primary">Login</button>
                </div>
            </div>
        </div>
    )
}
}