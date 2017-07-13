import reqwest from "reqwest";

const key = "8aef9517-3070-4090-b55e-83296cee8cd1";
const API_KEY = "apikey";
const AUTHORIZATION_KEY = "Authorization";
const CONTENT_TYPE_KEY = "Content-Type";
const HEADERS_KEY = "headers";
const METHOD_KEY = "method";

const BODY = "data";
const APPLICATION_JSON = "application/json";
const GET = "GET";
const POST = "POST";
const PATCH = "PATCH";
const DELETE = "DELETE";

class Rest {
    
    doGet(url) {
        const requestOptions = {
            url,
            [METHOD_KEY]: GET,
            [HEADERS_KEY]: {
                [API_KEY]: key,
                [CONTENT_TYPE_KEY]: APPLICATION_JSON,
            }
        };
        return reqwest(requestOptions);
    }
}

export default new Rest();
