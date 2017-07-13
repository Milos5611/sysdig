import reqwest from "reqwest";

const ACCEPT_KEY = "Accept";
const API_KEY = "8aef9517-3070-4090-b55e-83296cee8cd1";
const AUTHORIZATION_KEY = "Authorization";
const HEADERS_KEY = "headers";
const METHOD_KEY = "method";
const TYPE_KEY = "type";
const JSON_VALUE = "json";

const APPLICATION_JSON = "application/json";
const GET = "GET";

class Rest {
    
    doGet( url ) {
        const requestOptions = {
            url,
            [TYPE_KEY]: JSON_VALUE,
            [METHOD_KEY]: GET,
            [HEADERS_KEY]: {
                [AUTHORIZATION_KEY]: `Bearer ${API_KEY}`,
                [ACCEPT_KEY]: APPLICATION_JSON
            }
        };
        return reqwest(requestOptions);
    }
}

export default new Rest();
