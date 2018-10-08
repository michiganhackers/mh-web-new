import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

// TODO: Add the components these routes map to
// TODO: Add a navbar
class App extends Component {
  render() {
    return (
      <div className="App">
        <div>Navbar goes here</div>
        <Router>
          <div>
            <Route exact path="/"/>
            <Route path="/events"/>
            <Route path="/faq"/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
