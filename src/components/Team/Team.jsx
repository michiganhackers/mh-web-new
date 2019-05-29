import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../../utility/fonts.css";
import styled from 'styled-components';
import SubpageOuter from "../SubpageOuter/SubpageOuter.jsx";
import devices from '../../utility/MediaQueries.js';
import {StaticP, StaticH1} from "../../utility/ContentStyles.js";
import Navbar from '../Navbar.jsx';
import MemberCard from './MemberCard.jsx';

class Team extends React.Component {
    constructor(props){
        super(props);
    
    }

    render(){
        return(
        <React.Fragment>
        <Navbar />
        <SubpageOuter header="our team">
          <StaticH1>
            Executive Team
          </StaticH1>
          <StaticP>
          <MemberCard name="Benjamin Carney" title="President" bio="I am Ben." />
          <MemberCard name="Alex Dortzbach" title="Vice President of Internal" bio="I am Alex." />
          <MemberCard name="Erich Shan" title="Vice President of External" bio="I am Erich." />
          <MemberCard name="Phoebe Liang" title="Logistics" bio="I am Phoebe." />
          <MemberCard name="Casper Hsu" title="Innovation" bio="I am Casper." />
          </StaticP>
          <StaticH1>
            Senior Advisors
          </StaticH1>
          <StaticP>
          <MemberCard name="Connor Sverck" title="President" bio="I am Ben." />
          <MemberCard name="Janet Vu" title="Vice President of Internal" bio="I am Alex." />
          <MemberCard name="Erich Shan" title="Vice President of External" bio="I am Erich." />
          </StaticP>
          <StaticH1>
            Core Leadership
          </StaticH1>
          <StaticP>
          Cards
          </StaticP>
        </SubpageOuter>
        </React.Fragment>

        )
    }
}

export default Team;