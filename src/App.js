import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import Home from './components/Home/Home.jsx';

/*
TODO: Add the components these routes map to
EX:             <Route path="/events" component={Calendar} />
after having imported the Calendar component
*/
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <Navbar/>
            <Route exact path="/" component={Home}/>
            <Route path="/events"/>
            <Route path="/faq"/>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
