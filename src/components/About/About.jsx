import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../../utility/fonts.css";
import styled from 'styled-components';
import SubpageOuter from "../SubpageOuter/SubpageOuter.jsx";
import devices from '../../utility/MediaQueries.js';
import {StaticP, StaticH1} from "../../utility/ContentStyles.js";

import Navbar from '../Navbar.jsx';

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <SubpageOuter header="about us">
          <StaticH1>Section</StaticH1>
          <StaticP>hello</StaticP>
          <StaticH1>Another section</StaticH1>
          <StaticP>hello again</StaticP>
        </SubpageOuter>
      </React.Fragment>
    );
  }
}

export default About;
