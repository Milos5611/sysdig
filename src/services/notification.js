export const OPEN_NOTIFICATION = "OPEN_NOTIFICATION";
export const CLOSE_NOTIFICATION = "CLOSE_NOTIFICATION";
export const SET_AUTO_HIDE_DURATION = "AUTO_HIDE_DURATION";
export const SET_NOTIFICATION_MESSAGE = "SET_NOTIFICATION_MESSAGE";
export const SET_HANDLE_TOUCH_TAP_ACTION = "SET_HANDLE_TOUCH_TAP_ACTION";
export const SET_HANDLE_CLOSE_NOTIFICATION_REQUEST_ACTION = "SET_HANDLE_CLOSE_NOTIFICATION_REQUEST_ACTION";
import {TYPE_KEY} from "../common/constant";

export const DEFAULT_DURATION = 3600;

export const AUTO_HIDE_DURATION = "autoHideDuration";
export const ACTION_NODE = "actionNode";
export const MESSAGE_NODE = "messageNode";
export const OPEN = "open";
export const HANDLE_TOUCH_TAP_ACTION = "handleTouchTapAction";
export const HANDLE_CLOSE_NOTIFICATION_REQUEST_ACTION = "handleCloseNotificationRequestAction";

export const initialState = {
    [OPEN]: false,
    [AUTO_HIDE_DURATION]: DEFAULT_DURATION,
    [ACTION_NODE]: "",
    [MESSAGE_NODE]: "",
    [HANDLE_TOUCH_TAP_ACTION]: closeNotification,
    [HANDLE_CLOSE_NOTIFICATION_REQUEST_ACTION]: closeNotification
};

export default function reducer( state = initialState, action ) {
    
    let newState;
    
    switch ( action[ TYPE_KEY ] ) {
        
        case OPEN_NOTIFICATION:
            newState = {
                ...state,
                [OPEN]: true
            };
            break;
        
        case CLOSE_NOTIFICATION:
            newState = {
                ...state,
                [OPEN]: false
            };
            break;
        
        case SET_NOTIFICATION_MESSAGE:
            newState = {
                ...state,
                [MESSAGE_NODE]: action[ MESSAGE_NODE ]
            };
            break;
        
        case SET_HANDLE_TOUCH_TAP_ACTION:
            newState = {
                ...state,
                [SET_HANDLE_TOUCH_TAP_ACTION]: action[ SET_HANDLE_TOUCH_TAP_ACTION ]
            };
            break;
        
        case SET_HANDLE_CLOSE_NOTIFICATION_REQUEST_ACTION:
            newState = {
                ...state,
                [HANDLE_CLOSE_NOTIFICATION_REQUEST_ACTION]: action[ HANDLE_CLOSE_NOTIFICATION_REQUEST_ACTION ]
            };
            break;
        
        case SET_AUTO_HIDE_DURATION:
            newState = {
                ...state,
                [AUTO_HIDE_DURATION]: action[ AUTO_HIDE_DURATION ]
            };
            break;
        
        default:
            newState = {
                ...state
            };
            break;
    }
    return newState;
}

export function openNotification() {
    return {
        [TYPE_KEY]: OPEN_NOTIFICATION
    };
}

export function closeNotification() {
    return {
        [TYPE_KEY]: CLOSE_NOTIFICATION
    };
}

export function setAutoHideDuration(duration) {
    return {
        [TYPE_KEY]: SET_AUTO_HIDE_DURATION,
        [AUTO_HIDE_DURATION]: duration
    };
}

export function setNotificationMessage(node) {
    return {
        [TYPE_KEY]: SET_NOTIFICATION_MESSAGE,
        [MESSAGE_NODE]: node
    };
}

export function setHandleTouchTapAction(handleToucheTapAction) {
    return {
        [TYPE_KEY]: SET_HANDLE_TOUCH_TAP_ACTION,
        [HANDLE_TOUCH_TAP_ACTION]: handleToucheTapAction
    };
}

export function setHandleCloseNotificationRequestAction(handleCloseNotificationRequestAction) {
    return {
        [TYPE_KEY]: SET_HANDLE_CLOSE_NOTIFICATION_REQUEST_ACTION,
        [HANDLE_CLOSE_NOTIFICATION_REQUEST_ACTION]: handleCloseNotificationRequestAction
    };
}

export function handleToucheTapAction() {
    return ( dispatch, getState ) => {
        dispatch(getState().notification[ HANDLE_TOUCH_TAP_ACTION ]());
    };
}

export function handleCloseNotificationRequestAction() {
    return ( dispatch, getState ) => {
        dispatch(getState().notification[ HANDLE_CLOSE_NOTIFICATION_REQUEST_ACTION ]());
    };
}

export function showNotification(messageNode = "",
                                 requestCloseCallback = closeNotification,
                                 actionTouchTapCallback = closeNotification, duration = DEFAULT_DURATION) {
    
    return ( dispatch ) => {
        
        dispatch(setNotificationMessage(messageNode));
        dispatch(setHandleCloseNotificationRequestAction(requestCloseCallback));
        dispatch(setHandleTouchTapAction(actionTouchTapCallback));
        dispatch(setAutoHideDuration(duration));
        dispatch(openNotification());
        
    };
}
