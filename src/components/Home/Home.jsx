import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import leftPhotoURL from "../../assets/sample-photo.jpg";
import logoOrange from "../../assets/logo-orange.png";
import styled from 'styled-components';
import devices from '../../utility/MediaQueries.js';

const Outer = styled.div`
  width: 100%;
  margin-top: 80px;
  height: calc(100vh - 80px);
  align-items: center;
`

const Left = styled.div`
  position: absolute;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  padding-left: 3em;
  height: calc(100vh - 80px);
  width: calc(67vw - 3em);
  ${devices.small`
    width: 100vw;
  `}
  color: rgb(241,93,36);
  left: 0;
  overflow: scroll;
`

const Right = styled.div`
  background-image: url(${leftPhotoURL});
  width: 33vw;
  height: calc(100vh - 80px);
  position: absolute;
  right: 0;
  padding: 0;
  margin: 0;

  ${devices.small`
    display: none;
  `}
`

const LogoImage = styled.img`
  width: auto;
  height: 40%;
  margin-left: -4.5vh;
  margin-top: 4em;
  display: block;
`

const LeftInner = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  text-align: left;
  margin: 0 0 4vh 0;
  padding: 0;
  width: 100%;
  overflow: scroll;
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

const textStyle = {
  margin: "0.5em 0",
  width: '75%',
  display: 'block'
}

class Home extends Component {
  render() {
    return (<Outer>
      <Left>
        <LogoImage src={logoOrange} />
        <RectangleDividerOuter>
          <RectangleDivider/>
        </RectangleDividerOuter>
        <LeftInner>
          <h1 style={textStyle}>Lorem Ipsum</h1>
          <p style={textStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p style={textStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p style={textStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </LeftInner>
      </Left>
      <Right>
      </Right>
    </Outer>);
  }
}

export default Home;
