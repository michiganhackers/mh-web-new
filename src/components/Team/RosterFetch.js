import { URLS, API_KEYS } from "../../utility/constants";
import { Get } from "../../utility/api";
import Url from "../../utility/url";

const CELL_RANGES = "Sheet1!A1:B150";

export const rosterFetch = () =>
    Get(
        new Url(URLS.ROSTER).queryStrings({
            includeGridData: true,
            ranges: CELL_RANGES,
            key: API_KEYS.ROSTER,
        })
    );
