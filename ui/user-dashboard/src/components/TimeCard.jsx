import React, {Component} from "react";


class TimeCard extends Component{
    state={
        timestamp: this.props.timestamp
    };

    render(){
        return(
            <div id="timeCard" onClick = {this.props.onSeek} style={{cursor: "pointer"}}>
                <div>~Image of the TimeCard~</div>
                <div>
                    Time: {/* The time will be shown here */}
                    <span>{this.props.timestamp}s</span>
                </div>
            
            </div>
            );
    }
}

export default TimeCard;