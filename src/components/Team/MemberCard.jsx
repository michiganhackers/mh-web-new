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
        this.state = {
          imagePath: this.props.imagePath,
        }
    }

    nonemptyUrls() {

      var returnValue = [];
      
      if(this.props.instagramUrl !== '') {
        returnValue.push(<a className="iconLink" href={this.props.instagramUrl}><i className="fa fa-instagram"></i></a>);
      }
      if(this.props.githubUrl !== ''){
        returnValue.push(<a className="iconLink" href={this.props.githubUrl}><i className="fa fa-github"></i></a>);
      }
      if(this.props.linkedinUrl !== '') {
        returnValue.push(<a className="iconLink" href={this.props.linkedinUrl}><i className="fa fa-linkedin"></i></a>);
      }
      if(this.props.facebookUrl !== '') {
        returnValue.push(<a className="iconLink" href={this.props.facebookUrl}><i className="fa fa-facebook"></i></a>);
      }
      if(this.props.personalUrl !== '') {
        returnValue.push(<a className="iconLink" href={this.props.personalUrl}><i className="fa fa-user"></i></a>);
      }

      return returnValue;

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
                  { this.nonemptyUrls() }
                </div>
            </div>
        );
    }

}

export default MemberCard;
