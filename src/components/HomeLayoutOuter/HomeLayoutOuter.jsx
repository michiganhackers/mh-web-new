import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logoOrange from "../../assets/logo-orange.png";
import styled from 'styled-components';
import devices from '../../utility/MediaQueries.js';

const Outer = styled.div`
  width: 100%;
  margin-top: 80px;
  align-items: center;
`

const Left = styled.div`
  position: absolute;
  background-color: #fff;
  padding-left: 3em;
  width: calc(67vw - 3em);
  ${devices.small`
    width: 100vw;
  `}
  color: rgb(241,93,36);
  left: 0;
`

const Right = styled.div`
  width: 33vw;
  height: calc(100vh - 80px);
  position: fixed;
  right: 0;
  padding: 0;
  margin: 0;

  ${devices.small`
    display: none;
  `}
`

class HomeLayoutOuter extends Component {
  render() {
    return (
      <Outer>
        <Left>
          {this.props.children}
        </Left>
        <Right style={{backgroundImage: `url(${this.props.rightURL})`}}>
        </Right>
      </Outer>
    );
  }
}

export default HomeLayoutOuter;
