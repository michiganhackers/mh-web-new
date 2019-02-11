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

class Sponsors extends Component {
  render() {
    return (
      <React.Fragment>
          <StaticH1>
            Our Top Sponsors
          </StaticH1>
          <div class="highsponsors">
            <img src={GoogleLogo} /> <img src={C1Logo}/>
          </div> 
          <div class="sponsors">
            <img src={YelpLogo} /> <img src={GraingerLogo}/> <img src={TwitterLogo} />
          </div>
        
          
      </React.Fragment>
    );
  }
}

export default Sponsors;
