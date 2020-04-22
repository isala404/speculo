import React, { useState, useEffect } from "react";
import styled from "styled-components";
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
} from "../../services/DetectionsManagement";
import Select from "react-select";
import Switch from "react-switch";

export const PeopleTable = ({ peopleData, isSwitchToggled, searchValue }) => {
  const [people, setPeople] = useState(peopleData);
  //react hooks to access state
  const [results, setResults] = useState(people);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [personToEdit, setPersonToEdit] = useState(-1);
  const [editToggled, setEditToggled] = useState(false);
  const [newPersonName, setNewPersonName] = useState(null);
  const [blackListValue, setBlackListValue] = useState(null);
  //updating the state on searchval change
  useEffect(() => {
    var result = search(people, searchValue);
    setResults(result);
    sortPeople()
  }, [searchValue, isSwitchToggled]);


  //function to delete a person on delete button press
  const deletePerson = async personIdToDelete => {
    //Delete request to backend
    deleteFaceFromSystem(personIdToDelete);
    let newDetectionsArray = people.filter(
      person => person.id != personIdToDelete
    );
    setPeople(newDetectionsArray);
    setResults(search(newDetectionsArray, searchValue));
  };

  //function to update a row
  const updatePerson = async (personIdToUpdate, name, isBlacklisted) => {
    //TODO: add the axios request to update
    console.log(isBlacklisted);
    var person;
    if (name != null && personIdToUpdate != null) {
        console.log("inside != null");
      person = people.find(x => x.id == personIdToUpdate);
      if (person) {
        person.name = name;
        person.blacklisted = isBlacklisted;
      }
      console.log(people);
    } else if (isBlacklisted != null && isBlacklisted != undefined) {
      console.log("inside isblacklisted != null");
      person = people.find(x => x.id == personIdToUpdate);
      if (person) {
        person.blacklisted = isBlacklisted;
      }
    } else {
        console.log("inside else");
        person = people.find(x => x.id == personIdToUpdate);
        var person1 = people.find(y => y.id == personIdToUpdate);
        people.blackListed = person1.blackListed;
    }
  };

  //function that handles and retrieves the value of the select menu
  const handleSelectorChange = selectedOption => {
    setBlackListValue(selectedOption.value);
  };

  //sorting people by id and blacklist
  const sortPeople = () => {
    isSwitchToggled
      ? setResults(people.sort(sortByProperty("blacklisted")))
      : setResults(people.sort(sortByProperty("id")));
  };

  return (
    <div style={{ overflowX: "auto"}}>
    {search}
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
                      onChange={x => setNewPersonName(x.target.value)}
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
                  {/* onpress of edit button */}
                  <EditButton
                    onClick={() => {
                      setPersonToEdit(person.id);
                      if (editToggled) {
                        updatePerson(
                          personToEdit,
                          newPersonName,
                          blackListValue
                        );
                        setBlackListValue(getBlacklistValue(person));
                        console.log(getBlacklistValue(person))
                        setEditToggled(false);
                      } else {
                        updatePerson(
                          personToEdit,
                          null,
                          person.blacklisted
                        );
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
console.log(value)
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

const Table = styled.table`
  min-width: 1500px;
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
  width: 100%;
  background: black;
  color: #fff;
  display:block;
`;
const TableRow = styled.tr`
  display: block;
  background: #333;
  width: 100%
`;
const Row = styled.tr`
  background: #ededed;
  border-bottom: 1px solid #333;
  width: 100%
`;
const TableHeading = styled.th`
  padding: 1em;
  text-align: left;
`;
const TableData = styled.td`
  padding: 1em;
  text-align: left;
  width: 10%;
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
