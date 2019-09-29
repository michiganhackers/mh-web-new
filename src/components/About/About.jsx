import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../../utility/fonts.css";
import styled from 'styled-components';
import SubpageOuter from "../SubpageOuter/SubpageOuter.jsx";
import devices from '../../utility/MediaQueries.js';
import {StaticP, StaticH1} from "../../utility/ContentStyles.js";
import Sponsors from "./Sponsors.jsx"
import Roster from "./Roster.jsx"
import MailingList from "../MailingList/MailingList.jsx"

import Navbar from '../Navbar.jsx';

const EventList = styled.ul`
  list-style-type: none;
  margin: auto;
  padding: 0;
`
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
            <EventList>
              <li>Weekly Hack Nights</li>
              <li>Company Events</li>
              <li>Organizing groups to attend hackathons</li>
              <li>Lightning Talks</li>
              <li>Cybersecurity Capture The Flag competitions</li>
              <li>Resume Critiques</li>
              <li>Interview Prep</li>
            </EventList>
          </StaticP>
          <StaticH1>
            Other Relevant Links
          </StaticH1>
            <StaticP>
            Look at the following links to get a feel of our culture, the organization structure, event vibes, how the different Core Teams work, how to get involved, access to free resources, and more.
            <EventList>
              <li><a href="https://docs.google.com/presentation/d/122LR6C2yGpHYKe4mKHWFF98y6F8sV9Jh0dLnogiKnug/edit?usp=sharing">Our Mass Meeting Slides</a></li>
              <li><a href="https://docs.google.com/presentation/d/1ctHSblSXA9FiPauXlbR8ypy6dxF_zp4tH2ICU-_HKN0/edit">The Core Teams</a></li>
              <li><a href="https://calendar.google.com/calendar/selfsched?sstoken=UUZvRjlEM0RMUlZ2fGRlZmF1bHR8NjkzODc3M2I3MDJlZGM5NDQyZDU2M2IzMzc4YTM2NjY">Office hours signup</a></li>
              <li><a href="https://docs.google.com/spreadsheets/d/13t39d5ou1FGmapBw2CxUsuo6OLtLENmbVQpotNGtCxM/edit#gid=0">Drop your LinkedIn</a></li>
              <li><a href="https://docs.google.com/document/d/1wchq66lN9bDLcSSAxPEamBQYqBjUVjfJgcd9NqBc704/edit">Some CS Resources</a></li>
              <li><a href="http://leccap.engin.umich.edu/leccap/site/7r31hdj317ufew776zq">Recordings</a></li>
              <li><a href="https://drive.google.com/drive/u/0/folders/1qcobYgZCS1edagXJywzQ2ofEtGO99TOk">Photo Archive</a></li>
              <li><a href="https://docs.google.com/forms/d/e/1FAIpQLScQu45eXlpMcdodMqVjzdMq5xqyRBNauOqRnTfnFamhxnj6Wg/viewform?usp=sf_link">Absence Form</a></li>
            </EventList>
            </StaticP>
          <Roster/>
          <Sponsors/>
        </SubpageOuter>
      </React.Fragment>
    );
  }
}

export default About;
