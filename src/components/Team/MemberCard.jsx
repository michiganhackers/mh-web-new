import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../../utility/fonts.css";
import styled from 'styled-components';
import SubpageOuter from "../SubpageOuter/SubpageOuter.jsx";
import devices from '../../utility/MediaQueries.js';
import {StaticP, StaticH1} from "../../utility/ContentStyles.js";
import './MemberCard.css';
import ben from '../../assets/memberPhotos/Ben.JPG';
import beary from '../../assets/memberPhotos/Beary.PNG';


var cardStyle = {
    width: '100%'
};

class MemberCard extends React.Component {
    constructor(props){
        super(props);

    
    }
    render(){
        return(
            <div class="card">
                <img src={beary} alt="Ben" style={cardStyle} class="border"></img>
                <h2>{this.props.name}</h2>
                 <p class="title">{this.props.title}</p>
                <p>{this.props.bio}</p>
                <div className="links">
                    <a href="https://google.com"><i class="fa fa-github"></i></a> 
                    <a href={this.props.instagramurl}><i class="fa fa-instagram"></i></a> 
                    <a href={this.props.linkedinurl}><i class="fa fa-linkedin"></i></a> 
                    <a href={this.props.facebookurl}><i class="fa fa-facebook"></i></a>
                    <a href={this.props.personalurl}><i class="fa fa-user"></i></a>
                </div>
            </div>
        );
    }
}

export default MemberCard;