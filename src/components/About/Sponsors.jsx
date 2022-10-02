import React from "react";
import "../../utility/fonts.css";
import "../../index.css";
import styled from "styled-components";
import { StaticH1 } from "../../utility/ContentStyles.js";
import devices from "utility/MediaQueries.js";

import CrowdstrikeLogo from "assets/crowdstrike.png";
import MetaLogo from "assets/meta.png";
import OracleLogo from "assets/oracle.png";
import SusquehannaLogo from "assets/susquehanna.png";
import Sponsor from "./Sponsor";

const HighLogo = styled.img`
    align: middle;
    max-height: 170px;
    width: auto;
    padding: 10px;
    max-width: 100%;
`;

const LowLogo = styled.img`
    align: middle;
    max-height: 100px;
    width: auto;
    padding: 10px;
    max-width: 100%;
`;

const HighSponsors = styled.div`
    text-align: center;
`;

const LowSponsors = styled.div`
    text-align: center;
    padding-bottom: 10%;
`;

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
    ${devices.small`
      flex-direction: column; 
  `}
`;

const TierHeader = styled.h2`
    text-align: center;
    font-size: 3em;
    font-family: "Roboto Condensed";
    font-weight: 700;
    padding-top: 12px;
    ${devices.tablet`
      font-size: 2.5em;
    `}
`;

const Sponsors = () => (
    <Wrapper>
        <TierHeader>Tier 1 Sponsors</TierHeader>
        <SponsorTier>
            <Sponsor url={CrowdstrikeLogo} name={"Crowdstrike"} />
            <Sponsor url={MetaLogo} name={"Meta"} />
        </SponsorTier>

        <TierHeader>Tier 2 Sponsors</TierHeader>
        <SponsorTier>
            <Sponsor url={SusquehannaLogo} name={"Susquehanna"} />
            <Sponsor url={OracleLogo} name={"Oracle"} />
        </SponsorTier>
    </Wrapper>
);

export default Sponsors;
