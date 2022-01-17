import React from "react";
import Calendar from "./Calendar.jsx";

const CalendarStyle = {
    color: "#F15D24",
    textColor: "white",
};

const CalendarWrapper = () => (
    <React.Fragment>
        <Calendar calendarStyle={CalendarStyle} />
    </React.Fragment>
);

export default CalendarWrapper;
