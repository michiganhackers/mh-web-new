import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../../utility/fonts.css";
import SubpageOuter from "../SubpageOuter/SubpageOuter.jsx";
import devices from '../../utility/MediaQueries.js';
import {StaticP, StaticH1} from "../../utility/ContentStyles.js";
import styled, { css } from 'styled-components';

const specificResponsiveness = (...args) => css`@media all and (min-width: 214px) and (max-width: 600px) {${css(...args)};}`;

const Leadership = styled.img`
  height: 200px;
  display: block;
  border-radius: 200px;
  box-sizing: border-box;
  background-color: #d15c19;;
  border: 7px solid #d15c19;;
  width: 100%;
  ${specificResponsiveness`
    height: 190px;
    display: block;
    border-radius: 200px;
    box-sizing: border-box;
    background-color: #d15c19;
    border: 7px solid #d15c19;
  `}
`;

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 300px;
  height: 525px;
  text-align: center;
  flex: 0 1 24%;
  padding: 50px;
  padding-top: 20px;
  box-sizing: border-box;;
  align-content: center;
  margin-bottom: 5%;
  margin-left: 5px;
  margin-right: 5px;
  font-size: 13px;
  font: comic-sans;
  ${specificResponsiveness`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    width: 290px;
    height: auto;
    text-align: center;
    flex: 0 1 24%;
    box-sizing: border-box;;
    align-content: center;
    margin-bottom: 5%;
    margin-right: 0px;
    font-size: 14px;
  `}
`;

const MemberName = styled.h2`
  font-size: 19px;
  margin-top: 10px;
  font-weight: 500;
  ${specificResponsiveness`
    font-size: 20px;
  `}
`;

const Title = styled.p`
  color:rgb(241,93,36);
  font-size: 14px;
  font-weight: 600;
  ${specificResponsiveness`
    font-size: 15px;
  `}
`;

const DetailsCategoryContainer = styled.div`
  color: black;
  text-align: left;
`;

const DetailsCategory = styled.div`
  color: rgb(241,93,36);
  display: inline;
`;

const DetailsCategoryDescription = styled.div`
  display: inline;
`;

const IconLink = styled.a`
  text-decoration: none !important;
  font-size: 19px !important;
  color: rgb(241,93,36) !important;
  padding: 10px !important;
`;

const Links = styled.div`
  display: inline-block;
  color: rgb(241,93,36);
  ${specificResponsiveness`
    width: 100%;
  `}
`;

class MemberCard extends React.Component {

    nonemptyUrls() {

      let returnValue = [];
      
        if(this.props.instagramUrl !== '') {
            returnValue.push(<IconLink key="insta" href={this.props.instagramUrl}><i className="fa fa-instagram"></i></IconLink>);
        }
        if(this.props.githubUrl !== '') {
            returnValue.push(<IconLink key="git" href={this.props.githubUrl}><i className="fa fa-github"></i></IconLink>);
        }
        if(this.props.linkedinUrl !== '') {
            returnValue.push(<IconLink key="linked" href={this.props.linkedinUrl}><i className="fa fa-linkedin"></i></IconLink>);
        }
        if(this.props.facebookUrl !== '') {
            returnValue.push(<IconLink key="fb" href={this.props.facebookUrl}><i className="fa fa-facebook"></i></IconLink>);
        }
        if(this.props.personalUrl !== '') {
            returnValue.push(<IconLink key="personal" href={this.props.personalUrl}><i className="fa fa-user"></i></IconLink>);
        }

        return returnValue;

    }

    render() {
        return(
            <Card>
                <Leadership src={ this.props.imagePath } alt="leadership" />
                <MemberName>{this.props.name}</MemberName>
                <Title>{this.props.title}</Title>
                <DetailsCategoryContainer>
                   <DetailsCategory>Grad Year: </DetailsCategory>
                   <DetailsCategoryDescription>{this.props.gradYear}</DetailsCategoryDescription>
                </DetailsCategoryContainer>
                <DetailsCategoryContainer>
                   <DetailsCategory>Interests: </DetailsCategory>
                   <DetailsCategoryDescription>{this.props.interests}</DetailsCategoryDescription>
                </DetailsCategoryContainer>
                <DetailsCategoryContainer>
                   <DetailsCategory>Fun fact: </DetailsCategory>
                   <DetailsCategoryDescription>{this.props.funFact}</DetailsCategoryDescription>
                </DetailsCategoryContainer>
                <p>{this.props.bio}</p>
                <Links>
                  { this.nonemptyUrls() }
                </Links>
            </Card>
        );
    }
}

MemberCard.defaultProps = {
 instagramUrl: "",
 githubUrl: "",
 linkedinUrl: "",
 facebookUrl: "",
 personalUrl: ""
}

export default MemberCard;
