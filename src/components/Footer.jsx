import React from "react";
import styled from "styled-components";
import devices from "utility/MediaQueries.js";
import { SOCIAL_MEDIA_LINKS } from "utility/constants.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SubTheme } from "./ThemeComponents";

const FooterOuter = styled.footer`
    // Used with min-height: 100vh in #root to make this work
    // See https://stackoverflow.com/a/72624859
    position: sticky;
    top: 100%;

    background-color: ${(props) => props.theme.background};
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${devices.small`
        padding: 3rem 0.5rem;
    `}
`;

const ConnectWithUsText = styled.p`
    color: ${(props) => props.theme.text};
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
    transition: color 0.3s ease;
    color: ${(props) => props.theme.icon};
    font-size: 2rem;
    display: block;
    &:hover {
        color: ${(props) => props.theme.iconHover};
    }
    padding: 0 8px;
`;

const Footer = () => (
    <SubTheme name="footer">
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
    </SubTheme>
);

export default Footer;
