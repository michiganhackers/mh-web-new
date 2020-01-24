import React, { Component } from "react";
import "../../utility/fonts.css";
import SubpageOuter from "../SubpageOuter/SubpageOuter.jsx";
import { StaticP } from "../../utility/ContentStyles.js";
import Navbar from "../Navbar.jsx";
import AttendanceForm from "./AttendanceForm";
class Attendance extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<SubpageOuter header="attendance">
					<AttendanceForm />
				</SubpageOuter>
			</React.Fragment>
		);
	}
}

export default Attendance;
