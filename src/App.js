import React, { Component } from 'react';
import Calendar from './components/Calendar.jsx';

import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faListUl, faLink, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faListUl, faLink, faMapMarkerAlt);

const CalendarStyle = {
  color: '#F15D24',
  textColor: 'white'
};

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Calendar calendarStyle={CalendarStyle} />
      </React.Fragment>
    );
  }
}

export default App;
