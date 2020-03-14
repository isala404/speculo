import React, {Component} from "react";

class TimeCard extends Component{
    state={
        timestamp: this.props.timestamp
    };

    render(){
        return(
            <React.Fragment>
                <div>~Image of the TimeCard~</div>
                
                <button onClick = {this.props.onSeek}>
                Time: {/* The time will be shown here */}
                <span>{this.props.timestamp}s</span>
                </button>
            
            </React.Fragment>
            );
    }
}

export default TimeCard;