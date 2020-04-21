import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BasicButton } from "../components/button/button.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faEdit,
  faCheck,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import {
  retrieveAllDetections,
  deleteFaceFromSystem
} from "../services/DetectionsManagement";
import Select from "react-select";
import Switch from "react-switch";

export const Admin = ({ peopleData }) => {
  const [people, setPeople] = useState([
    // hard coded example
    {
      id: 1,
      name: "Akassh",
      timestamps: [60, 100, 1200],
      blacklisted: true
    },
    { id: 2, name: "Visal", timestamps: [1000], blacklisted: false },
    {
      id: 3,
      name: "Nisal",
      timestamps: [100, 500, 1200, 1500],
      blacklisted: true
    },
    {
      id: 4,
      name: "UnknownPerson",
      timestamps: [100, 500],
      blacklisted: true
    },
    {
        id: 5,
        name: "Kushan",
        timestamps: [100, 500, 1200, 1500],
        blacklisted: false
      }
  ]);
  //react hooks to access state
  const [searchVal, setSearchVal] = useState("");
  const [results, setResults] = useState(people);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [personToEdit, setPersonToEdit] = useState(-1);
  const [editToggled, setEditToggled] = useState(false);
  const [newPersonName, setNewPersonName] = useState(null);
  const [blackListValue, setBlackListValue] = useState(null);
  const [isSwitchToggled, setSwitchToggle] = useState(false);
  //updating the state on searchval change
  useEffect(() => {
    var result = search(people, searchVal);
    setResults(result);
  }, [searchVal]);

  //function to delete a person on delete button press
  const deletePerson = async personIdToDelete => {
    //Delete request to backend
    deleteFaceFromSystem(personIdToDelete);
    let newDetectionsArray = people.filter(
      person => person.id != personIdToDelete
    );
    setPeople(newDetectionsArray);
    setResults(newDetectionsArray);
  };

  //function to update a row
  const updatePerson = async (personIdToUpdate, name, isBlacklisted) => {
    console.log(isBlacklisted);
    //TODO: add the axios request to update
    var person;
    if (name != null && personIdToUpdate != null) {
      person = people.find(x => x.id == personIdToUpdate);
      if (person) {
        person.name = name;
        person.blacklisted = isBlacklisted;
      }
      console.log(people);
    } else if (isBlacklisted != null) {
      console.log("inside isblacklisted != null");
      person = people.find(x => x.id == personIdToUpdate);
      if (person) {
        person.blacklisted = isBlacklisted;
      }
    } else {
      
    }
  };

  //function that handles and retrieves the value of the select menu
  const handleSelectorChange = selectedOption => {
    setBlackListValue(selectedOption.value);
  };

  //function that handles and retrieve the value of the switch
  const handleSwitchChange = checked => {
    sortPeople();
    setSwitchToggle(checked);
  };

  //sorting people by id and blacklist
  const sortPeople = () => {
    isSwitchToggled
      ? setResults(people.sort(sortByProperty("blacklisted")))
      : setResults(people.sort(sortByProperty("id")));
  };

  return (
    <div style={{overflowX: "auto"}}>
      <Switch onChange={handleSwitchChange} checked={isSwitchToggled} />
      <Input
        type={"text"}
        placeholder={"Select a person to Search for"}
        onChange={e => {
          setSearchVal(e.target.value);
          var result = search(people, searchVal);
          setResults(result);
        }}
      />
      <Table>
        <TableHead>
          <TableRow>
            {headings.map(heading => {
              return <TableHeading>{heading.heading}</TableHeading>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map(person => {
            return (
              <Row>
                <TableData>{person.id}</TableData>
                <TableData
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setSelectedPerson(person);
                  }}
                >
                  {person.id == personToEdit && editToggled == true ? (
                    <input
                      type="text"
                      placeHolder={person.name}
                      onChange={x => setNewPersonName
                      (x.target.value)}
                    />
                  ) : (
                    person.name
                  )}
                </TableData>
                <TableData>
                  <ul>
                    {person.timestamps.map(timestamp => {
                      return <li>{timestamp}</li>;
                    })}
                  </ul>
                </TableData>
                <TableData>
                  {person.id == personToEdit && editToggled ? (
                    <Select
                      options={blacklistValues}
                      onChange={handleSelectorChange}
                      defaultValue={getBlacklistValue(person)}
                    />
                  ) : (
                    person.blacklisted.toString()
                  )}
                </TableData>
                <TableData>
                  <DeleteButton onClick={() => deletePerson(person.id)}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </DeleteButton>
                  <EditButton
                    onClick={() => {
                      setPersonToEdit(person.id);
                      if (editToggled) {
                        updatePerson(
                          personToEdit,
                          newPersonName,
                          blackListValue
                        );
                        setEditToggled(false);
                        setBlackListValue(getBlacklistValue(person));
                      } else {
                        updatePerson(personToEdit, null, null);
                        setEditToggled(true);
                        sortByProperty();
                      }
                    }}
                  >
                    <FontAwesomeIcon
                      icon={
                        person.id == personToEdit && editToggled
                          ? faCheck
                          : faEdit
                      }
                    />
                  </EditButton>
                  {person.id == personToEdit && editToggled ? (
                    <CancelButton
                      onClick={() => {
                        setPersonToEdit(-1);
                        setEditToggled(false);
                      }}
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </CancelButton>
                  ) : null}
                </TableData>
              </Row>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
//getting the blacklisted values to display in the select menu
const getBlacklistValue = person => {
  var value = blacklistValues.find(x => x.value == person.blacklisted);

  return value;
};

//function used for searching
const search = (persons, searchVal) => {
  var results = [];
  for (var x = 0; x < persons.length; x++) {
    if (persons[x].name.toUpperCase().includes(searchVal.toUpperCase())) {
      results.push(persons[x]);
    }
  }
  return results;
};

//function to sort
const sortByProperty = property => {
  return (a, b) => {
    if (a[property] > b[property]) return 1;
    else if (a[property] < b[property]) return -1;

    return 0;
  };
};

const headings = [
  { id: 1, heading: "ID" },
  { id: 2, heading: "NAME" },
  { id: 3, heading: "TIME STAMPS" },
  { id: 4, heading: "BLACKLISTED" },
  { id: 5, heading: "ACTIONS" }
];

const blacklistValues = [
  { value: true, label: "true" },
  { value: false, label: "false" }
];

const Input = styled.input`
  background: white;
  padding: 0.4em;
  width: 250px;
  border: 1px solid #ffffff;
  border-radius: 3px;
  border: 1px solid #2bba85;
  height: 10;
  transition: 0.3s;
  font-family: "Lexend Deca", sans-serif;
`;

const Table = styled.table`
  min-width: 600px;
  width: 1000;
  table-layout: fixed;
  border-collapse: collapse;
  text-align: left;
`;

const TableBody = styled.tbody`
  display: block;
  width: 100%;
  overflow: auto;
  height: 500px;
`;

const TableHead = styled.thead`
  background: black;
  color: #fff;
`;
const TableRow = styled.tr`
  display: block;
  background: #333;
`;
const Row = styled.tr`
  background: #ededed;
  border-bottom: 1px solid #333;
`;
const TableHeading = styled.th`
  padding: 1em;
  text-align: left;
  width: 200px;
`;
const TableData = styled.td`
  padding: 1em;
  text-align: left;
  width: 200px;
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

const EditButton = styled.button`
  color: #2bba85;
  background-color: inherit;
  border: 2px solid #a0ffdc;
  border-radius: 6px;
  outline: none;
  transition: 0.3s;

  &:hover {
    color: white;
    background-color: #2bba85;
    border-radius: 6px;
  }
`;
const CancelButton = styled.button`
  color: #2bba85;
  background-color: inherit;
  border: 2px solid #a0ffdc;
  border-radius: 6px;
  outline: none;
  transition: 0.3s;

  &:hover {
    color: white;
    background-color: #2bba85;
    border-radius: 6px;
  }
`;
