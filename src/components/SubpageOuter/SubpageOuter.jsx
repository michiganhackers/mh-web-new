import React from "react";
import styled from "styled-components";
import devices from "../../utility/MediaQueries.js";

import StaticHeader from "../StaticHeader/StaticHeader.jsx";
import PropTypes from "prop-types";

const Outer = styled.div`
    width: 100%;
    margin-top: 24px;
    align-items: center;
`;

const Content = styled.main`
    width: 60%;
    ${devices.tablet`
    width: 90%;
  `}
    margin-top: 0;
    text-align: left;
    margin: auto;
`;

/**
 * Wrapper for all pages. Reason for this is the Navbar not being `fixed` due to styling decisions.
 * Since Navbar is not fixed and taking up space, we need a standard way to adjust the layout to prevent overlaps.
 * @constructor
 * @param props.header {string} Name of the page
 * @param props.children React subcomponents (supplied automatically)
 */
const SubpageOuter = (props) => (
    <Outer>
        <StaticHeader>{props.header}</StaticHeader>
        <Content>{props.children}</Content>
    </Outer>
);

SubpageOuter.defaultProps = {
    header: "",
};

SubpageOuter.propTypes = {
    header: PropTypes.string,
};

export default SubpageOuter;
