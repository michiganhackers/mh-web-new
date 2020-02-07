
export default class Url {
    // Takes in base URL
    constructor(baseUrl) {
        this.url = baseUrl;
    }

    // Adds on a path segment (e.g. in localhost:8080/review/5, "review"). Also adds on a leading slash.
    // If you are going to add on multiple path segments, then call path() for each of them separately,
    // e.g. new Url(BASE_URL).path('professor').path('name') for "host.com/professor/name"
    path(name) {
        this.url += ('/' + encodeURIComponent(name));
        return this;
    }

    // Adds on a path parameter (e.g. in localhost:8080/review/5, "5"). Also adds on a leading slash.
    pathParameter(id) {
        if (typeof(id) !== "string") id = toString(id);
        this.url += '/' + encodeURIComponent(id);
        return this;
    }

    // Add on query parameters. Takes an object as an argument and maps its key-value pairs to a query string.
    queryStrings(object) {
        this.url += "?" + Object.keys(object).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(object[key])).join('&');
        return this;
    }

    str() {
        return this.url;
    }
}
