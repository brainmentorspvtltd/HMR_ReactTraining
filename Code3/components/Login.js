import React from 'react';
export class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {msg:''};

    }
    clear(){
        this.refs.uid.value ='';
        this.refs.pwd.value ='';
    }
    doLogin(){
        var userid = this.refs.uid.value;
        var pwd = this.refs.pwd.value;
        if(userid==pwd){
            this.setState({msg:'Welcome '+userid});
            this.props.updateLoginStatus(true,userid);
        }
        else{
            this.setState({msg:'Invalid Userid or Password'});
            this.props.updateLoginStatus(false);
        }

    }
    render(){
        return (
            <div >

                <h2 className="alert-info">Login Page</h2>
                <h3 className="alert-success">{this.state.msg}</h3>
                <div className="form-group">
                   <label htmlFor="userid">Userid</label>
                   <input id="userid" ref="uid" type="text" className="form-control" placeholder="type Userid here"/>     
                </div>
                <div className="form-group">
                   <label htmlFor="">Password</label>
                   <input type="password" ref="pwd" className="form-control" placeholder="type Password here"/>     
                </div>
                <div className="form-group">
                    <button onClick={this.doLogin.bind(this)} className="btn btn-primary">Login</button>
                    &nbsp;
                    <button onClick={this.clear.bind(this)} className="btn btn-danger">Clear</button>
                </div>
            </div>
        )
    }
}