import React from 'react';
import "../../utility/fonts.css";
import SubpageOuter from "../SubpageOuter/SubpageOuter.jsx";
import Navbar from '../Navbar.jsx';
import { CopyP } from "../../utility/ContentStyles";
import { ROUTES } from "../../utility/constants";
import { OSADistance } from "../../utility/EditDistance";
import {
    Link,
    useLocation
} from "react-router-dom";
import styled from "styled-components";

const MessageContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;


const PageNotFound = () => {
    const location = useLocation();
    // we leave the / in because everything has it
    const notFoundRoute = location.pathname;
    const closestMatch = Object.keys(ROUTES).reduce((bestMatch, route) => {
        // use both the canonical name and aliases
        const routes = [ route, ...ROUTES[route] ];
        for (const alias of routes) {
            const editDistance = OSADistance(notFoundRoute, alias);
            //only go with similarity if the items are pretty similar
            if (editDistance < bestMatch[1] && editDistance <= Math.ceil(route.length / 2)) {
                bestMatch = [ route, editDistance ];
            }
        }
        return bestMatch;
    }, [ "", Number.MAX_SAFE_INTEGER ]);
    return (
        <>
            <Navbar/>
            <SubpageOuter header="404 Error"/>
            <MessageContainer>
                <CopyP>
                    Page <code>{location.pathname}</code> not found.
                </CopyP>
                {
                    closestMatch[0] ? <CopyP>
                        Perhaps you were looking for <Link to={closestMatch[0]}>{closestMatch[0]}</Link>?
                    </CopyP> : null
                }
            </MessageContainer>
        </>
    );
};

export default PageNotFound;
