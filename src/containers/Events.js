import {
    EVENT,
    EVENT_LIST,
    getAllEvents
} from "../services/event";
import Events from "../component/Events/Events";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        [EVENT_LIST]: state.events[EVENT_LIST],
        [EVENT]: state.events[EVENT]
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getAllEvents,
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);
