import { URLS, API_KEYS } from "../../utility/constants";
import { Get } from "../../utility/api";
import Url from "../../utility/url";

export const calendarFetch = () =>
    Get(
        new Url(URLS.CALENDAR).path("events").queryStrings({
            maxResults: 2500,
            singleEvents: true,
            key: API_KEYS.CALENDAR,
        })
    );
