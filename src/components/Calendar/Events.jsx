import React from "react";
import "utility/fonts.css";
import SubpageOuter from "components/SubpageOuter/SubpageOuter.jsx";
import Calendar from "./Calendar.jsx";
import Navbar from "components/Navbar.jsx";
import { SubTheme } from "components/ThemeComponents.jsx";

const CalendarStyle = {
    color: "#F15D24",
    textColor: "white",
};

const Events = () => (
    <React.Fragment>
        <Navbar />
        <SubTheme name="events">
            <SubpageOuter header="calendar">
                <SubTheme name="calendar">
                    <Calendar calendarStyle={CalendarStyle} />
                </SubTheme>
                <a href="https://calendar.google.com/calendar?cid=OG44dTU4c3NyaWMxaG1tODRqdmt2bDlkNjhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ">
                    Export/add our calendar!
                </a>
            </SubpageOuter>
        </SubTheme>
    </React.Fragment>
);

export default Events;
