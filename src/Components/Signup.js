import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import '../../src/styles.css';

class Signup extends React.Component{
    state={
        name:"",
        error:''
    }
    handle=(e)=>{
        e.preventDefault();
        var x=e.target.value;
        var len=x.length;
        if(len < 10)
        this.setState({error:"Length must be greater than 10"})
        if(len==0 || len>10)
        this.setState({error:''})
    }
    render(){
        const styles={
            textAlign:'center',
        }
        return (
            <div className="container" style={styles}>
                <div className="row">
                    <div className="col-sm-12 align-Self-Center">
                    <h2><Link to='/'>Login</Link>/Signup</h2>    
                    <form action="">
                        <label>Username</label><br/>
                        <p>{this.state.error}</p>
                        <input type="text" placeholder="Enter Username" onChange={(e)=> this.setState({name:e.target.value})}
                        onChange={this.handle} required></input><br/>
                        <label>Email Address</label><br/>
                        <input type="email" placeholder="Enter email" required></input><br/>
                        <label>Password</label><br/>
                        <input type="password" placeholder="Enter Password" required></input><br/>
                        <label>Confirm Password</label><br/>
                        <input type="password" placeholder="Enter Password" required></input>
                    </form>
                    <button className="btn btn-primary">Signup</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup;
