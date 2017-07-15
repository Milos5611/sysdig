import {Card, CardHeader, CardText} from "material-ui/Card";
import React, {PropTypes, PureComponent} from "react";
import {EMPTY} from "../../common/constant";
import {FlatButton} from "material-ui";
import Refresh from "material-ui/svg-icons/action/autorenew";
import moment from "moment";

export default class Events extends PureComponent {
    
    static propTypes = {
        getAllEvents: PropTypes.func,
        events: PropTypes.object
    };
    
    constructor(props) {
        super(props);
        this.handleLoadEvents = ::this.handleLoadEvents;
        this.handleReload = ::this.handleReload;
    }
    
    componentDidMount() {
        this.handleLoadEvents();
    }
    
    handleLoadEvents() {
        const {getAllEvents} = this.props;
        getAllEvents();
    }
    
    handleReload() {
        window.location.reload();
    }
    
    render() {
        const {events} = this.props;
        return (
            <div className="container">
                <div className="eventList--header">
                    <FlatButton
                        onTouchTap={this.handleReload}
                        target="_blank"
                        label="Refresh"
                        secondary
                        icon={<Refresh/>}
                    />
                    <span>{"number of events loaded "}</span>
                    <span className="eventList_number">{events && events.events.length || EMPTY}</span>
                </div>
                {events && events.events.map(d => {
                    return (
                        <Card
                            className="card--wrapper"
                            key={d.id}
                        >
                            <CardHeader
                                title={"Name: " + d.name}
                                subtitle={"Document ID: " + d.documentId}
                                actAsExpander
                                showExpandableButton
                            />
                            <CardText expandable>
                                <p className="cardHead">
                                    <span className="cardHead--header">{"Description: "}</span>
                                    <span className="cardHead--text">{d.description}</span>
                                </p>
                                <p className="cardHead">
                                    <span className="cardHead--header">{"Name: "}</span>
                                    <span className="cardHead--text">{d.name}</span>
                                </p>
                                <p className="cardHead">
                                    <span className="cardHead--header">{"Severity: "}</span>
                                    <span className="cardHead--text">{d.severity}</span>
                                </p>
                                <p className="cardHead">
                                    <span className="cardHead--header">{"Version: "}</span>
                                    <span className="cardHead--text">{d.version}</span>
                                </p>
                                <p className="cardHead">
                                    <span className="cardHead--header">{"Created: "}</span>
                                    <span
                                        className="cardHead--text"
                                    >
                                        {moment(d.createdOn).format("MMMM DD, YYYY - HH A")}
                                    </span>
                                </p>
                                <p className="cardHead">
                                    <span className="cardHead--header">{"Filter: "}</span>
                                    <span className="cardHead--text">{d.filter}</span>
                                </p>
                                <p className="cardHead">
                                    <span className="cardHead--header">{"TimStamp: "}</span>
                                    <span
                                        className="cardHead--text"
                                    >
                                        {moment(d.timestamp).format("hh:mm:ss")}
                                    </span>
                                </p>
                            </CardText>
                        </Card>
                    );
                })}
            </div>
        );
    }
}
