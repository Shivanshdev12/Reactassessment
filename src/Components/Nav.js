import React from 'react';
import {NavLink,Link} from 'react-router-dom';

export default function Nav() {
    const styles={
        color:"white",
        textDecoration:"none",
        textAlign:"center",
    }
    return (
        <div className="row">
            <div className="col" style={styles}>
                <button className="btn btn-dark"><span style={styles} className="align-self-center">
                    <NavLink to="/events" activeStyle={{
                        color:'white'
                    }}>View Events</NavLink>
                </span></button>
            </div>
        </div>
    )
}
