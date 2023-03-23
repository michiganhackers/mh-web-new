import React from "react";
import "../../utility/fonts.css";
import SubpageOuter from "../SubpageOuter/SubpageOuter.jsx";
import Calendar from "./Calendar.jsx";
import Navbar from "../Navbar.jsx";
import Footer from "components/Footer.jsx";
import styled from "styled-components";

const CalendarStyle = {
    color: "#F15D24",
    textColor: "white",
};

const ExportLink = styled.a`
    padding-bottom: 24px;
    display: inline-block;
`;

const Events = () => (
    <React.Fragment>
        <Navbar />
        <SubpageOuter header="calendar">
            <Calendar calendarStyle={CalendarStyle} />
            <ExportLink href="https://calendar.google.com/calendar?cid=OG44dTU4c3NyaWMxaG1tODRqdmt2bDlkNjhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ">
                Export/add our calendar!
            </ExportLink>
        </SubpageOuter>
        <Footer />
    </React.Fragment>
);

export default Events;
