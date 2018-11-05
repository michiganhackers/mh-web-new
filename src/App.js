import React, { Component } from 'react';
import Calendar from './components/Calendar.jsx';

import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

const CalendarStyle = {
  color: '#ef5b2e',
  textColor: 'white'
}

class App extends Component {
  render() {
    return (
      <div>
        <Calendar style={CalendarStyle}></Calendar>
      </div>
    );
  }
}

export default App;
