import React, { Component } from "react";
import "../../utility/fonts.css";
import "../../index.css";
import { StaticH1 } from "../../utility/ContentStyles.js";
import ReactTable from "react-table";
import "react-table/react-table.css";
import axios from "axios";
import styled from "styled-components";

const TableDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: auto;
`;

class Roster extends Component {
	constructor(props) {
		super(props);
		this.getRoster = this.getRoster.bind(this);
		this.createPerson = this.createPerson.bind(this);
		this.constructRoster = this.constructRoster.bind(this);
		this.state = {
			data: null
		};
	}
	componentDidMount() {
		this.getRoster();
	}
	createPerson(row) {
		return {
			name: row.values[0].effectiveValue.stringValue,
			team: row.values[1].effectiveValue.stringValue
		};
	}
	constructRoster(rowData) {
		let people = [];
		for (let row of rowData) {
			if (row.values[0].length === 0 || !row.values[0].userEnteredValue) break;
			people.push(this.createPerson(row));
		}
		return people;
	}
	getRoster() {
		let ROSTER_ID = process.env.REACT_APP_ROSTER_ID;
		let API_KEY = process.env.REACT_APP_ROSTER_API_KEY;
		let ROSTER_URL = process.env.REACT_APP_ROSTER_API_URL;
		let CELL_RANGES = "Sheet1!A1:B150";
		let REQUEST_URL =
			ROSTER_URL +
			ROSTER_ID +
			"?includeGridData=true&ranges=" +
			CELL_RANGES +
			"&key=" +
			API_KEY;
		let people = [];
		axios
			.get(REQUEST_URL)
			.then(res => {
				people = this.constructRoster(
					res.data.sheets[0].data[0].rowData.slice(1)
				);
				this.setState({
					data: people
				});
			})
			.catch(error => {
				console.log(error);
			});
	}
	render() {
		return !this.state.data ? null : (
			<React.Fragment>
				<StaticH1>Our Core Team</StaticH1>
				<TableDiv>
					<ReactTable
						data={this.state.data}
						columns={[
							{
								Header: "Name",
								accessor: "name"
							},
							{
								Header: "Core Team",
								accessor: "team"
							}
						]}
						defaultPageSize={60}
						style={{
							height: "400px", // This will force the table body to overflow and scroll, since there is not enough room
							width: "500px"
						}}
						className="-striped -highlight"
					/>
				</TableDiv>
			</React.Fragment>
		);
	}
}

export default Roster;
