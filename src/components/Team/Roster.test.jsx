import axios from "axios";

it("can talk to Google calendar", () => {
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

	return expect(axios.get(REQUEST_URL)).resolves.not.toThrow();
});
