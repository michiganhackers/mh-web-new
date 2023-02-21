import React from "react";
import styled from "styled-components";
// import { NavLink } from "react-router-dom";
import devices from "../utility/MediaQueries.js";
// import logoUrl from "assets/logo-orange-cropped.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { SOCIAL_MEDIA_LINKS } from "utility/constants.js";
import ContactLinks from "./Contact/ContactLinks";

const FooterOuter = styled.div`
    background-color: rgba(238, 95, 48, 1);
    padding: 3rem;
    ${devices.tablet`
        padding: 3rem 1rem;
    `}
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FooterBody = styled.p`
    color: white;
    text-align: center;
    font-weight: 500;
    font-size: 1.2em;
    
    width: min(60%, 600px);
    ${devices.tablet`
        width: min(80%, 600px);
    `}
    ${devices.small`
        width: min(90%, 600px);
    `}
`;

const ConnectWithUsFooter = styled.h1`
    color: white;
    text-align: center;
    font-weight: 700;
`;

const Footer = () => (
    <FooterOuter>
        <FooterBody>
            <ConnectWithUsFooter>
                CONNECT WITH US
            </ConnectWithUsFooter>
            <ContactLinks />
        </FooterBody>
    </FooterOuter>
);

export default Footer;
