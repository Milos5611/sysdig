import {Card, CardHeader, CardText} from "material-ui/Card";
import React, {PropTypes, PureComponent} from "react";

export default class Events extends PureComponent {
    
    static propTypes = {
        getAllEvents: PropTypes.func,
        events: PropTypes.object
    };
    
    constructor(props) {
        super(props);
        this.handleLoadEvents = ::this.handleLoadEvents;
    }
    
    componentDidMount() {
        this.handleLoadEvents();
    }
    
    handleLoadEvents() {
        const {getAllEvents} = this.props;
        getAllEvents();
    }
    
    render() {
        const {events} = this.props;
        return (
            <div className="container">
                {events && events.events.map(d => {
                    return (
                        <Card
                            className="card--wrapper"
                            key={d.id}
                        >
                            <CardHeader
                                title={"Name " + d.name}
                                subtitle={"Document ID " + d.documentId}
                                actAsExpander
                                showExpandableButton
                            />
                            <CardText expandable>
                                {d.description}
                            </CardText>
                        </Card>
                    );
                })}
            </div>
        );
    }
}
