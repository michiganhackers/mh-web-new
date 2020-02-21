import React from 'react';
import "../../utility/fonts.css";
import "../../index.css";
import styled from 'styled-components';
import { StaticH1 } from "../../utility/ContentStyles.js";

import GoogleLogo from '../../assets/google.png';
import C1Logo from '../../assets/c1.png';
import GraingerLogo from '../../assets/grainger.png';
import TargetLogo from '../../assets/target.png';
import SCM from '../../assets/SCM.jpg';

const HighLogo = styled.img`
  align: middle;
  max-height: 170px; 
  width: auto; 
  padding: 10px; 
  max-width: 100%
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
        <StaticH1>
            Our Top Sponsors
        </StaticH1>
        <HighSponsors>
            <HighLogo src={GoogleLogo} /> <HighLogo src={C1Logo} />
        </HighSponsors>
        <LowSponsors>
            <LowLogo src={GraingerLogo} /> <LowLogo src={TargetLogo} /> <LowLogo src={SCM} />
        </LowSponsors>
    </React.Fragment>
);

export default Sponsors;
