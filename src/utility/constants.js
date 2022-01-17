/**
 * Any globally relevant constants (i.e. those that are not private or implementation details) should go here.
 */

export const URLS = Object.freeze({
    MH_BACKEND: process.env.REACT_APP_MH_BACKEND_URL,
    CALENDAR:
        process.env.REACT_APP_CALENDAR_API_URL +
        process.env.REACT_APP_CALENDAR_ID,
    ROSTER:
        process.env.REACT_APP_ROSTER_API_URL + process.env.REACT_APP_ROSTER_ID,
});

export const API_KEYS = Object.freeze({
    ROSTER: process.env.REACT_APP_ROSTER_API_KEY,
    CALENDAR: process.env.REACT_APP_CALENDAR_API_KEY,
});

// a list of application routes and their aliases
//  we may want to one day switch to building the routes in an object so we can put this info there instead
export const ROUTES = Object.freeze({
    "/about": ["/help", "/resources"],
    "/team": ["/leads"],
    "/events": ["/calendar"],
    "/contact": ["/connect"],
    "/faq": ["/info"],
    "/projects": ["/progress"],
});
