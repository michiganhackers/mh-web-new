import React from "react";
import "../../utility/fonts.css";
import SubpageOuter from "../SubpageOuter/SubpageOuter.jsx";
import Navbar from "../Navbar.jsx";
import CardContainer from "./CardContainer.jsx";

const Leadership = () => (
    <React.Fragment>
        <Navbar />
        <SubpageOuter header="our leadership" />
        <CardContainer />
    </React.Fragment>
);

export default Leadership;
