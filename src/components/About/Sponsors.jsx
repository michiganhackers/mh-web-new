import React from "react";
import "utility/fonts.css";
import "index.css";
import styled from "styled-components";
import devices from "utility/MediaQueries.js";

import CapitalOneLogo from "assets/c1.png";
import CitadelLogo from "assets/citadel.png";
import CrowdstrikeLogo from "assets/crowdstrike.png";
import GraingerLogo from "assets/grainger.png";
import MetaLogo from "assets/meta.png";
import NitsLogo from "assets/nits.png";
import OracleLogo from "assets/oracle.png";
import SusquehannaLogo from "assets/susquehanna.png";
import Sponsor from "./Sponsor.jsx";
import { SubTheme } from "components/ThemeComponents.jsx";

const Wrapper = styled.div`
    width: 100%;
    background-color: ${(props) => props.theme.background};
`;

const SponsorTier = styled.section`
    width: 90%;
    margin: auto;
    padding-bottom: 12px;
    &:not(:last-of-type) {
        border-bottom: dashed ${(props) => props.theme.border};
    }
    ${devices.tablet`
      width: 95%;
    `}
`;

const SponsorTierList = styled.div`
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    justify-content: space-evenly;
    ${devices.small`
      // Uses % widths to scale the images in addition to the basis
      flex-direction: column; 
    `}
`;

const TierHeaderTag = styled.h2.attrs((props) => ({
    tier: props.tier,
}))`
    color: ${(props) => props.theme.heading};
    text-align: center;
    font-size: ${(props) => {
        switch (props.tier) {
            case "1":
                return "3em";
            case "2":
                return "2.5em";
            case "3":
                return "2em";
            case "4":
            default:
                return "1.8em";
        }
    }};
    font-family: "Roboto Condensed";
    font-weight: 700;
    padding-top: 12px;
    ${devices.tablet`
      font-size: ${(props) => {
          switch (props.tier) {
              case "1":
                  return "2.75em";
              case "2":
                  return "2.25em";
              case "3":
                  return "1.75em";
              case "4":
              default:
                  return "1.6em";
          }
      }};
    `}
`;

const TierNames = {
    1: "Platinum Sponsors",
    2: "Gold Sponsors",
    3: "Silver Sponsors",
    4: "Other Sponsors",
};
const TierHeader = ({ tier }) => (
    <TierHeaderTag tier={tier}>{TierNames[tier]}</TierHeaderTag>
);

const Sponsors = () => (
    <SubTheme name={"sponsors"}>
        <Wrapper>
            <SponsorTier>
                <TierHeader tier="1" />
                <SponsorTierList>
                    <Sponsor
                        tier="1"
                        url={CrowdstrikeLogo}
                        name={"Crowdstrike"}
                    />
                    <Sponsor tier="1" url={GraingerLogo} name={"Grainger"} />
                </SponsorTierList>
            </SponsorTier>

            <SponsorTier>
                <TierHeader tier="2" />
                <SponsorTierList>
                    <Sponsor tier="2" url={NitsLogo} name={"Nits Solutions"} />
                </SponsorTierList>
            </SponsorTier>

            <SponsorTier>
                <TierHeader tier="3" />
                <SponsorTierList>
                    <Sponsor tier="3" url={MetaLogo} name={"Meta"} />
                    <Sponsor
                        tier="3"
                        url={CapitalOneLogo}
                        name={"Capital One"}
                    />
                    <Sponsor tier="3" url={OracleLogo} name={"Oracle"} />
                </SponsorTierList>
            </SponsorTier>

            <SponsorTier>
                <TierHeader tier="4" />
                <SponsorTierList>
                    <Sponsor tier="4" url={CitadelLogo} name={"Citadel"} />
                    <Sponsor
                        tier="4"
                        url={SusquehannaLogo}
                        name={"Susquehanna International Group"}
                    />
                </SponsorTierList>
            </SponsorTier>
        </Wrapper>
    </SubTheme>
);

export default Sponsors;
