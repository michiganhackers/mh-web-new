import React, { Component } from "react";
import "../../utility/fonts.css";
import SubpageOuter from "../SubpageOuter/SubpageOuter.jsx";
import Calendar from "./Calendar.jsx";
import Navbar from "../Navbar.jsx";

const CalendarStyle = {
	color: "#F15D24",
	textColor: "white"
};

class Events extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<SubpageOuter header="calendar">
					<Calendar calendarStyle={CalendarStyle} />
					<a href="https://calendar.google.com/calendar?cid=OG44dTU4c3NyaWMxaG1tODRqdmt2bDlkNjhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ">
						Export/add our calendar!
					</a>
					<a
						style={{ float: "right" }}
						href="https://calendar.google.com/calendar/selfsched?sstoken=UVA3dk1tZkxNOFpCfGRlZmF1bHR8ODMwMzEwNjE4YzY3Y2I0OThlZGIzY2IwMGU1MDUwMGI"
					>
						Office hours signup
					</a>
				</SubpageOuter>
			</React.Fragment>
		);
	}
}

export default Events;
