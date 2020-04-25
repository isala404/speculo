import React, { Component } from "react";
import "../styles/dashboard.style.scss";
import EditPopUp from "./EditPopUp";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
// import "../styles/personcard.style.scss";

const PersonCard = styled.div`
  /* background-color: ${prop => prop.blacklisted ? '#FF5A5A' : '#a0ffdc'}; */
  background:${prop => prop.blacklisted?"linear-gradient(20deg, rgba(255,0,0,.8) 0%, rgba(0,65,112,0) 80%)" : "linear-gradient(20deg, rgba(32,217,148,.8) 0%, rgba(0,65,112,0) 70%)"}, #0f1e3d;
/* // background-color: #a0ffdc; */
  font-size: 1em;
  // color: #0b162b;
  color: white;
  font-family: "Gilroy-Bold";
  text-align: left;
  padding: 1em 1em 1em 1em;
  text-align:center;
  height: 100px;
  width: 250px;
  margin:auto;
  border-radius: 3px;
  transition: 0.15s;

  &:hover {
    cursor: pointer;
    color: ${prop => prop.blacklisted ? 'white' : '#0b162b'};
    background: ${prop => prop.blacklisted?"linear-gradient(20deg, rgba(255,0,0,.8) 0%, rgba(0,65,112,0) 80%)" : "linear-gradient(20deg, rgba(32,217,148,.8) 0%, rgba(0,65,112,0) 70%)"}, #204e80;
  }
`;


const unKnownStyle = {
  background:
  "linear-gradient(20deg, rgba(121,121,121,1) 0%, rgba(11,22,43,0) 70%), #0f1e3d",
  color: "white",
  fontFamily: "Gilroy-SemiBold",
  fontStyle: "italic"
};
// if blacklisted = 1  ->  make background-color of the PersonCard: red
//  else if  blacklisted = 0   ->  background-color of the PersonCard: green background color
// unknown person -> background of the PersonCard: grey and white italic text

const DeleteButton = styled.button`
  color: #c21807;
  background-color: white;
  border: 2px solid transparent;
  border-radius: 6px;
  outline: none;
  transition: 0.3s;

  &:hover {
    color: white;
    background-color: #c21807;
  }
`;

class Person extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      name: this.props.name,
      timestamps: this.props.timestamps,
      blacklisted: this.props.blacklisted, // black-listed status of the person (1 = black-listed, 0 = white-listed)
      show: false // display status of the Edit pop-up
    };
  }

  // reset state to new props after deleting a person.
  static getDerivedStateFromProps(props, state) {
    if (props.id !== state.id) {
      return {
        ...state,
        id: props.id,
        name: props.name,
        timestamps: props.timestamps,
        blacklisted: props.blacklisted
      };
    }
  }

  nameHandler = e => {
    this.setState({ name: e.target.value }); // accessing inserted input and setting it's value to the name
  };

  blacklistedHandler = e => {
    this.setState({ blacklisted: e.target.value }); // accessing inserted input and setting it's value to blacklisted status
  };

  handleSave = () => {
    const personDetails = {
      id: this.state.id,
      name: this.state.name,
      timestamps: this.state.timestamps,
      blacklisted: this.state.blacklisted
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
      <PersonCard
        blacklisted={this.state.blacklisted}
        style={isUnknown ? unKnownStyle : {}}
        onClick={this.props.onChoose}
      >
        {/* show Time cards when clicked */}

        <div style={{ float: "left", color: "white", zIndex: 100 }}>
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

export default Person;
