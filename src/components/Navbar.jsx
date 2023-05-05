import React, { useContext, useEffect } from "react";
import styled, { useTheme } from "styled-components";
import { NavLink } from "react-router-dom";
import devices from "../utility/MediaQueries.js";
import logoUrl from "assets/logo-orange-cropped.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SOCIAL_MEDIA_LINKS } from "utility/constants.js";
import { SubTheme, ThemeNameContext } from "components/ThemeComponents.jsx";

const FlexWrapper = styled.div`
    height: 80px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    display: flex;
    ${devices.tablet`
        height: unset;
        display: grid;
        box-shadow: unset;
        position: static;
        
        transition: border-bottom-color 1.3s ease-in-out;
        border-bottom: dashed transparent 2px;
        :has(~div > #hamburger:checked) {
            border-bottom: dashed ${(props) => props.theme.border} 2px;
            transition: border-bottom-color 0.7s ease-in-out;
        }
        
        // rotate the menu icon on open and close
        label > svg {
            transition: transform 1.2s ease-out;
        }
        #hamburger:checked ~ & > label > svg {
            transform: rotate(90deg);
            transition: transform 0.6s ease-out;
        }
    `}
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-content: space-between;
    background: ${(props) => props.theme.background};
    box-shadow: 0 2px 4px rgb(0, 0, 0, 0.5);
`;

const HeaderAnchor = styled.header`
    position: sticky;
    // we don't want this to take any space on the page
    // It serves as an anchor for the rest of the header
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
`;

const Hamburger = styled.label`
    font-size: 24px;
    color: ${(props) => props.theme.link};
    display: none;
    flex: auto;
    grid-column: 3 / 4;
    text-align: right;
    margin: auto 10px auto 0;
    align-self: flex-end;
    transition: color 0.3s;

    span {
        margin-right: 8px;
    }

    &:hover {
        color: ${(props) => props.theme.linkHover};
        cursor: pointer;
    }

    ${devices.tablet`
        display: flex;
        align-items: center;
        justify-content: flex-end;
    `}
    ${devices.small`
        font-size: 28px;
    `}
    ${devices.tiny`
        font-size: 24px;
    `}
`;

const Logo = styled.div`
    height: 48px;
    width: 38px;
    flex: 0 0 auto;
    display: block;
    mask-size: auto 48px;
    mask-image: url(${logoUrl});
`;

const MobileNavBlock = styled.div`
    position: absolute;
    width: 100%;
    z-index: -9;
    // If they were enabled on this block, we would not be able
    //  to interact with elements under it since it would absorb clicks
    pointer-events: none;
`;

const MobileNavContainer = styled.nav`
    display: none;
    justify-content: flex-end;
    align-items: flex-end;
    position: sticky;
    pointer-events: auto;
    ${devices.tablet`
        display: flex;
        flex-direction: column;
        
        background: ${(props) => props.theme.background};
        box-shadow: 0 2px 4px rgb(0, 0, 0, 0.5);
        position: sticky;
        // works because already is on top of everything thanks to sticky
        z-index: -1;
        // default state is retracted. This does mean when we resize, it has to slide up.
        //  Not sure what the best way to resolve without js is
        transition: transform 1.2s ease-in-out;
        transform: translateY(-100%);
        
        #hamburger:checked ~ & {
            transform: translateY(0%);
            transition: transform 0.6s ease-in-out, border-top 0.7s ease-in-out;
        }
    `}
`;

const DesktopNavContainer = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    grid-column: 1 / 4;
    flex: auto;
    ${devices.tablet`
        display:none;
    `}
`;

const HeaderNavLink = styled(NavLink)`
    font-size: 20px;
    padding: 2px 10px;
    ${devices.tablet`
        font-size: 24px;
    `}
    ${devices.small`
        font-size: 28px;
        padding: 2px 6px;
    `}
    ${devices.tiny`
        font-size: 24px;
        padding: 2px 4px;
    `}
    color: ${(props) => props.theme.link};
    text-decoration: none;
    text-transform: capitalize;
    transition: all 0.3s;

    &:hover {
        text-decoration: underline;
        color: ${(props) => props.theme.linkHover};
    }

    // styles for the current active navlink
    &.active {
        text-decoration: none;
        font-weight: bold;
        color: ${(props) => props.theme.linkActive};
        cursor: default;
    }
`;

const LogoNavLink = styled(NavLink)`
    display: flex;
    justify-content: left;
    font-size: 22px;
    padding: 2px 20px;
    color: ${(props) => props.theme.link};

    // contains the masked logo
    div {
        background-color: ${(props) => props.theme.logo};
        transition: color 0.3s, background-color 0.3s;
    }
    align-items: center;

    &:hover {
        text-decoration: none;
        color: ${(props) => props.theme.linkHover};
        div {
            background-color: ${(props) => props.theme.logoHover};
        }
    }

    ${devices.tablet`
        padding: 12px 0 12px 20px;
    `}
    ${devices.small`
        padding: 12px 0 12px 12px;
    `}

    transition: color 0.3s, background-color 0.3s;
    grid-column: 1/3;

    // Contains the Michigan Hackers text
    span {
        padding-left: 16px;
        line-height: 1;
        ${devices.tablet`
            padding-left: 12px;
        `}
        ${devices.small`
            padding-left: 8px;
        `}
    }
`;

const ThemeCycleButton = styled.button`
    font-size: 24px;
    order: 1;

    ${devices.tablet`
        display: none;
    `}
    &:hover {
        color: ${(props) => props.theme.linkHover};
    }

    transition: color 0.3s;
    color: ${(props) => props.theme.link};
    background: unset;
    border: unset;
    padding: 8px 0;
    width: 64px;
    flex: 0 0 auto;
    text-align: center;
`;

const links = ["about", "leadership", "teams", "events", "contact", "faq"].map(
    (name) => (
        <HeaderNavLink to={`/${name}`} key={name}>
            {name !== "faq" ? name : "FAQ"}
        </HeaderNavLink>
    )
);

function Navbar() {
    const { setTheme, themeNames, theme } = useContext(ThemeNameContext);
    const themeData = useTheme();
    useEffect(() => {
        return ;
    }, [theme]);
    const handleThemeCycle = () => {
        setTheme(
            themeNames[(themeNames.indexOf(theme) + 1) % themeNames.length]
        );
    };
    return (
        <SubTheme name="navbar">
            <HeaderAnchor>
                <FlexWrapper>
                    <LogoNavLink to="/">
                        <Logo />
                        <span>Michigan Hackers</span>
                    </LogoNavLink>
                    <DesktopNavContainer>{links}</DesktopNavContainer>
                    <ThemeCycleButton onClick={handleThemeCycle}>
                        <FontAwesomeIcon icon={["fa", themeData.nameIcon]} />
                    </ThemeCycleButton>
                    <Hamburger htmlFor="hamburger">
                        <span>Menu</span>
                        <FontAwesomeIcon icon="bars" />
                    </Hamburger>
                </FlexWrapper>
                {/*fix tab indexing*/}
                <MobileNavBlock>
                    <input
                        type="checkbox"
                        id="hamburger"
                        style={{ display: "none" }}
                    />
                    <MobileNavContainer>{links}</MobileNavContainer>
                </MobileNavBlock>
            </HeaderAnchor>
        </SubTheme>
    );
}

export default Navbar;
