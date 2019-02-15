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

const Logo = styled.img`
  align: middle;
`

class Sponsors extends Component {
  render() {
    return (
      <React.Fragment>
          <StaticH1>
            Our Top Sponsors
          </StaticH1>
          <div class="highsponsors">
            <Logo src={GoogleLogo} /> <Logo src={C1Logo}/>
          </div> 
          <div class="sponsors">
            <Logo src={YelpLogo} /> <Logo src={GraingerLogo}/> <Logo src={TwitterLogo} />
          </div>
        
          
      </React.Fragment>
    );
  }
}

export default Sponsors;
