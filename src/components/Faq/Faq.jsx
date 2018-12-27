import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../../utility/fonts.css";
import styled from 'styled-components';
import SubpageOuter from "../SubpageOuter/SubpageOuter.jsx";
import devices from '../../utility/MediaQueries.js';
import {StaticP, StaticH1} from "../../utility/ContentStyles.js";

import Navbar from '../Navbar.jsx';

class Faq extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <SubpageOuter header="faq">
          <StaticH1>FAQ question</StaticH1>
          <StaticP>answer and stuff</StaticP>
          <StaticH1>Another question</StaticH1>
          <StaticP>more answer</StaticP>
        </SubpageOuter>
      </React.Fragment>
    );
  }
}

export default Faq;
