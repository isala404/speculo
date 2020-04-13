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

        const nameOfPerson =this.props.name;
        const isUnknown = nameOfPerson.startsWith("Unknown");       // checking if the person is unknown

        return(
            <div id="personCard">
            {/* show Time cards when clicked */}
                <div onClick = {this.props.onChoose} style={{cursor: "pointer"}}>
                    <div>~Image of the Person~</div>
                    <p>{this.props.name}</p>

{/* 
                    <button onClick= {this.props.onEdit}>
                        Edit Name
                    </button> */}


                    {/* if(nameOfPerson.startsWith("Unknown"){ */}
                    {isUnknown
                    ? <div></div>   // delete should be shown only if name doesn't contain unknown
                    : <div>
                        {/* Have a cross mark instead of Delete text */}
                        <button className="btn btn-danger" onClick = { this.props.onDelete }>
                            Delete
                        </button>
                    </div>
                    }

                </div>
            </div>
            )
    }
}

export default Person;