import React from "react";
import "utility/fonts.css";
import SubpageOuter from "components/SubpageOuter/SubpageOuter.jsx";
import Navbar from "components/Navbar.jsx";
import CardContainer from "./CardContainer.jsx";

const Leadership = () => (
    <React.Fragment>
        <Navbar />
        <SubpageOuter header="our leadership" />
        <CardContainer />
    </React.Fragment>
);

export default Leadership;
