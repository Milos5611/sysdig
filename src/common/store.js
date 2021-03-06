import {applyMiddleware, combineReducers, createStore} from "redux";
import events from "../services/event";
import loading from "../services/loading";
import notification from "../services/notification";
import thunk from "redux-thunk";

const reducers = {
    events,
    loading,
    notification
};

const logger = store => next => action => {
    
    let result = next(action);
    
    if (process.env.NODE_ENV !== "production") {
        /* eslint-disable */
        console.group(action.type);
        console.info("Dispatching:", action);
        console.log("Next state:", store.getState());
        console.groupEnd(action.type);
        /* eslint-enable */
    }
    return result;
};

export default createStore(combineReducers(reducers), applyMiddleware(thunk, logger));
