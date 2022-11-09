import React from "react";
import "utility/fonts.css";
import "index.css";
import styled from "styled-components";
import devices from "utility/MediaQueries.js";

import CrowdstrikeLogo from "assets/crowdstrike.png";
import MetaLogo from "assets/meta.png";
import OracleLogo from "assets/oracle.png";
import SusquehannaLogo from "assets/susquehanna.png";
import Sponsor from "./Sponsor";

const Wrapper = styled.section`
    width: 100%;
    background-color: lightblue;
`;

const SponsorTier = styled.section`
    width: 90%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding-bottom: 12px;
    ${devices.tablet`
      width: 95%;
    `}
    ${devices.small`
      // Uses % widths to scale the images in addition to the basis
      flex-direction: column; 
    `}
`;

const TierHeader = styled.h2.attrs((props) => ({
    tier: props.tier,
}))`
    text-align: center;
    font-size: ${(props) => {
        switch (props.tier) {
            case "1":
                return "3em";
            case "2":
                return "2.5em";
            case "3":
            default:
                return "2em";
        }
    }};
    font-family: "Roboto Condensed";
    font-weight: 700;
    padding-top: 12px;
    // Temporary with TierSubHeader
    margin-bottom: 0;
    ${devices.tablet`
      font-size: ${(props) => {
          switch (props.tier) {
              case "1":
                  return "2.5em";
              case "2":
                  return "2em";
              case "3":
              default:
                  return "1.5em";
          }
      }};
    `}
`;

// temporary place to show the previous sponsor levels (gigabyte, megabyte, ...)
const TierSubHeader = styled.h3.attrs((props) => ({
    tier: props.tier,
}))`
    text-align: center;
    font-size: ${(props) => {
        switch (props.tier) {
            case "1":
                return "1.5em";
            case "2":
                return "1.25em";
            case "3":
            default:
                return "1em";
        }
    }};
    font-family: "Roboto Condensed";
    font-weight: 700;
    ${devices.tablet`
      font-size: ${(props) => {
          switch (props.tier) {
              case "1":
                  return "1.2em";
              case "2":
                  return "1em";
              case "3":
              default:
                  return "0.8em";
          }
      }};
    `}
`;

const Sponsors = () => (
    <Wrapper>
        {/*TODO: TierHeader should be parameterized to prevent messing up the names*/}
        <TierHeader tier="1">Platinum Sponsors</TierHeader>
        <TierSubHeader tier="1">(formerly Gigabyte)</TierSubHeader>
        <SponsorTier>
            <Sponsor tier="1" url={CrowdstrikeLogo} name={"Crowdstrike"} />
            <Sponsor tier="1" url={MetaLogo} name={"Meta"} />
        </SponsorTier>

        <TierHeader tier="2">Gold Sponsors</TierHeader>
        <TierSubHeader tier="2">(formerly Megabyte)</TierSubHeader>
        <SponsorTier>
            <Sponsor tier="2" url={SusquehannaLogo} name={"Susquehanna"} />
            <Sponsor tier="2" url={OracleLogo} name={"Oracle"} />
        </SponsorTier>
    </Wrapper>
);

export default Sponsors;
