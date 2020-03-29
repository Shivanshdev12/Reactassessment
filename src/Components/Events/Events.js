import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import EventList from './EventList';
import SubmitForm from './SubmitForm';

class Events extends Component {
    state={
        tasks:['Task1','Task2','Task3']
    };
    handledelete=(index)=>{
        const newArr = [...this.state.tasks];
        newArr.splice(index,1);
        this.setState({tasks:newArr});
    }
    handleSubmit=task=>{
        this.setState({tasks:[...this.state.tasks,task]});
    }
    render() {
        return (
            <div className="todoListMain">
                <Header numevents={this.state.tasks.length}/>
                <EventList tasks={this.state.tasks} onDelete={this.handledelete} />
                <SubmitForm onFormSubmit={this.handleSubmit}/>
                <button className="btn btn-light"><Link to="/">Home</Link></button>
            </div>
        )
    }
}


export default Events;