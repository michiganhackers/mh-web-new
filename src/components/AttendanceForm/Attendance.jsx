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
			token: null,
			image_url: null
		};

		this.updateGoogleLoginInfo = this.updateGoogleLoginInfo.bind(this);
		this.getUniqnameToken = this.getUniqnameToken.bind(this);
	}

	updateGoogleLoginInfo(uniqname, token, image_url) {
		this.setState({uniqname: uniqname, token: token, image_url: image_url});
		console.log(this.state);
	}

	getUniqnameToken() {
		return {uniqname: this.state.uniqname, token: this.state.token};
	}


	render() {
		return (
			<React.Fragment>
				<Navbar />
				<SubpageOuter header="attendance">
					{!this.state.uniqname ? <Login style={{"margin-left": "auto", "margin-right": "auto", "display": "block"}} updateFunction={this.updateGoogleLoginInfo}/> : null}
					{this.state.uniqname ? <img style={{"margin-left": "auto", "margin-right": "auto", "display": "block"}} src={this.state.image_url} width="50" height="50"></img> : null}
					<AttendanceForm getUniqnameToken={this.getUniqnameToken}/>
				</SubpageOuter>
			</React.Fragment>
		);
	}
}

export default Attendance;
