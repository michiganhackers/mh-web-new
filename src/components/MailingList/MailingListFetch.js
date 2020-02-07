import Url from '../../utility/url';
import { URLS } from "../../utility/constants";
import { Post, Get } from '../../utility/api';

export const addEmailFetch = payload => Post(new Url(URLS.MH_BACKEND).path("v1").path("email").path("add"), payload);

export const healthFetch = () => Get(new Url(URLS.MH_BACKEND).path("v1").path("email").path("health"));
