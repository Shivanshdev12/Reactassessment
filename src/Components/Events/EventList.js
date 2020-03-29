import React from 'react';
import Event from './Event';
import '../../../src/styles.css';

const EventList=(props)=>{
    const style={
        fontSize:'30px',
        fontWeight:'500',
    }
    const events=props.tasks.map((event,index)=>{
        return <Event content={event} key={index}
        id={index}
        onDelete={props.onDelete} />
    })
    return (
        <div style={style}>
            <span className="custom">{events}</span>
        </div>
    )
}

export default EventList;