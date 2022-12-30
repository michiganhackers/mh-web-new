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
    border: 7px solid white;
    margin: 0 auto;
    ${devices.small`
      height: 150px;
      width: 150px;
  `}
`;

const Card = styled.article`
    background-color: #ed8246;
    width: 300px;
    height: 550px;
    text-align: center;
    padding: 20px 30px 30px;
    box-sizing: border-box;
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
    color: white;
    ${devices.small`
      font-size: 20px;
    font-size: 1.1em;
  `}
`;

const Title = styled.p`
    //color: rgb(241, 93, 36);
    color: white;
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
`;

const DetailGroup = styled.div`
    text-align: left;
    width: 100%;
    margin-bottom: 0.2em;
    &:last-of-type {
        margin-bottom: 0;
    }
`;

const Detail = styled.dt`
    display: inline;
    color: white;
    //color: rgb(241, 93, 36);
    padding: 0;
    margin-bottom: 0;
`;

const DetailDescription = styled.dd`
    display: inline;
    color: white;
    text-align: left;
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
                    <Detail>Grad Year: </Detail>
                    <DetailDescription>{props.gradYear}</DetailDescription>
                </DetailGroup>
                <DetailGroup>
                    <Detail>Interests: </Detail>
                    <DetailDescription>{props.interests}</DetailDescription>
                </DetailGroup>
                <DetailGroup>
                    <Detail>Fun fact: </Detail>
                    <DetailDescription>{props.funFact}</DetailDescription>
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
