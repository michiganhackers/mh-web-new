import React from "react";
import Moment from "react-moment";
import styled from "styled-components";
import axios from "axios";
import { StaticP } from "../../utility/ContentStyles.js";
import {addAttendanceFetch} from "./AttendanceFormFetch";
import {calendarFetch} from "../Calendar/CalendarFetch";

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

const LOCATION_MAPPINGS = {
	"eecs": {lat: 42.293091, lng: -83.714445},
	"cool": {lat: 42.290613, lng: -83.713708},
	"bbb": {lat: 42.292938, lng: -83.716167},
	"techarb": {lat: 42.280180, lng: -83.742521},
};

//this is the distance that the distance formula returns
const MAX_DISTANCE = 0.005;

class AttendanceForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			code: "",
			submitted: false,
			location: { lat: null, lng: null },
			is_in_location: false,
			location_signon_enabled: false,
			location_mapping: "",
			events: []
		};

		this.handleChange = this.handleChange.bind(this);
		this.sendCode = this.sendCode.bind(this);
		this.processLocationSignIn = this.processLocationSignIn.bind(this);
		this.checkInLocation = this.checkInLocation.bind(this);
		this.getLocation = this.getLocation.bind(this);
		this.getCalendarEvents = this.getCalendarEvents.bind(this);
		this.getMeetingLocation = this.getMeetingLocation.bind(this);
	}

	componentDidMount(props) {
		this.getCalendarEvents();
	}

	getLocation() {
		navigator.geolocation.getCurrentPosition(position => {
			console.log(position);
			const { latitude, longitude } = position.coords;
			this.setState({
				location: { lat: latitude, lng: longitude }
			}, this.checkInLocation);
		});
	}

	getMeetingLocation() {
		let reg = new RegExp("[a-z]+");
		for (const event of this.state.events) {
			if (event.hasTime) {
				let start_datetime = new Date(event.start);
				let end_datetime = new Date(event.end);
				let now = new Date();
				if (now >= start_datetime && now <= end_datetime) {
					//get the first item in the location that looks like an acronym
					let acronym = reg.exec(event.location.toLowerCase())[0];
					if (Object.keys(LOCATION_MAPPINGS).find(item => acronym === item)) {
						this.setState({location_mapping: acronym, location_signon_enabled: true})
					}
				}
			} else {
				//in this case, the event.start/end is a date object
				let now = new Date();
				let start_date = new Date(event.start);
				let end_date = new Date(event.end);
				if (now >= start_date && now <= end_date) {
					//get the first item in the location that looks like an acronym
					let acronym = reg.exec(event.location.toLowerCase())[0];
					if (Object.keys(LOCATION_MAPPINGS).find(item => acronym === item)) {
						this.setState({location_mapping: acronym, location_signon_enabled: true})
					}
				}
			}
		}
		this.getLocation();
	}

	checkInLocation() {

		if (!this.state.location_signon_enabled) {
			return;
		}

		let distance_from_meeting = Math.sqrt((LOCATION_MAPPINGS[this.state.location_mapping].lat - this.state.location.lat)**2
			+ (LOCATION_MAPPINGS[this.state.location_mapping].lng - this.state.location.lng)**2);

		console.log(`distance = ${distance_from_meeting}`);
		if (distance_from_meeting <= MAX_DISTANCE) {
			this.setState({is_in_location: true});
		}
	}

	getCalendarEvents() {
		calendarFetch()
			.then(res => {
				let items = res.json.items;
				let events = [];

				for (let item of items) {
					//we only want to include confirmed events, not tentative or canceled ones
					if (item.status === "confirmed") {

						let event = {
							id: item.id,
							title: item.summary,
							url: item.htmlLink,
							description: item.description,
							start: item.start.dateTime || item.start.date,
							end: item.end.dateTime || item.end.date,
							hasTime: item.end.dateTime,
							location: item.location
						};

						events.push(event);
					}
				}
				//check the calendar for the event happening today and update the meeting location
				this.setState({
					events: events,
					error: null,
				}, this.getMeetingLocation)
			})
			.catch(res => {
				this.setState({
					error: res.error
				});
				console.log("Error: events could not be loaded");
			});
	}


	processLocationSignIn(e) {
		e.preventDefault();

		let mh_backend = process.env.REACT_APP_MH_BACKEND_URL;


		//handle location not working here
		if (!this.state.is_in_location) return;

		let uniqnameAndToken = this.props.getUniqnameToken();
		if (!uniqnameAndToken.uniqname) return;
		let payload = {
			code_needed: false,
			uniqname: uniqnameAndToken.uniqname,
			token: uniqnameAndToken.token
		};

		addAttendanceFetch(payload).then(res => {
			this.setState({
				error: null,
				submitted: true,
				code: ""
			})
		}).catch(error => {
				this.setState({error})
			}
		);

		this.setState({
			submitted: true
		});
	}

	sendCode(e) {
		e.preventDefault();

		let mh_backend = process.env.REACT_APP_MH_BACKEND_URL;

		let uniqnameAndToken = this.props.getUniqnameToken();
		let payload = {
			code_needed: true,
			code: this.state.code,
			uniqname: uniqnameAndToken.uniqname,
			token: uniqnameAndToken.token
		};

		addAttendanceFetch(payload).then(res => {
			this.setState({
				error: null,
				submitted: true,
				code: ""
			})
		}).catch(error => {
				this.setState({error})
			}
		);

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
					this.state.is_in_location ? this.processLocationSignIn : this.sendCode
				}
			>
				<StaticP>
					Input the attendance code after signing in using your Google account,
					or sign in using your location.
				</StaticP>
				{!this.state.location_signon_enabled ? <StaticP>Location sign-in is not available</StaticP> : null}
				{this.state.is_in_location ? (
					<StaticP>You are in the location area</StaticP>
				) : this.state.location.lat ? <StaticP>You are not in the location area</StaticP> : null}
				{this.state.is_in_location && !this.state.submitted ? (
					<CodeSubmitButton type="submit" value="Submit your location" />
				) : null}
				{this.state.submitted ? <StaticP>Submitted!</StaticP> : null}
				{this.state.is_in_location || this.state.submitted ? null : (
					<CodeInputBox
						type=""
						value={this.state.code}
						onChange={this.handleChange}
						placeholder="Enter Code..."
					/>
				)}
				{this.state.is_in_location || this.state.submitted ? null : (
					<CodeSubmitButton type="submit" value="Submit" />
				)}
			</EmailForm>
		);
	}
}

export default AttendanceForm;
