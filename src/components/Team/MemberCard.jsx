import React from 'react';
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
        returnValue.push(<a key="insta"className="iconLink" href={this.props.instagramUrl}><i className="fa fa-instagram"></i></a>);
      }
      if(this.props.githubUrl !== ''){
        returnValue.push(<a key="git" className="iconLink" href={this.props.githubUrl}><i className="fa fa-github"></i></a>);
      }
      if(this.props.linkedinUrl !== '') {
        returnValue.push(<a key="linked" className="iconLink" href={this.props.linkedinUrl}><i className="fa fa-linkedin"></i></a>);
      }
      if(this.props.facebookUrl !== '') {
        returnValue.push(<a key="fb" className="iconLink" href={this.props.facebookUrl}><i className="fa fa-facebook"></i></a>);
      }
      if(this.props.personalUrl !== '') {
        returnValue.push(<a key="personal" className="iconLink" href={this.props.personalUrl}><i className="fa fa-user"></i></a>);
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
                <div className="detailsCategoryContainer">
                   <div className="detailsCategory">Grad Year: </div>
                   <div className="detailsCategoryDescription">{this.props.gradYear}</div>
                </div>
                <div className="detailsCategoryContainer">
                   <div className="detailsCategory">Job: </div>
                   <div className="detailsCategoryDescription">{this.props.job}</div>
                </div>
                <div className="detailsCategoryContainer">
                   <div className="detailsCategory">Interests: </div>
                   <div className="detailsCategoryDescription">{this.props.interests}</div>
                </div>
                <div className="detailsCategoryContainer">
                   <div className="detailsCategory">Fun fact: </div>
                   <div className="detailsCategoryDescription">{this.props.funFact}</div>
                </div>
                <p>{this.props.bio}</p>
                <div className="links">
                  { this.nonemptyUrls() }
                </div>
            </div>
        );
    }

}

export default MemberCard;
