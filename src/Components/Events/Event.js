import React from 'react';

const Event=(props)=>{
    return (
        <div>
            {props.content}
            <button class="delete btn" onClick={()=>{props.onDelete(props.id)}}>X</button>            
        </div>
    )
}
export default Event;