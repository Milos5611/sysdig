import React, {PureComponent, PropTypes} from "react";

class Events extends PureComponent {
    
    static propTypes = {
        getAllEvents: PropTypes.func.required,
        events: PropTypes.object.required
    };
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div/>
        );
    }
}

export default Events;
