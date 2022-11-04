import React from "react";
import styled from "styled-components";
import devices from 'utility/MediaQueries.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    color: white;
    font-size: 2rem;
    display: block;
    &:hover {
        color: #eee;
    }
`;

const ContactLinks = () =>
    <LinksContainer>
        <Link href="https://bit.ly/slackmh" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={["fab", "slack"]}/>
        </Link>
        <Link href="https://instagram.com/michiganhackers" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={["fab", "instagram"]}/>
        </Link>
        <Link href="mailto:michiganhackers@umich.edu" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={["far", "envelope"]}/>
        </Link>
        <Link href="https://github.com/michiganhackers" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={["fab", "github"]} />
        </Link>
        <Link href="https://twitter.com/michiganhackers" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={["fab", "twitter"]} />
        </Link>
    </LinksContainer>
;

export default ContactLinks;