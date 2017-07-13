import {TYPE_KEY} from "../app/constant";
import rest from "../app/rest";

const RECIEVE_EVENT_LIST_ACTION = "RECIEVE_EVENT_LIST_ACTION";
const RECIEVE_EVENT_DETAIL_ACTION = "RECIEVE_EVENT_DETAIL_ACTION";

export const EVENT_LIST = "events";
export const EVENT = "event";

const initialState = {
    [EVENT_LIST]: null,
    [EVENT]: null
};

export default function reducer(state = initialState, action) {
    let newState;
    
    switch (action[TYPE_KEY]) {
        case RECIEVE_EVENT_LIST_ACTION:
            newState = Object.assign({}, state, {
                [EVENT_LIST]: action[EVENT_LIST], [EVENT]: action[EVENT]
            });
            break;
        case RECIEVE_EVENT_DETAIL_ACTION:
            newState = Object.assign({}, state, {
                [EVENT]: action[EVENT]
            });
            break;
        default:
            newState = Object.assign({}, state, {});
            break;
    }
    return newState;
}

export function getAllEvents() {
    return (dispatch) => {
        rest.doGet(
            `${window.sysdig.even_link}`
        ).then(eventList => {
            dispatch(recieveEventListSuccessful(eventList));
        }, reason => {
        
        });
    };
}

export function recieveEventListSuccessful(eventList) {
    return {
        [TYPE_KEY]: RECIEVE_EVENT_LIST_ACTION,
        [EVENT_LIST]: eventList
    }
}




