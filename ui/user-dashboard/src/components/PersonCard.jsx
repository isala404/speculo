import React, {Component} from "react";
import '../styles/commonStyles.scss';

class Person extends Component{
    state={
        name: this.props.name,
        blackListed: this.props.blackListed             // black-listed status of the person (1 = black-listed, 0 = white-listed)
    };


    // use style components to check if blackListed = 1  ->  make background-color of the PersonCard: red or black
    //          else if  blackListed = 0   ->  background-color of the PersonCard: whitish background color


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