import React from "react";
import styled from "styled-components";
import devices from 'utility/MediaQueries.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SOCIAL_MEDIA_LINKS } from "utility/constants.js";

const LinksContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 100%;
    min-width: 20rem;
    margin-bottom: 1rem;
    ${devices.small`
        justify-content: space-evenly;
    `}
`;

export const Link = styled.a`
    color: white;
    font-size: 2rem;
    display: block;
    &:hover {
        color: #eee;
    }
`;
    
const ContactLinks = ({ LinkComponent = Link }) =>
    <LinksContainer>
        <LinkComponent href={SOCIAL_MEDIA_LINKS.slack} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={["fab", "slack"]}/>
        </LinkComponent>
        <LinkComponent href={SOCIAL_MEDIA_LINKS.instagram} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={["fab", "instagram"]}/>
        </LinkComponent>
        <LinkComponent href={SOCIAL_MEDIA_LINKS.email} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={["far", "envelope"]}/>
        </LinkComponent>
        <LinkComponent href={SOCIAL_MEDIA_LINKS.github} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={["fab", "github"]} />
        </LinkComponent>
        <LinkComponent href={SOCIAL_MEDIA_LINKS.twitter} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={["fab", "twitter"]} />
        </LinkComponent>
    </LinksContainer>
;

export default ContactLinks;