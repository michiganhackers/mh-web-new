import React from "react";
import styled from "styled-components";
import devices from "../../utility/MediaQueries.js";
import PropTypes from "prop-types";

const Header = styled.h1`
    font-family: "Roboto Condensed";
    font-weight: 900;
    line-height: 0.8;
    color: ${(props) => props.theme.heading};
    display: block;
    text-align: center;
    font-size: 8vh;
    ${devices.small`
    padding-top: 20%;
    padding-top: 16px;
  `}
    text-transform: uppercase;
    //margin: 10vw 0 4vw 0;
    // 16px looks fine. I think it's fine to leave at a fixed size
    padding-top: 16px;
`;

const StaticHeader = (props) => <Header>{props.children}</Header>;

StaticHeader.defaultProps = {
    children: "",
};

StaticHeader.propTypes = {
    children: PropTypes.string,
};

export default StaticHeader;
