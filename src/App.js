import React, { Component } from 'react';
import Calendar from './components/Calendar.jsx';

import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

const divStyle = {
  width: '50%',
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'block',
  float: 'none'
}

class App extends Component {
  render() {
    return (
      <div>
        <Calendar></Calendar>
      </div>
    );
  }
}

export default App;
