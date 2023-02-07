import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import devices from "../utility/MediaQueries.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SOCIAL_MEDIA_LINKS } from "utility/constants.js";

const FlexWrapper = styled.div`
    height: 80px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    display: flex;
    ${devices.tablet`
        justify-content: flex-end;
        position: static;
        
        // rotate the menu icon on open and close
        label > svg {
          transition: transform 1.2s ease-out;
        }
        #hamburger:checked ~ & > label > svg {
          transform: rotate(90deg);
          transition: transform 0.6s ease-out;
        }
    `}
    align-items: center;
    justify-content: space-between;
    background: transparent;
`;

const HeaderAnchor = styled.header`
    position: fixed;
    // we don't want this to take any space on the page
    // It serves as an anchor for the rest of the header
    height: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9;
    ${devices.tablet`
        bottom: 80px;
    `}
`;

const Hamburger = styled.label`
    font-size: 24px;
    color: white;
    display: none;
    text-align: right;
    margin: auto 10px auto 0;
    transition: color 0.3s;
    // needs to be above the mobile nav menu, which is up first so the whole thing is clickable
    z-index: 3;

    span {
        margin-right: 8px;
    }

    &:hover {
        color: #404040;
        cursor: pointer;
    }

    ${devices.tablet`
        display: flex;
        align-items: center;
    `}
    ${devices.small`
        font-size: 28px;
    `}
    ${devices.tiny`
        font-size: 24px;
    `}
`;

const MobileNavContainer = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    ${devices.tablet`
        flex-direction: column;
        position: sticky;
        // works because already is on top of everything thanks to sticky
        // default state is retracted. This does mean when we resize, it has to slide up.
        //  Not sure what the best way to resolve without js is
        transition: transform 1.2s ease-in-out;
        transform: translateY(0%);
        
        #hamburger:checked ~ & {
            transform: translateY(-100%);
            transition: transform 0.6s ease-in-out;
        }
    `}
`;

const DesktopNavContainer = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: 1 / 4;
    flex: auto;
    ${devices.tablet`
        display:none;
    `}
`;

const HeaderNavLink = styled(NavLink)`
    font-size: 24px;
    padding: 2px 10px;
    ${devices.small`
        font-size: 28px;
        padding: 2px 6px 2px 10px
    `}
    ${devices.tiny`
        font-size: 24px;
        padding: 2px 4px 2px 8px
    `}
    color: white;
    text-decoration: none;
    text-transform: capitalize;
    transition: all 0.3s;

    &:hover {
        text-decoration: underline;
        color: #404040;
    }

    // styles for the current active navlink
    &.active {
        text-decoration: none;
        font-weight: bold;
        color: #404040;
        cursor: default;
    }
`;

const SocialNavLink = styled.a`
    font-size: 24px;
    order: 1;

    &:hover {
        color: #404040;
    }

    transition: color 0.3s;
    color: white;
    padding: 8px 20px;
    text-align: center;
    ${devices.tablet`
        &:first-of-type {
            padding-left: 10px;
        }
    `}
`;

const SocialLinkContainer = styled.nav`
    display: flex;
`;

const links = ["about", "leadership", "teams", "events", "contact", "faq"].map(
    (name) => (
        <HeaderNavLink to={`/${name}`} key={name}>
            {name !== "faq" ? name : "FAQ"}
        </HeaderNavLink>
    )
);

/**
 * Map the social media icons to their respective URLs
 * @type {{string: string}} FontAwesome icon name: target URL
 */
const social_mappings = Object.fromEntries(
    ["github", "instagram", "slack", "twitter"].map((key) => [
        key,
        SOCIAL_MEDIA_LINKS[key],
    ])
);
const social_link_group = (
    <SocialLinkContainer key={"social_group"}>
        {Object.entries(social_mappings).map(([name, url]) => (
            <SocialNavLink key={name} target="_blank" href={url}>
                <FontAwesomeIcon icon={["fab", name]} />
            </SocialNavLink>
        ))}
    </SocialLinkContainer>
);

const SpecialNavbar = () => (
    <HeaderAnchor>
        <input type="checkbox" id="hamburger" style={{ display: "none" }} />
        <FlexWrapper>
            <DesktopNavContainer>
                {[...links, social_link_group]}
            </DesktopNavContainer>
            <Hamburger htmlFor="hamburger">
                <span>Menu</span>
                <FontAwesomeIcon icon="bars" />
            </Hamburger>
        </FlexWrapper>
        {/*fix tab indexing*/}

        <MobileNavContainer>{[...links, social_link_group]}</MobileNavContainer>
    </HeaderAnchor>
);

export default SpecialNavbar;
