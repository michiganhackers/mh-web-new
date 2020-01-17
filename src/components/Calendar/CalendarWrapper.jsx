import React, { Component } from "react";
import Calendar from "./Calendar.jsx";

const CalendarStyle = {
	color: "#F15D24",
	textColor: "white"
};

class CalendarWrapper extends Component {
	render() {
		return (
			<React.Fragment>
				<Calendar calendarStyle={CalendarStyle} />
			</React.Fragment>
		);
	}
}

export default CalendarWrapper;
