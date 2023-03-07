import React from "react";
import styled from "styled-components";
import devices from "utility/MediaQueries.js";
import {SOCIAL_MEDIA_LINKS} from "utility/constants";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const FooterOuter = styled.div`
    background-color: #f15d24;
    padding: 3rem;
    ${devices.tablet`
        padding: 3rem 1rem;
    `}
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FooterBody = styled.p`
    width: min(60%, 600px);
    ${devices.tablet`
        width: min(80%, 600px);
    `}
    ${devices.small`
        width: min(90%, 600px);
    `}
`;

const ConnectWithUsText = styled.p`
    color: white;
    text-align: center;
    font-weight: 700;
    font-size: 2rem;
`;

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

const FooterLink = styled.a`
    color: white;
    font-size: 2rem;
    display: block;
    &:hover {
        color: #eee;
    }
`;

const Footer = () => (
    <FooterOuter>
        <FooterBody>
            <ConnectWithUsText>
                CONNECT WITH US
            </ConnectWithUsText>
            <LinksContainer>
                <FooterLink href={SOCIAL_MEDIA_LINKS.slack} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={["fab", "slack"]}/>
                </FooterLink>
                <FooterLink href={SOCIAL_MEDIA_LINKS.instagram} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={["fab", "instagram"]}/>
                </FooterLink>
                <FooterLink href={SOCIAL_MEDIA_LINKS.email} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={["far", "envelope"]}/>
                </FooterLink>
                <FooterLink href={SOCIAL_MEDIA_LINKS.github} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={["fab", "github"]} />
                </FooterLink>
                <FooterLink href={SOCIAL_MEDIA_LINKS.twitter} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={["fab", "twitter"]} />
                </FooterLink>
            </LinksContainer>
        </FooterBody>
    </FooterOuter>
);

export default Footer;
