import Loading from "../component/Loading/Loading";
import {OPEN} from "../services/loading";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        [OPEN]: state.loading[OPEN]
    };
};


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
