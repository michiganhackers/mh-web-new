import React from "react";
import "utility/fonts.css";
import SubpageOuter from "components/SubpageOuter/SubpageOuter.jsx";
import Navbar from "components/Navbar.jsx";
import { CopyP } from "utility/ContentStyles";
import { ROUTES } from "utility/constants";
import { OSADistance } from "utility/EditDistance";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { SubTheme } from "components/ThemeComponents.jsx";

const MessageContainer = styled.div`
    width: 80%;
    margin: 0 auto;
`;

const InvalidPathname = styled.span`
    color: ${(props) => props.theme.textAlt};
    font-family: monospace;
`;

const PossiblePathname = styled(Link)`
    color: ${(props) => props.theme.link};
`;

const PageNotFound = () => {
    const location = useLocation();
    // we leave the / in because everything has it
    const notFoundRoute = location.pathname;
    const closestMatch = Object.keys(ROUTES).reduce(
        (bestMatch, route) => {
            // use both the canonical name and aliases
            const routes = [route, ...ROUTES[route]];
            for (const alias of routes) {
                const editDistance = OSADistance(notFoundRoute, alias);
                //only go with similarity if the items are pretty similar
                if (
                    editDistance < bestMatch[1] &&
                    editDistance <= Math.ceil(route.length / 2)
                ) {
                    bestMatch = [route, editDistance];
                }
            }
            return bestMatch;
        },
        ["", Number.MAX_SAFE_INTEGER]
    );
    return (
        <>
            <Navbar />
            <SubTheme name="pageNotFound">
                <SubpageOuter header="404 Error" />
                <MessageContainer>
                    <CopyP>
                        Page{" "}
                        <InvalidPathname>{location.pathname}</InvalidPathname>{" "}
                        not found.
                    </CopyP>
                    {closestMatch[0] ? (
                        <CopyP>
                            Perhaps you were looking for{" "}
                            <PossiblePathname to={closestMatch[0]}>
                                {closestMatch[0]}
                            </PossiblePathname>
                            ?
                        </CopyP>
                    ) : null}
                </MessageContainer>
            </SubTheme>
        </>
    );
};

export default PageNotFound;
