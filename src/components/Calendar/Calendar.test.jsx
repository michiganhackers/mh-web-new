import axios from "axios";

it("can talk to Google calendar", () => {
    let CALENDAR_ID = process.env.REACT_APP_CALENDAR_ID;
    let API_KEY = process.env.REACT_APP_CALENDAR_API_KEY;
    let CALENDAR_URL = process.env.REACT_APP_CALENDAR_API_URL;

    return expect(axios.get(
            CALENDAR_URL +
                CALENDAR_ID +
                "/events?maxResults=2500&singleEvents=true&key=" +
                API_KEY
        )).resolves.not.toThrow();
});
