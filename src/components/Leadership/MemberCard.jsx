import React from "react";
import "utility/fonts.css";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import devices from "utility/MediaQueries.js";

const Leadership = styled.img`
  height: 200px;
  width: 200px;
  display: block;
  object-fit: cover;
  border-radius: 100%;
  box-sizing: border-box;
  border: 7px solid ${(props) => props.theme.border};
  margin: 0 auto;
  ${devices.small`
      height: 150px;
      width: 150px;
  `}
`;

const Card = styled.article`
  background-color: ${(props) => props.theme.background};
  width: 300px;
  height: 550px;
  text-align: center;
  padding: 20px 30px 30px;
  box-sizing: border-box;
  border-radius: 10px;
  align-content: center;
  margin-bottom: 5%;
  margin-left: 5px;
  margin-right: 5px;
  font-size: 1em;
  ${devices.small`
      font-size: 1em;
      height: 475px;
  `}
`;

const MemberName = styled.h2`
  font-size: 1.2em;
  margin-top: 10px;
  font-weight: 500;
  color: ${(props) => props.theme.text};
  ${devices.small`
      font-size: 20px;
    font-size: 1.1em;
  `}
`;

const Title = styled.p`
  color: ${(props) => props.theme.text};
  font-weight: 600;
  font-size: 1.1em;
  ${devices.small`
      font-size: 1em;
    `}
`;

const Details = styled.dl`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${(props) => props.theme.text};
`;

const DetailGroup = styled.div`
  text-align: left;
  width: 100%;
  margin-bottom: 0.2em;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const IconLink = styled.a`
  color: ${(props) => props.theme.icon};
  text-decoration: none;
  font-size: 2em;
  transition: color 0.3s;
  &:hover {
    color: ${(props) => props.theme.linkHover};
  }
`;

const Links = styled.ul`
  display: inline-block;
  color: ${(props) => props.theme.link};
  // remove default list styling
  padding-left: 0;
  ${devices.small`
      width: 100%;
    `}
`;

const LinkItem = styled.li`
  padding: 10px;
  display: inline;
`;

const MemberCard = (props) => {
  const personalUrls = () => {
    const urls = [];
    if (props.instagramUrl) {
      urls.push(
        <LinkItem key="insta">
          <IconLink href={props.instagramUrl}>
            <FontAwesomeIcon icon={["fab", "instagram"]} />
          </IconLink>
        </LinkItem>
      );
    }
    if (props.githubUrl) {
      urls.push(
        <LinkItem key="git">
          <IconLink href={props.githubUrl}>
            <FontAwesomeIcon icon={["fab", "github"]} />
          </IconLink>
        </LinkItem>
      );
    }
    if (props.linkedinUrl) {
      urls.push(
        <LinkItem key="linked">
          <IconLink href={props.linkedinUrl}>
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </IconLink>
        </LinkItem>
      );
    }
    if (props.facebookUrl) {
      urls.push(
        <LinkItem key="fb">
          <IconLink href={props.facebookUrl}>
            <FontAwesomeIcon icon={["fab", "facebook"]} />
          </IconLink>
        </LinkItem>
      );
    }
    if (props.personalUrl) {
      urls.push(
        <LinkItem key="personal">
          <IconLink href={props.personalUrl}>
            <FontAwesomeIcon icon={["far", "user"]} />
          </IconLink>
        </LinkItem>
      );
    }

    return urls;
  };

  return (
    <Card>
      <Leadership src={props.imageUrl} alt="lead photo" loading="lazy" />
      <MemberName>{props.name}</MemberName>
      <Title>{props.title}</Title>
      <Details>
        <DetailGroup>
          <b>Grad Year: </b>
          {props.gradYear}
        </DetailGroup>
        <DetailGroup>
          <b>Interests: </b>
          {props.interests}
        </DetailGroup>
        <DetailGroup>
          <b>Fun fact: </b>
          {props.funFact}
        </DetailGroup>
      </Details>
      <Links>{personalUrls()}</Links>
    </Card>
  );
};

MemberCard.defaultProps = {
  instagramUrl: "",
  githubUrl: "",
  linkedinUrl: "",
  facebookUrl: "",
  personalUrl: "",
};

MemberCard.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  gradYear: PropTypes.string,
  interests: PropTypes.string,
  funFact: PropTypes.string,
  bio: PropTypes.string,

  instagramUrl: PropTypes.string,
  githubUrl: PropTypes.string,
  linkedinUrl: PropTypes.string,
  facebookUrl: PropTypes.string,
  personalUrl: PropTypes.string,
};

export default MemberCard;
