import React from "react";
import styled from "styled-components";
import devices from "utility/MediaQueries.js";
import { SOCIAL_MEDIA_LINKS } from "utility/constants.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterOuter = styled.div`
    background-color: #f15d24;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${devices.small`
        padding: 3rem 0.5rem;
    `}
`;

const ConnectWithUsText = styled.p`
    color: white;
    font-family: "Roboto Condensed";
    text-align: center;
    font-weight: bold;
    font-size: 2rem;
`;

const LinksContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 50rem;
    width: 80%;
    ${devices.small`
        width: 100%;
    `}
`;

const FooterLink = styled.a`
    color: white;
    font-size: 2rem;
    display: block;
    &:hover {
        color: #eee;
    }
    padding: 0 8px;
`;

const Footer = () => (
    <FooterOuter>
        <ConnectWithUsText>CONNECT WITH US</ConnectWithUsText>
        <LinksContainer>
            <FooterLink
                href={SOCIAL_MEDIA_LINKS.slack}
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={["fab", "slack"]} />
            </FooterLink>
            <FooterLink
                href={SOCIAL_MEDIA_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={["fab", "instagram"]} />
            </FooterLink>
            <FooterLink
                href={SOCIAL_MEDIA_LINKS.email}
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={["far", "envelope"]} />
            </FooterLink>
            <FooterLink
                href={SOCIAL_MEDIA_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={["fab", "github"]} />
            </FooterLink>
            <FooterLink
                href={SOCIAL_MEDIA_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={["fab", "twitter"]} />
            </FooterLink>
        </LinksContainer>
    </FooterOuter>
);

export default Footer;
