import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../../utility/fonts.css";
import "../../index.css"
import styled from 'styled-components';
import SubpageOuter from "../SubpageOuter/SubpageOuter.jsx";
import devices from '../../utility/MediaQueries.js';
import {StaticP, StaticH1} from "../../utility/ContentStyles.js";

import Navbar from '../Navbar.jsx';

import GoogleLogo from '../../assets/google.png'
import C1Logo from '../../assets/c1.png'
import TwitterLogo from '../../assets/twit.png'
import GraingerLogo from '../../assets/grainger.png'
import YelpLogo from '../../assets/yelp.png'
import TargetLogo from '../../assets/target.png'
import SCM from '../../assets/SCM.jpg'

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

class Sponsors extends Component {
  render() {
    return (
      <React.Fragment>
          <StaticH1>
            Our Top Sponsors
          </StaticH1>
          <HighSponsors>
            <HighLogo src={GoogleLogo}/> <HighLogo src={C1Logo}/>
          </HighSponsors> 
          <LowSponsors>
            <LowLogo src={GraingerLogo}/> <LowLogo src={TargetLogo}/> <LowLogo src={SCM}/>
          </LowSponsors>
      </React.Fragment>
    );
  }
}

export default Sponsors;
