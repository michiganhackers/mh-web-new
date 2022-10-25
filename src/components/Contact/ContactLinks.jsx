import React from "react";
import styled from "styled-components";
import devices from '../../utility/MediaQueries.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LinksContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 100%;
    min-width: 20rem;
    ${devices.small`
        justify-content: space-evenly;
    `}
    a {
        color: white;
        font-size: 2rem;
        display: block;
    }
    a:hover {
        color: #eee;
    }
`;

// const SVGContainer = styled.svg.attrs({
//     viewBox: "0 0 16 16",
//     xlmns: "http://www.w3.org/2000/svg",
//     fill: "white"
// })
// `
//     width: 2rem;
//     height: 2rem;
//     ${devices.small`
//         width: 1.5rem;
//         height: 1.5rem;
//         margin: 0 0.5rem;
//     `}
// `;

const ContactLinks = () =>
    <React.Fragment>
        <LinksContainer>
            <a href="https://bit.ly/slackmh" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={["fab", "slack"]}/>
            </a>
            <a href="https://instagram.com/michiganhackers" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={["fab", "instagram"]}/>
            </a>
            <a href="mailto:michiganhackers@umich.edu" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={["far", "envelope"]}/>
            </a>
            <a href="https://github.com/michiganhackers" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
            <a href="https://twitter.com/michiganhackers" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
        </LinksContainer>
    </React.Fragment>
;

export default ContactLinks;