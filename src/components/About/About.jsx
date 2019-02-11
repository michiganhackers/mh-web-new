import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../../utility/fonts.css";
import styled from 'styled-components';
import SubpageOuter from "../SubpageOuter/SubpageOuter.jsx";
import devices from '../../utility/MediaQueries.js';
import {StaticP, StaticH1} from "../../utility/ContentStyles.js";
import Sponsors from "./Sponsors.jsx"
import MailingList from "../MailingList/MailingList.jsx"

import Navbar from '../Navbar.jsx';

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <SubpageOuter header="about us">
          <StaticH1>
            We're a student organization at University of Michigan seeking to foster a diverse community to build and grow relevant skills in a technological and fast-paced world.
          </StaticH1>
          <StaticP>
            Our end goal is to provide high quality resources for any and all students to become more competent members of society (technically, socially, and professionally) with a computer science twist. While connecting students to projects, skills, faculty, companies, and more, we hope to make a large university feel smaller and forge lifelong bonds in an inclusive environment while also bridging passionate people together.
          </StaticP>
          <MailingList/>
          <StaticH1>
            Our Events
          </StaticH1>
          <StaticP>
            Some events we've had in the past or are planning for the future include:
            <ul>
              <li>Weekly Hack Nights</li>
              <li>Company Events</li>
              <li>Organizing groups to attend hackathons</li>
              <li>Lightning Talks</li>
              <li>Cyebersecurity Capture The Flag competitions</li>
              <li>Resume Critiques</li>
              <li>Interview Prep</li>
            </ul>
          </StaticP>
          <Sponsors/>
        </SubpageOuter>
      </React.Fragment>
    );
  }
}

export default About;
