import React from 'react';
import * as firebase from 'firebase';
export class Register extends React.Component{
   constructor(){
       super();
       this.state = {message:''};
   }
   registerIt(){
       console.log("Inside Register It call");
    var userid = this.refs.userid.value;
    var password = this.refs.password.value;
    var role = this.refs.roles.value;
    var userObject= {"userid":userid,"password":password,"role":role};
    console.log("Before FireBase Call ",userObject);
    var promise = firebase.database().ref('/users/'+userid).set(userObject);
    promise.then(data=>{
        console.log("Promise ",data);
        this.setState({message:'User Register SuccessFully'});
    }).catch(err=>{
        this.setState({message:'Unable to Register SuccessFully'});
    });
} 
render(){
    return(
        <div className='row'>
            <div className='col-sm-12'>
                <h1 className="alert-primary">Register Form</h1>
                <h2 className="alert-success">{this.state.message}</h2>
                <div className='form-group'>
                    <label htmlFor="">Userid</label>
                    <input ref='userid' type="text" placeholder="Type Login Here" className="form-control" />
                </div>
                <div className='form-group'>
                    <label htmlFor="">Password</label>
                    <input ref='password' type="password" placeholder="Type Password Here" className="form-control" />
                </div>
                <div className='form-group'>
                    <label htmlFor="">Select Role</label>
                    <select ref='roles' className="form-control">
                        <option value="-1">Select Role</option>
                        <option value="B">Buyer</option>
                        <option value="S">Seller</option>
                    </select>
                </div>
                <div className="form-group">
                    <button onClick={this.registerIt.bind(this)} className="btn btn-primary">Register</button>
                </div>
            </div>
        </div>
    )
}
}