import React from "react";
import styled from "styled-components";
import devices from 'utility/MediaQueries.js';
import ForStudentsSVG from 'assets/ForStudents.svg';

const SVGContainer = styled.div`
    min-width: 50vw;
    ${devices.tablet`
        width: 100vw;
        order: 1;
    `}
`;

const ForStudents = () =>
    <SVGContainer>
        <img src={ForStudentsSVG} alt="For Students" />
    </SVGContainer>
;

export default ForStudents;