import React, {Component} from "react";
import '../styles/commonStyles.scss';

class Person extends Component{
    state={
        name: this.props.name
    };

    render(){
        return(
            <React.Fragment>
                {/* show Time cards when clicked */}
                <div onClick = {this.props.onChoose} style={{cursor: "pointer"}}>
                    <div>~Image of the Person~</div>
                    <p>{this.props.name}</p>
                </div>
            </React.Fragment>
            )
    }
}

export default Person;