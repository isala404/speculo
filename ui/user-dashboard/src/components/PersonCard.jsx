import React, { Component } from "react";
import "../styles/commonStyles.scss";
import EditPopUp from "./EditPopUp";

class Person extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      name: this.props.name,
      timestamps: this.props.timestamps,
      blacklisted: this.props.blacklisted, // black-listed status of the person (1 = black-listed, 0 = white-listed)

      show: false,
    };

    // this.newName = this.state.name;
    // this.newBlacklistedSatus = blacklisted;
  }

  // use style components to check if blacklisted = 1  ->  make background-color of the PersonCard: red or black
  //          else if  blacklisted = 0   ->  background-color of the PersonCard: whitish background color

  nameHandler = (e) => {
    this.setState({ name: e.target.value }); // accessing inserted input and setting it's value to the name
    console.log(this.state.name);
  };

  blacklistedHandler = (e) => {
    // this.setState({newBlacklistedSatus: e.target.value})     // accessing inserted input and setting it's value to blacklisted status
  };

  handleSave = () => {
    const personDetails = {
      // this.state;
    };
    console.log(personDetails);
    // this.props.editPersonSave(personDetails)          // sends the new person details to the parent component
  };

  render() {
    const nameOfPerson = this.props.name;
    const isUnknown = nameOfPerson.startsWith("Unknown"); // checking if the person is unknown

    return (
      <div id="personCard">
        {/* show Time cards when clicked */}
        <div onClick={this.props.onChoose} style={{ cursor: "pointer" }}>
          <div>~Image of the Person~</div>
          <p>{this.props.name}</p>
        </div>

        {/* <button  className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
                    onClick= {this.props.onRequestEdit}>
                    Edit Name/ Blacklist status
                </button> */}

        <EditPopUp
          name={this.state.name}
          nameHandler={this.nameHandler}
          blacklisted={this.state.blacklisted}
          blacklistedHandler={this.blacklistedHandler}
          handleSave={this.handleSave}
        />

        {/* if(nameOfPerson.startsWith("Unknown"){ */}
        {isUnknown ? (
          <div></div> // delete should be shown only if name doesn't contain unknown
        ) : (
          <div>
            {/* Have a cross mark instead of Delete text */}
            <button className="btn btn-danger" onClick={this.props.onDelete}>
              Delete
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Person;
