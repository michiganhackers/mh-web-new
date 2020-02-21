import React from 'react';
import "../../utility/fonts.css";
import SubpageOuter from "../SubpageOuter/SubpageOuter.jsx";
import Navbar from '../Navbar.jsx';
import CardContainer from './CardContainer.jsx';

const Team = () => (
    <React.Fragment>
        <Navbar />
        <SubpageOuter header="our team" />
        <CardContainer />
    </React.Fragment>
);

export default Team;
