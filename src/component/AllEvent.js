import React, {PropTypes, PureComponent} from "react";

class Events extends PureComponent {
    
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
            <div>
                {events && events.events.map(d => {
                    return (
                        <div key={d.id}><p>{d.description}</p></div>
                    );
                })}
            </div>
        );
    }
}

export default Events;
