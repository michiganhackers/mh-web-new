import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../../utility/fonts.css";
import styled from 'styled-components';
import SubpageOuter from "../SubpageOuter/SubpageOuter.jsx";
import devices from '../../utility/MediaQueries.js';
import {StaticP, StaticH1} from "../../utility/ContentStyles.js";
import Navbar from '../Navbar.jsx';
import MemberCard from './MemberCard.jsx';
import CardContainer from './CardContainer.jsx';

class Team extends React.Component {
    constructor(props){
        super(props);
    
    }

    render(){
        return(
        <React.Fragment>
        <Navbar />
        <SubpageOuter header="our team">
          <CardContainer />
        </SubpageOuter>
        </React.Fragment>

        );
    }
}

export default Team;