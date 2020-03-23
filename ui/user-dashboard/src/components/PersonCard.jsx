import React, {Component} from "react";
import '../styles/commonStyles.scss';

class Person extends Component{
    state={
        name: this.props.name
    };

    render(){
        return(
            <div id="personCard">
            {/* show Time cards when clicked */}
                <div onClick = {this.props.onChoose} style={{cursor: "pointer"}}>
                    <div>~Image of the Person~</div>
                    <p>{this.props.name}</p>
                </div>
            </div>
            )
    }
}

export default Person;