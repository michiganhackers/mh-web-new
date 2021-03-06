import React from 'react';
import styled from 'styled-components';
import devices from '../../utility/MediaQueries.js';
import PropTypes from 'prop-types';

const Header = styled.h1`
  font-family: "Roboto Condensed";
  font-weight: 900;
  line-height: 0.8;
  color: #EE5E30;
  display: block;
  text-align: center;
  font-size: 8vh;
  ${devices.small`
    padding-top: 20%;
  `}
  text-transform: uppercase;
  margin: 10vw 0 4vw 0;
`;

const HeaderOuter = styled.div``;

const StaticHeader = (props) => (
    <HeaderOuter>
        <Header>
            {props.children}
        </Header>
    </HeaderOuter>
);

StaticHeader.defaultProps = {
    children: ""
};

StaticHeader.propTypes = {
    children: PropTypes.string
};

export default StaticHeader;
