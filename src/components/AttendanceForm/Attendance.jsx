import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../../utility/fonts.css";
import SubpageOuter from "../SubpageOuter/SubpageOuter.jsx";
import {StaticP, StaticH1} from "../../utility/ContentStyles.js";
import MailingList from '../MailingList/MailingList.jsx'
import Navbar from '../Navbar.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AttendanceForm from "./AttendanceForm";
class Attendance extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <SubpageOuter header="attendance">
          <StaticP>
          Here is the attendance page for all of you
          </StaticP>
          <AttendanceForm/>
        </SubpageOuter>
      </React.Fragment>
    );
  }
}

export default Attendance;
