import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logoOrange from "../../assets/logo-orange.png";
import styled from 'styled-components';
import devices from '../../utility/MediaQueries.js';

import StaticHeader from "../StaticHeader/StaticHeader.jsx"

const Outer = styled.div`
  width: 100%;
  margin-top: 80px;
  align-items: center;
`

const Content = styled.div`
  width: 60%;
  margin-left: 20%;
  ${devices.tablet`
    width: 90%;
    margin-left: 10%;
  `}
  margin-top: 0;
  text-align: left;
`

class SubpageOuter extends Component {
  render() {
    return (
      <Outer>
        <StaticHeader>{this.props.header}</StaticHeader>
        <Content>{this.props.children}</Content>
      </Outer>
    );
  }
}

export default SubpageOuter;