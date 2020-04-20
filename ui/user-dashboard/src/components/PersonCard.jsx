import React, { Component } from "react";
import "../styles/commonStyles.scss";
import EditPopUp from "./EditPopUp";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

class Person extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      name: this.props.name,
      timestamps: this.props.timestamps,
      blacklisted: this.props.blacklisted, // black-listed status of the person (1 = black-listed, 0 = white-listed)
      show: false, // display status of the Edit pop-up
    };
  }

  // use style components to check if blacklisted = 1  ->  make background-color of the PersonCard: grey and text white italics
  //          else if  blacklisted = 0   ->  background-color of the PersonCard: whitish background color

  static getDerivedStateFromProps(props, state) {
    if (props.id !== state.id) {
      return {
        ...state,
        id: props.id,
        name: props.name,
        timestamps: props.timestamps,
        blacklisted: props.blacklisted,
      };
    }
  }

  nameHandler = (e) => {
    this.setState({ name: e.target.value }); // accessing inserted input and setting it's value to the name
  };

  blacklistedHandler = (e) => {
    this.setState({ blacklisted: e.target.value }); // accessing inserted input and setting it's value to blacklisted status
  };

  handleSave = () => {
    const personDetails = {
      id: this.state.id,
      name: this.state.name,
      timestamps: this.state.timestamps,
      blacklisted: this.state.blacklisted,
    }; // new details of person

    this.props.onSaveEdit(personDetails); // sends the new person details to the parent component
  };

  handleChoose = () => {
    this.props.onChooseIndex(); // getting the index of the chosen person in the parent component's array
  };

  render() {
    const nameOfPerson = this.props.name;
    const isUnknown = nameOfPerson.startsWith("Unknown"); // checking if the person is unknown

    return (
      <PersonCard onClick={this.props.onChoose}>
        {/* show Time cards when clicked */}
        <div style={{ float: "left" }}>
          {/* <div>~Image of the Person~</div> */}
          <p>{this.props.name}</p>
        </div>

        <div style={{ float: "right" }}>
          {/* style = {{float:"right", display:"inline-block"}}> */}
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
            <span></span> // delete should be shown only if name doesn't contain unknown
          ) : (
            <span>
              {/* Have a cross mark instead of Delete text */}
              <DeleteButton onClick={this.props.onDelete}>
                <FontAwesomeIcon icon={faTrashAlt} />
              </DeleteButton>
            </span>
          )}
        </div>
      </PersonCard>
    );
  }
}

const PersonCard = styled.div`
  // background-color: #A0FFDC;
  background-color: #a0ffdc;
  font-size: 1em;
  color: #0b162b;
  font-family: "Gilroy-Bold";
  text-align: left;
  padding: 1em 1em 1em 1em;
  height: 80px;
  width: 250px;
  border: 1px solid white;
  border-radius: 3px;
  &:hover {
    cursor: pointer;
  }
`;

const DeleteButton = styled.button`
  color: #c21807;
  background-color: white;
  border: 2px solid #a0ffdc;
  border-radius: 6px;
  outline: none;
  transition: 0.3s;

  &:hover {
    color: white;
    background-color: #c21807;
  }
`;

export default Person;
