import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import '../../src/styles.css';

export default function Login() {
    const styles={
        textAlign:'center',
    }
    return (
        <div className="container" style={styles}>
            <div className="row">
                <div className="col-sm-12 align-Self-Center">
                <h2><Link to='/signup'>Signup</Link>/Login</h2>    
                <form action="">
                    <label>Email Address</label>
                    <br/>
                    <input type="email" placeholder="Enter email" required></input><br/>
                    <label>Password</label><br/>
                    <input type="password"
                    placeholder="Enter Password"></input>
                </form>
                <button className="btn btn-primary">Login</button>
                </div>
            </div>
        </div>
    )
}
