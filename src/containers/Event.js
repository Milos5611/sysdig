import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import Events from "../component/Event";
import {
    EVENT_LIST,
    EVENT,
    getAllEvents
} from "../services/event";

const mapStateToProps = (state) => {
    return {
        [EVENT_LIST]: state.events[EVENT_LIST],
        [EVENT]: state.events[EVENT]
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getAllEvents,
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);
