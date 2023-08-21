/**
 * Question: why does this file exist?
 * Answer: The fetch API, while great, has limitations. In particular, it does not throw a rejected promise when
 * a non 200 response is received and does not automatically unmarshal JSON. This wrapper solves those problems and
 * provides a uniform API, returning an object of the form { json, error, response } in all cases, whether the promise
 * was rejected or not. In some cases, we still want access to the json even if the response is not 200.
 *
 * This gives you the original response as well, in case you want that.
 *
 * This wrapper is also designed to interface nicely with the URL API implemented in url.js.
 *
 * This wrapper will *not* work as intended for response types that are not JSON or empty.
 */

const REQUEST_VERBS = Object.freeze({
  GET: "GET",
  PUT: "PUT",
  POST: "POST",
  DELETE: "DELETE",
});

const NOT_JSON_AND_OK = "NOT_JSON_AND_OK";
const NOT_JSON_AND_NOT_OK = "NOT_JSON_AND_NOT_OK";
const JSON_AND_NOT_OK = "JSON_AND_NOT_OK";

function makeResponseData(response, json, error) {
  return {
    response,
    json,
    error,
  };
}

function getHeaders() {
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
}

// Helper function, wraps around fetch
function fetcher(url, options) {
  // Make the request
  let goodJSON = true;
  let savedResponse = null;
  return fetch(url, options)
    .then((response) => {
      savedResponse = response;
      const contentType = response.headers.get("content-type");
      // If the request was good, then attempt to unmarshal
      if (response.ok) {
        if (contentType && contentType.includes("application/json")) {
          return response.json();
        } else {
          return null;
        }
      } else {
        if (contentType && contentType.includes("application/json")) {
          goodJSON = false;
          return response.json();
        } else {
          return Promise.reject({
            response,
            status: response.status,
            reason: NOT_JSON_AND_NOT_OK,
          });
        }
      }
    })
    .then((json) => {
      // Response was good and we successfully unmarshalled
      if (goodJSON) {
        return makeResponseData(savedResponse, json, null);
      }
      return Promise.reject({ json, reason: JSON_AND_NOT_OK });
    })
    .catch((error) => {
      switch (error.reason) {
        case NOT_JSON_AND_OK:
          return Promise.reject(makeResponseData(savedResponse, null, error));
        case NOT_JSON_AND_NOT_OK:
          return Promise.reject(makeResponseData(savedResponse, null, error));
        case JSON_AND_NOT_OK:
          return Promise.reject(
            makeResponseData(savedResponse, error.json, error)
          );
        default:
          return Promise.reject(makeResponseData(savedResponse, null, error));
      }
    });
}

/* Perform a get request. One parameter:
baseUrl: A Url (see url.js)
Returns a promise of the form: { json, error, response } where json is the unmarshalled body as json (if possible) and error is the error (if any)
You will likely not need to use response, since the data has already been extracted for you.
*/
export function Get(url) {
  const options = {
    method: REQUEST_VERBS.GET,
    headers: getHeaders(),
  };

  // Make the request
  return fetcher(url.str(), options);
}

/* Perform a put request. Two parameters:
baseUrl: A Url (see url.js)
body (optional): object that represents the body of the put request
Returns a promise of the form: { json, error, response } where json is the unmarshalled body as json (if possible) and error is the error (if any)
You will likely not need to use response, since the data has already been extracted for you.
*/
export function Put(url, body) {
  const options = {
    method: REQUEST_VERBS.PUT,
    headers: getHeaders(),
  };
  if (body) {
    options.body = JSON.stringify(body);
  }
  return fetcher(url.str(), options);
}

/* Perform a post request. Two parameters:
baseUrl: A Url (see url.js)
body (optional): object that represents the body of the post request
Returns a promise of the form: { json, error, response } where json is the unmarshalled body as json (if possible) and error is the error (if any)
You will likely not need to use response, since the data has already been extracted for you.
*/
export function Post(url, body) {
  const options = {
    method: REQUEST_VERBS.POST,
    headers: getHeaders(),
  };
  if (body) {
    options.body = JSON.stringify(body);
  }

  return fetcher(url.str(), options);
}

/* Perform a delete request. Two parameters:
baseUrl: A Url (see url.js)
body (optional): object that represents the body of the delete request. Set to null if not used but you wish to include an id path param.
Returns a promise of the form: { json, error, response } where json is the unmarshalled body as json (if possible) and error is the error (if any).
You will likely not need to use response, since the data has already been extracted for you.
*/
export function Delete(url, body) {
  const options = {
    method: REQUEST_VERBS.DELETE,
    headers: getHeaders(),
  };
  if (body) {
    options.body = JSON.stringify(body);
  }
  return fetcher(url.str(), options);
}
