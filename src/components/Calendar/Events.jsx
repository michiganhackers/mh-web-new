import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../../utility/fonts.css";
import SubpageOuter from "../SubpageOuter/SubpageOuter.jsx";
import {StaticP, StaticH1} from "../../utility/ContentStyles.js";
import Calendar from "./Calendar.jsx"
import Navbar from '../Navbar.jsx';

const CalendarStyle = {
  color: '#ef5b2e',
  textColor: 'white'
}

class Events extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <SubpageOuter header="calendar">
        <Calendar style={CalendarStyle}></Calendar>
        </SubpageOuter>
      </React.Fragment>
    );
  }
}

export default Events;
