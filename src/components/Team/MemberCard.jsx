import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../../utility/fonts.css";
import styled from 'styled-components';
import SubpageOuter from "../SubpageOuter/SubpageOuter.jsx";
import devices from '../../utility/MediaQueries.js';
import {StaticP, StaticH1} from "../../utility/ContentStyles.js";
import './Card.css';
import ben from '../../assets/memberPhotos/Ben.JPG';

var cardStyle = {
    width:'100%'
};

class Card extends React.Component {
    constructor(props){
        super(props);

    
    }
    render(){
        return(
            <div class="card">
                <img src={ben} alt="Ben" style={cardStyle}></img>
                <h2>{this.props.name}</h2>
                 <p class="title">{this.props.title}</p>
                <p>{this.props.bio}</p>
            </div>
        );
    }
}

export default Card;