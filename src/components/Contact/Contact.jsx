import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../../utility/fonts.css";
import SubpageOuter from "../SubpageOuter/SubpageOuter.jsx";
import {StaticP, StaticH1} from "../../utility/ContentStyles.js";

import Navbar from '../Navbar.jsx';

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <SubpageOuter header="contact">
        </SubpageOuter>
      </React.Fragment>
    );
  }
}

export default Contact;
