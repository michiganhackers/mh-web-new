import React from "react";
import "utility/fonts.css";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const specificResponsiveness = (...args) =>
    css`
        @media all and (min-width: 214px) and (max-width: 600px) {
            ${css(...args)};
        }
    `;

const Leadership = styled.img`
    height: 200px;
    display: block;
    object-fit: cover;
    border-radius: 200px;
    box-sizing: border-box;
    border: 7px solid white;
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

const Card = styled.article`
  background-color: #ED8246;
  //box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    width: 300px;
    height: 525px;
    text-align: center;
    flex: 0 1 24%;
    padding: 50px;
    padding-top: 20px;
    box-sizing: border-box;
    align-content: center;
    margin-bottom: 5%;
    margin-left: 5px;
    margin-right: 5px;
    font-size: 13px;
    ${specificResponsiveness`
    // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
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
  color: white;
    ${specificResponsiveness`
    font-size: 20px;
  `}
`;

const Title = styled.p`
    //color: rgb(241, 93, 36);
  color: white;
    font-size: 14px;
    font-weight: 600;
    ${specificResponsiveness`
    font-size: 15px;
  `}
`;

const DetailsCategoryContainer = styled.dl`
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  
 `;

const DetailsCategory = styled.dt`
  color: white;
   //color: rgb(241, 93, 36);
  padding: 0;
  flex-basis: auto;
  flex-grow: 1;
  margin-bottom:0 ;
 `;

const DetailsCategoryDescription = styled.dd`
   color: white;
  flex-basis: 50%;
  flex-grow: 2;
  text-align: left;
  margin-bottom: 0.4em;
 `;

const IconLink = styled.a`
    color: white;
    //color: rgb(241, 93, 36);
    text-decoration: none;
    font-size: 2em;
    transition: color 0.3s;
    &:hover {
      color: #404040;
    }
`;

const Links = styled.ul`
    display: inline-block;
    //color: rgb(241, 93, 36);
    color: white;
    // remove default list styling
    padding-left: 0;
    ${specificResponsiveness`
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
            <Leadership src={props.imageUrl} alt="leadership" loading="lazy" />
            <MemberName>{props.name}</MemberName>
            <Title>{props.title}</Title>
            <DetailsCategoryContainer>
                <DetailsCategory>Grad Year: </DetailsCategory>
                <DetailsCategoryDescription>
                    {props.gradYear}
                </DetailsCategoryDescription>
                <DetailsCategory>Interests: </DetailsCategory>
                <DetailsCategoryDescription>
                    {props.interests}
                </DetailsCategoryDescription>
                <DetailsCategory>Fun fact: </DetailsCategory>
                <DetailsCategoryDescription>
                    {props.funFact}
                </DetailsCategoryDescription>
            </DetailsCategoryContainer>
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
