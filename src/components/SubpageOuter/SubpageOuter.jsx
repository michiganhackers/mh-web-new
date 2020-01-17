import React, { Component } from 'react';
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
  ${devices.tablet`
    width: 90%;
  `}
  margin-top: 0;
  text-align: left;
  margin: auto;
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
