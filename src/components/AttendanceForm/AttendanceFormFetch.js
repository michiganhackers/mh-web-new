import Url from '../../utility/url';
import { URLS } from "../../utility/constants";
import { Post, Get } from '../../utility/api';

//TODO: add the new endpoint for the backend
export const addAttendanceFetch = payload => Post(new Url(URLS.MH_BACKEND).path("v1").path("").path(""), payload);
