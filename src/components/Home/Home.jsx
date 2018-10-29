import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import rightPhotoURL from "../../assets/sample-photo.jpg";
import logoOrange from "../../assets/logo-orange.png";
import "../../utility/fonts.css";
import styled from 'styled-components';
import HomeLayoutOuter from "../HomeLayoutOuter/HomeLayoutOuter.jsx";
import devices from '../../utility/MediaQueries.js';

const LeftInner = styled.div`
  display: flex;
  ${devices.small`
    display: block;
  `}
  justify-content: space-around;
  flex-wrap: nowrap;
  text-align: left;
  margin: 0 0 4vh 0;
  padding: 0;
  width: 100%;
  overflow: scroll;
`

const LeftInnerCol = styled.div`
  margin-top: 2.5em;
  width: 50%;
  ${devices.small`
    width: 100%;
  `}
`

const HomeContentH1 = styled.h1`
  margin: 0.25em 0;
  width: 80%;
  display: block;
`

const HomeContentH2 = styled.h2`
  margin: 0;
  font-size: 1.2em;
  text-transform: uppercase;
  font-family: "Roboto Condensed", "Roboto", Helvetica, Arial, sans-serif;
  width: 80%;
  display: block;
`

const HomeContentP = styled.p`
  margin: 0.5em 0;
  width: 80%;
  display: block;
`

const HomepageUpper = styled.div`
  width: 90%;
  margin-left: calc(-3em + 5%);
  margin-top: 2em;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  ${devices.small`
    display: block;
  `}
`

const MissionStatement = styled.p`
  width: 70%;
  height: auto;
  line-height: 1.2;
  text-align: left;
  color: rgb(241,93,36);
  border-left: rgb(241, 93, 36) 5px solid;
  padding-left: 10px;
`

const MissionStatementTitle = styled.h1`
  font-size: 2.5em
  margin: 0 0 0.25em 0;
  font-family: "Roboto Condensed", "Roboto", Helvetica, Arial, sans-serif;
`

const LogoImage = styled.img`
  width: 20%;
  height: auto;
  display: block;
`

const RectangleDividerOuter = styled.div`
  width: 100%;
`

const RectangleDivider = styled.div`
  width: 5rem;
  height: 0.75rem;
  background-color: rgb(241,93,36);
  margin: 2.5em 0 0 0;
  display: block;
`

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <HomeLayoutOuter showLogo rightURL={rightPhotoURL}>
          <HomepageUpper>
            <LogoImage src={logoOrange} />
            <MissionStatement><MissionStatementTitle>MICHIGAN HACKERS</MissionStatementTitle>We are a community for computer scientists at the University of Michigan. We exist to promote problem-solving with technology and to engage students with the technologies used in companies today. Michigan Hackers are people who are passionate about working on personal projects as well as contributing to the world of open source software.</MissionStatement>
          </HomepageUpper>
          <LeftInner>
            <LeftInnerCol>
              <HomeContentH1>Hack Nights</HomeContentH1>
              <HomeContentH2>Thursdays 7-10pm • 1005 EECS</HomeContentH2>
              <HomeContentP>A time to talk with other Hackers to learn, teach, chat, and build in a casual environment. Usually started off with a short “Lightning Talk” by members of the computer science community. Recent talks include one by UM’s EECS professor J. Alex Halderman on election hacking, and one by UM alum and Facebook engineer, Mayank Patke, on how to write fast algorithms in Haskell.</HomeContentP>
            </LeftInnerCol>
            <LeftInnerCol>
              <HomeContentH1>Even More</HomeContentH1>
              <HomeContentP>We host a variety of other events, such as company tech talks, resume workshops, and social events with other groups on campus. You can check out a full list of events on our calendar. All events on the calendar are open to everyone - feel free to stop by!<br></br><br></br>Have any other questions or want to join our mailing list? Head to the FAQ for more information!</HomeContentP>
            </LeftInnerCol>
          </LeftInner>
        </HomeLayoutOuter>
      </React.Fragment>
    );
  }
}

export default Home;
