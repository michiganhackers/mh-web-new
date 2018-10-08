import React, { Component } from 'react';
import Calendar from './components/Calendar.jsx';
import './App.css';

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
      <div style={divStyle}>
        <Calendar></Calendar>
      </div>
    );
  }
}

export default App;
