import React from "react";
import styled from "styled-components";
import devices from "utility/MediaQueries.js";

const SponsorWrapper = styled.article`
    flex: 0 1 300px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
  
    padding: 15px 30px;
    ${devices.tablet`
      padding: 10px 30px;
      flex-basis: 220px;
    `}
    ${devices.small`
      padding: 5px 30px;
    `}
  
      //border: black solid 2px;
    //border-radius: 20px;
`;

const SponsorImage = styled.img`
    width: 100%;
    object-fit: contain;
    flex: 1;
    //border-bottom: black dashed 2px;
`;

const SponsorName = styled.h3`
    text-align: center;
    font-size: 1.8em;
    font-family: "Roboto Condensed";
    ${devices.tablet`
      font-size: 1.6em;
    `}
`;

/**
 * Display a Sponsor
 * @constructor
 * @param props The `url` of the sponsor's logo and the `name` of the Sponsor
 */
const Sponsor = (props) => (
    <SponsorWrapper>
        <SponsorImage src={props.url} alt={props.name + " logo"} />
        <SponsorName>{props.name}</SponsorName>
    </SponsorWrapper>
);

export default Sponsor;
