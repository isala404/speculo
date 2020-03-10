import React, {Component} from "react";

class TimeCard extends Component{
    state={
        timeStamp: this.props.timeStamp
    };

    render(){
        return(
            <React.Fragment>
                <div>~Image of the TimeCard~

                </div>
                <button onClick = {this.props.onSeek}>
                Time: {/* The time will be shown here */}
                <span>{this.props.timeStamp}s</span>
                </button>
            
            </React.Fragment>
            );
    }
}

export default TimeCard;