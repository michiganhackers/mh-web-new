import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import "utility/fonts.css";
import Navbar from "components/Navbar.jsx";
import { NavLink, useLocation } from "react-router-dom";
import CardContainer from "./CardContainer.jsx";
import devices from "utility/MediaQueries.js";
import { SubTheme } from "components/ThemeComponents.jsx";

import leadership from "leadership.json";
import Footer from "components/Footer";

const LeadershipWrapper = styled.main`
    width: 100%;
    background-color: ${(props) => props.theme.background};
`;

const LeadershipGroupImages = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: row;
    ${devices.small`
        display: none;
    `}
`;

const LeadershipGroupImage = styled.img`
    width: 33.3%;
    height: 400px;
    background-color: lightgray;
    object-fit: cover;
    transition: filter 0.3s;
    // has to read the property because not a navlink and will not get a style when active
    ${(props) => props.isActive || "filter: grayscale(100%);"};
`;

const TabNav = styled.nav``;
const TabGroup = styled.ul`
    display: flex;
    padding-left: 0;
    margin-bottom: 0;
    ${devices.small`
        flex-direction: column;
    `}
`;
const Tab = styled(NavLink)`
    padding: 10px 10px;
    flex-basis: 33%;
    flex-grow: 1;
    text-align: center;
    color: ${(props) => props.theme.text};
    font-size: 1.3em;
    transition: background-color 0.3s;
    background: ${(props) => props.theme.background};
    &.active {
        background-color: ${(props) => props.theme.backgroundAlt};
    }
`;

const TabInfo = styled.div`
    background-color: ${(props) => props.theme.backgroundAlt};
    padding: 1.5em 0;
    margin-bottom: 1.5em;
    transition: content 0.3s;
`;

const TabName = styled.h1`
    font-size: 2em;
    text-align: center;
    color: ${props => props.theme.heading};
`;

const TabDescription = styled.p`
    width: 50%;
    margin: auto;
    color: ${props => props.theme.text};
`;

const tabNavigationActions = {
    ArrowLeft: (idx) => idx - 1,
    ArrowRight: (idx) => idx + 1,
    Home: () => 0,
    End: () => -1,
};

const TAB_NAMES = Object.keys(leadership);
const getTab = (tabIndex) => leadership[TAB_NAMES[tabIndex]];

function Leadership() {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);
    const location = useLocation();
    // when the selected tab changes (keyboard, click, or routing with non-empty hash), focus it
    const selectedTabRef = useCallback(
        (node) => location.hash && node?.focus(),
        []
    );

    const getCurrentTab = () => getTab(currentTabIndex);

    // Update the hash first; the next render will update the currentTabIndex
    const handleKeyDown = (event) => {
        if (event.key in tabNavigationActions) {
            window.location.hash = getTab(
                (tabNavigationActions[event.key](currentTabIndex) +
                    TAB_NAMES.length) %
                    TAB_NAMES.length
            ).slug;
            event.preventDefault();
            event.stopPropagation();
        }
    };

    // Set the appropriate tab to be open when the page is reloaded or entered
    useEffect(() => {
        const hashIndex = TAB_NAMES.findIndex(
            (groupName) =>
                leadership[groupName].slug === location.hash.substring(1)
        );
        setCurrentTabIndex(hashIndex !== -1 ? hashIndex : 0);
    }, [location]);

    return (
        <>
            <Navbar />
            <SubTheme name="leadership">
                <LeadershipWrapper>
                    <LeadershipGroupImages>
                        {TAB_NAMES.map((group_name, i) => (
                            <LeadershipGroupImage
                                key={group_name}
                                src={`${process.env.PUBLIC_URL}/${leadership[group_name].imageUrl}`}
                                isActive={currentTabIndex === i}
                                alt={`${group_name} group photo`}
                            />
                        ))}
                    </LeadershipGroupImages>
                    <SubTheme name="tab">
                        <TabNav>
                            <TabGroup role="tablist">
                                {TAB_NAMES.map((group_name, i) => (
                                    <Tab
                                        key={group_name}
                                        id={`tab-${group_name}`}
                                        to={{
                                            hash: `#${leadership[group_name].slug}`,
                                        }}
                                        onKeyDown={handleKeyDown}
                                        isActive={() => currentTabIndex === i}
                                        role="tab"
                                        tabIndex={
                                            currentTabIndex === i ? 0 : -1
                                        }
                                        aria-selected={currentTabIndex === i}
                                        ref={
                                            currentTabIndex === i
                                                ? selectedTabRef
                                                : null
                                        }
                                    >
                                        {group_name}
                                    </Tab>
                                ))}
                            </TabGroup>
                        </TabNav>
                        <TabInfo role="tabpanel">
                            <TabName>{TAB_NAMES[currentTabIndex]}</TabName>
                            <TabDescription>
                                {getCurrentTab().description}
                            </TabDescription>
                        </TabInfo>
                    </SubTheme>
                    <SubTheme name="leads">
                        {TAB_NAMES.map((group_name, i) => (
                            <CardContainer
                                key={group_name}
                                aria-labelledby={`tab-${group_name}`}
                                role="tabpanel"
                                people={leadership[group_name].people}
                                hidden={currentTabIndex !== i}
                            />
                        ))}
                    </SubTheme>
                </LeadershipWrapper>
            </SubTheme>
            <Footer />
        </>
    );
}

export default Leadership;
