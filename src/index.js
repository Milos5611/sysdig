import "./index.scss";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Events from "./containers/Events";
import Loading from "./containers/Loading";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Notification from "./containers/Notification";
import {Provider} from "react-redux";
import React from "react";
import domready from "domready";
import injectTapEventPlugin from "react-tap-event-plugin";
import {render} from "react-dom";
import store from "./app/store";

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const MainApplication = () => {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Loading />
                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={Events}
                        />
                        <Route
                            path="/"
                            component={Notification}
                        />
                    </Switch>
                    <Route
                        path="/"
                        component={Notification}
                    />
                </div>
            </Router>
        </Provider>
    );
};

domready(() => {
    render(
        <MuiThemeProvider >
            <MainApplication />
        </MuiThemeProvider>, document.getElementById("app"));
});

