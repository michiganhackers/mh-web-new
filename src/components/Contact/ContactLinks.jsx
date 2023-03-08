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

const Link = styled.a`
    color: ${props => props.theme.icon};
    font-size: 2rem;
    display: block;
    &:hover {
        color: ${props => props.theme.iconHover};
    }
`;

const ContactLinks = () =>
    <LinksContainer>
        <Link href={SOCIAL_MEDIA_LINKS.slack} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={["fab", "slack"]}/>
        </Link>
        <Link href={SOCIAL_MEDIA_LINKS.instagram} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={["fab", "instagram"]}/>
        </Link>
        <Link href={SOCIAL_MEDIA_LINKS.email} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={["far", "envelope"]}/>
        </Link>
        <Link href={SOCIAL_MEDIA_LINKS.github} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={["fab", "github"]} />
        </Link>
        <Link href={SOCIAL_MEDIA_LINKS.twitter} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={["fab", "twitter"]} />
        </Link>
    </LinksContainer>
;

export default ContactLinks;
