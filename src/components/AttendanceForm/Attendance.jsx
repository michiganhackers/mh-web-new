import React, { Component } from "react";
import "../../utility/fonts.css";
import SubpageOuter from "../SubpageOuter/SubpageOuter.jsx";
import { StaticP } from "../../utility/ContentStyles.js";
import Navbar from "../Navbar.jsx";
import AttendanceForm from "./AttendanceForm";
import Login from "../Login.jsx";

class Attendance extends Component {

	constructor(props) {
		super(props);
		this.state = {
			uniqname: null,
			token: null
		};

		this.updateGoogleLoginInfo = this.updateGoogleLoginInfo.bind(this);
		this.getUniqnameToken = this.getUniqnameToken.bind(this);
	}

	updateGoogleLoginInfo(uniqname, token) {
		this.state.uniqname = uniqname;
		this.state.token = token;
	}

	getUniqnameToken() {
		return {uniqname: this.state.uniqname, token: this.state.token};
	}


	render() {
		return (
			<React.Fragment>
				<Navbar />
				<SubpageOuter header="attendance">
					<Login updateFunction={this.updateGoogleLoginInfo}/>
					<AttendanceForm getUniqnameToken={this.getUniqnameToken}/>
				</SubpageOuter>
			</React.Fragment>
		);
	}
}

export default Attendance;
