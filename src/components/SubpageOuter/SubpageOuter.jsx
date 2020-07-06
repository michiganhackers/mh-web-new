import React from 'react';
import styled from 'styled-components';
import devices from '../../utility/MediaQueries.js';

import StaticHeader from "../StaticHeader/StaticHeader.jsx";
import PropTypes from 'prop-types';

const Outer = styled.div`
  width: 100%;
  margin-top: 80px;
  align-items: center;
`;

const Content = styled.div`
  width: 60%;
  ${devices.tablet`
    width: 90%;
  `}
  margin-top: 0;
  text-align: left;
  margin: auto;
`;

const SubpageOuter = (props) => (
    <Outer>
        <StaticHeader>{props.header}</StaticHeader>
        <Content>{props.children}</Content>
    </Outer>
);

SubpageOuter.defaultProps = {
    header: ""
};

SubpageOuter.propTypes = {
    header: PropTypes.string
};

export default SubpageOuter;
