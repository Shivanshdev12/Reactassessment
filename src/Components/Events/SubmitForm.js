import React, { Component } from 'react'

class SubmitForm extends Component {
    state={term:'',error:''};
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.term === '') return;
        this.props.onFormSubmit(this.state.term);
        this.setState({ term: '' });
      }
    //   handle=(e)=>{
    //     e.preventDefault();
    //     var x=e.target.value;
    //     var len=x.length;
    //     if(len < 10)
    //     this.setState({error:"Length must be greater than 10"})
    //     if(len==0 || len>10)
    //     this.setState({error:''})
    // }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                    className="input"
                    value={this.state.term}
                    onChange={(e)=> this.setState({term:e.target.value})}
                    // onChange={this.handle}
                    placeholder="Enter Event"/>
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default SubmitForm;
