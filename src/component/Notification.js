import React, {PropTypes} from "react";
import Snackbar from "material-ui/Snackbar";

const contentStyle = {
    textAlign: "center"
};

const bodyStyle = {
    opacity: "0.6"
};

export default function Notification({open, messageNode, actionNode,
    autoHideDuration, actionTouchTapCallback, requestCloseCallback}) {
    return (
        <Snackbar
            open={open}
            message={messageNode}
            autoHideDuration={autoHideDuration}
            action={actionNode}
            onActionTouchTap={actionTouchTapCallback}
            onRequestClose={requestCloseCallback}
            contentStyle={contentStyle}
            bodyStyle={bodyStyle}
        />
    );
}

Notification.propTypes = {
    "open": PropTypes.bool.isRequired,
    "messageNode": PropTypes.node,
    "actionNode": PropTypes.node,
    "autoHideDuration": PropTypes.number,
    "actionTouchTapCallback": PropTypes.func,
    "requestCloseCallback": PropTypes.func
};
