import React from "react";
import styled from "styled-components";
import devices from 'utility/MediaQueries.js';
import ForCompaniesSVG from "assets/ForCompanies.svg";

const SVGContainer = styled.div`
    min-width: 50vw;
    ${devices.tablet`
        order: 3;
        width: 100vw;
    `}
`;

const ForCompanies = () => 
    <SVGContainer>
        <img src={ForCompaniesSVG} alt="For Companies"/>
    </SVGContainer>
;

export default ForCompanies;