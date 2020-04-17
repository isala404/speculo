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

      show: false        // display status of the Edit pop-up
    };
  }

  // use style components to check if blacklisted = 1  ->  make background-color of the PersonCard: red or black
  //          else if  blacklisted = 0   ->  background-color of the PersonCard: whitish background color



  nameHandler = (e) => {
    this.setState({ name: e.target.value });    // accessing inserted input and setting it's value to the name
  };

  blacklistedHandler = (e) => {
    this.setState({blacklisted: e.target.value})     // accessing inserted input and setting it's value to blacklisted status
  };

  handleSave = () => {
    const personDetails = {
      id: this.state.id,
      name: this.state.name,
      timestamps: this.state.timestamps,
      blacklisted: this.state.blacklisted,
    };      // new details of person

    this.props.onSaveEdit(personDetails)          // sends the new person details to the parent component
  };

  handleChoose = () =>{
    this.props.onChooseIndex()      // getting the index of the chosen person in the parent component's array
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


        <EditPopUp
          name={this.state.name}
          nameHandler={this.nameHandler}
          blacklisted={this.state.blacklisted}
          blacklistedHandler={this.blacklistedHandler}
          handleSave={this.handleSave}

          handleChoose={this.handleChoose}
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
