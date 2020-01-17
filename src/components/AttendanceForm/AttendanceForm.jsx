import React from "react";
import styled from "styled-components";
import axios from "axios";
import { StaticP } from "../../utility/ContentStyles.js";

const EmailForm = styled.form`
	text-align: center;
`;
const CodeInputBox = styled.input`
	min-width: 250px;
	size: 30px;
`;
const CodeSubmitButton = styled.input`
	background-color: #f15d24;
	color: white;
	border: none;
	text-decoration: none;
	padding-top: 3px;
	padding-bottom: 3px;
	cursor: pointer;
	min-width: 50px;
	margin-top: 10px;
`;

// North Campus
const NC_LEFT_LONG = -83.718946;
const NC_RIGHT_LONG = -83.708453;
const NC_TOP_LAT = 42.293946;
const NC_BOTTOM_LAT = 42.287679;

// TechArb
const TA_LEFT_LONG = -83.743043;
const TA_RIGHT_LONG = -83.742018;
const TA_TOP_LAT = 42.280322;
const TA_BOTTOM_LAT = 42.279035;

class AttendanceForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			code: "",
			submitted: false,
			uniqname: "",
			location: { lat: null, lng: null },
			is_in_location: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.sendCode = this.sendCode.bind(this);
		this.processLocationSignIn = this.processLocationSignIn.bind(this);
	}

	componentDidMount(props) {
		this.setState({
			userLocation: navigator.geolocation.getCurrentPosition(position => {
				const { latitude, longitude } = position.coords;
				this.setState({
					location: { lat: latitude, lng: longitude }
				});
			})
		});
	}

	processLocationSignIn(e) {
		e.preventDefault();

		let mh_backend = process.env.REACT_APP_MH_BACKEND_URL;

		if (
			this.state.location.lat > NC_BOTTOM_LAT &&
			this.state.location.lat < NC_TOP_LAT &&
			this.state.location.lng > NC_LEFT_LONG &&
			this.state.location.lng < NC_RIGHT_LONG
		) {
			// user is inside north campus fence
			this.setState({
				is_in_location: true
			});
		}

		if (
			this.state.location.lat > TA_BOTTOM_LAT &&
			this.state.location.lat < TA_TOP_LAT &&
			this.state.location.lng > TA_LEFT_LONG &&
			this.state.location.lng < TA_RIGHT_LONG
		) {
			// user is inside TechArb
			this.setState({
				is_in_location: true
			});
		}
		//handle location not working here
		if (!this.state.is_in_location) return;

		let payload = {
			uniqname: this.state.uniqname
		};

		axios({
			method: "post",
			headers: { "content-type": "application/json" },
			url: mh_backend + "/v1/",
			data: JSON.stringify(payload)
		})
			.then(res => {})
			.catch(error => {
				console.log(error);
			});

		this.setState({
			submitted: true
		});
	}

	sendCode(e) {
		e.preventDefault();

		let mh_backend = process.env.REACT_APP_MH_BACKEND_URL;

		let payload = {
			code: this.state.address,
			uniqname: this.state.uniqname
		};
		axios({
			method: "post",
			headers: { "content-type": "application/json" },
			url: mh_backend + "/v1/",
			data: JSON.stringify(payload)
		})
			.then(res => {})
			.catch(error => {
				console.log(error);
			});

		this.setState({
			code: "",
			submitted: true
		});
	}

	handleChange(event) {
		this.setState({ code: event.target.value });
	}

	render() {
		return (
			<EmailForm
				onSubmit={
					this.state.location.lat ? this.processLocationSignIn : this.sendCode
				}
			>
				<StaticP>
					Input the attendance code after signing in using your google account
					or sign in using your location.
				</StaticP>
				{this.state.is_in_location ? (
					<StaticP>You are in the location area</StaticP>
				) : null}
				{this.state.location.lat ? (
					<CodeSubmitButton type="submit" value="Submit your location" />
				) : null}
				{this.state.submitted ? <StaticP>Signed in!</StaticP> : null}
				{this.state.location.lat ? null : (
					<CodeInputBox
						type=""
						value={this.state.code}
						onChange={this.handleChange}
						placeholder="Enter Code..."
					/>
				)}
				{this.state.location.lat ? null : (
					<CodeSubmitButton type="submit" value="Submit" />
				)}
			</EmailForm>
		);
	}
}

export default AttendanceForm;
