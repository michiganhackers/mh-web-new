/**
 * Any globally relevant constants (i.e. those that are not private or implementation details) should go here.
 */

export const URLS = Object.freeze({
    MH_BACKEND: process.env.REACT_APP_MH_BACKEND_URL,
    CALENDAR: process.env.REACT_APP_CALENDAR_API_URL + process.env.REACT_APP_CALENDAR_ID,
    ROSTER = process.env.REACT_APP_ROSTER_API_URL + process.env.REACT_APP_ROSTER_ID,
});

export const API_KEYS = Object.freeze({
    ROSTER: process.env.REACT_APP_ROSTER_API_KEY,
    CALENDAR: process.env.REACT_APP_CALENDAR_API_KEY,
});

