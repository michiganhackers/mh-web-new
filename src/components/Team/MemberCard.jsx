import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../../utility/fonts.css";
import styled from 'styled-components';
import SubpageOuter from "../SubpageOuter/SubpageOuter.jsx";
import devices from '../../utility/MediaQueries.js';
import {StaticP, StaticH1} from "../../utility/ContentStyles.js";
import './MemberCard.css';



var cardStyle = {
    width: '100%'
};

class MemberCard extends React.Component {

    constructor(props){
        super(props);
        console.log(this.props.imagePath);
        this.state = {
          imagePath: this.props.imagePath,
        }
    }


    render(){
      console.log(this.props.imagePath);
        return(
            <div className="card">
                <img src={ this.props.imagePath } alt="leadership" style={cardStyle} className="border"></img>
                <h2>{this.props.name}</h2>
                 <p className="title">{this.props.title}</p>
                <p>{this.props.bio}</p>
                <div className="links">
                    <a href={this.props.githubUrl}><i className="fa fa-github"></i></a>
                    <a href={this.props.instagramUrl}><i className="fa fa-instagram"></i></a>
                    <a href={this.props.linkedinUrl}><i className="fa fa-linkedin"></i></a>
                    <a href={this.props.facebookUrl}><i className="fa fa-facebook"></i></a>
                    <a href={this.props.personalUrl}><i className="fa fa-user"></i></a>
                </div>
            </div>
        );
    }

}

export default MemberCard;
