import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/styles.css';
import {Route,Switch} from 'react-router';
import Login from'./Components/Login';
import Signup from './Components/Signup';
import Nav from './Components/Nav';
import Events from './Components/Events/Events';

function App() {
  const styles={
    textAlign:"center",
    fontSize:"50px",
    fontWeight:"700",
  }
  return (
    <React.Fragment>
      <div className="jumbotron">
      <div className="row">
          <div className="col">
          <h1 style={styles}>Event App</h1>
          <Nav/>
          </div>
      </div>
      </div>
      <Switch>
        <Route path="/events" component={Events}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/" component={Login}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
