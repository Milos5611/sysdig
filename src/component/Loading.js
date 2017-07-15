import React, {PropTypes} from "react";
import CircularProgress from "material-ui/CircularProgress";

function Loading({open}) {
    return (
        open ?
            <div className="loading">
                <CircularProgress
                    className="loading-spinner"
                    size={80}
                    thickness={5}
                />
            </div> : null
    );
}

Loading.propTypes = {
    open: PropTypes.bool
};

export default Loading;
