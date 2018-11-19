import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import rightPhotoURL from "../../assets/sample-photo.jpg";
import logoOrange from "../../assets/logo-orange.png";
import "../../utility/fonts.css";
import styled from 'styled-components';
import HomeLayoutOuter from "../HomeLayoutOuter/HomeLayoutOuter.jsx";
import devices from '../../utility/MediaQueries.js';

import PolygonCanvas from '../PolygonCanvas.js';

import logoUrl from '../../assets/logo-orange-cropped.png';

const HomeBackgroundOuter = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
`

const MainText = styled.h1`
  font-family: "Roboto Condensed";
  font-weight: 900;
  line-height: 0.8;
  margin: 0 2vw 2vw 2vw;
  color: #fff;
  text-align: left;
  position: relative;
  display: block;
  width: 60vw;
  font-size: 5vw;
  ${devices.tablet`
    width: 70vw;
    font-size: 10vw;
  `}
  text-transform: uppercase;
`

const Logo = styled.img`
  display: block;
  width: 10vw;
  ${devices.tablet`
    width: 20vw;
  `}
  height: auto;
  padding: 2vw;
`

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <PolygonCanvas style={{width: '100%', height: '100%', position: 'absolute', transform: "scaleX(-1)"}}/>
        <HomeBackgroundOuter>
          <Logo src={logoUrl}/>
          <MainText>a community of individuals who enjoy expressing creativity through technology.</MainText>
        </HomeBackgroundOuter>
      </React.Fragment>
    );
  }
}

export default Home;