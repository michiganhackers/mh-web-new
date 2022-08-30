import React from "react";
import "../../utility/fonts.css";
import "../../index.css";
import styled from "styled-components";
import { StaticH1 } from "../../utility/ContentStyles.js";

import CrowdstrikeLogo from "assets/crowdstrike.png";
import MetaLogo from "assets/meta.png";
import OracleLogo from "assets/oracle.png";
import SusquehannaLogo from "assets/susquehanna.png";

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

const Sponsors = () => (
    <React.Fragment>
        <StaticH1>Our Top Sponsors</StaticH1>
        <HighSponsors>
            <HighLogo src={CrowdstrikeLogo} />
            <HighLogo src={MetaLogo} />
        </HighSponsors>
        <LowSponsors>
          <LowLogo src={OracleLogo} />
          <LowLogo src={SusquehannaLogo} />
        </LowSponsors>
    </React.Fragment>
);

export default Sponsors;
