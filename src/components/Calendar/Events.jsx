import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../../utility/fonts.css";
import SubpageOuter from "../SubpageOuter/SubpageOuter.jsx";
import Calendar from "./Calendar.jsx"
import Navbar from '../Navbar.jsx';

const CalendarStyle = {
  color: '#F15D24',
  textColor: 'white'
}

class Events extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <SubpageOuter header="calendar">
          <Calendar calendarStyle={CalendarStyle}/>
        </SubpageOuter>
      </React.Fragment>
    );
  }
}

export default Events;
