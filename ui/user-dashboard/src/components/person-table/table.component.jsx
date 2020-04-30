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
  deleteFaceFromSystem,
  retrieveAllRecords,
  editNameInSystem,
  whitelistPersonInSystem,
  blacklistPersonInSystem
} from "../../services/DetectionsManagement";
import Select from "react-select";

export const PeopleTable = ({ isSwitchToggled, searchValue }) => {
  const [people, setPeople] = useState([]);
  //react hooks to access state
  const [results, setResults] = useState(people);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [personToEdit, setPersonToEdit] = useState(-1);
  const [editToggled, setEditToggled] = useState(false);
  const [newPersonName, setNewPersonName] = useState(null);
  const [blackListValue, setBlackListValue] = useState(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  //updating the state on searchval change
  useEffect(() => {
    if (!isDataLoaded) {
      getData();
    }
    console.log(results);
    search(results, searchValue);
    // sortPeople();
  }, [searchValue, isSwitchToggled, isDataLoaded]);

  //method to invoke request to get all the records
  const getData = async () => {
    await retrieveAllRecords().then(res => {
      setPeople(res);
      setResults(res);
      // console.log(people);
      setIsDataLoaded(true);
      // console.log(res.data);
    });
  };

  //function used for searching
  const search = (p, searchVal) => {
    console.log(p);
    console.log(searchVal);
    for (var obj in p){
      console.log(obj)
    }

    // if (persons != null && persons.length != 0) {
    //   // console.log("search " + JSON.parse(people))
    //   console.log("inside if")
    //   console.log(object)
    //   for (var x = 0; x < persons.length; x++) {
    //     console.log("inside for")
    //     // console.log(persons.data[x].label);
    //     if (
    //       persons.data[x].label.toUpperCase().includes(searchVal.toUpperCase())
    //     ) {
    //       results.push(persons[x]);
    //     }
    //   }
    // }
    console.log(results);
    return results;
  };

  //function to delete a person on delete button press
  const deletePerson = async personIdToDelete => {
    //Delete request to backend
    deleteFaceFromSystem(personIdToDelete);
    let newDetectionsArray = people.data.filter(
      person => person._id != personIdToDelete
    );
    setPeople(newDetectionsArray);
    // setResults(search(newDetectionsArray, searchValue));
  };

  //function to update a row
  const updatePerson = async (personIdToUpdate, name, isBlacklisted) => {
    //TODO: add the axios request to update
    console.log(personIdToUpdate);
    console.log(isBlacklisted);
    var person;
    if (name != null && personIdToUpdate != null) {
      console.log("inside != null");
      person = people.data.find(x => x._id == personIdToUpdate);
      if (person) {
        person.label = name;
        person.blacklisted = isBlacklisted;
        isBlacklisted
          ? await whitelistPersonInSystem(personIdToUpdate)
          : await blacklistPersonInSystem(personIdToUpdate);
      }
      console.log(people);
    } else if (isBlacklisted != null && isBlacklisted != undefined) {
      console.log("inside isblacklisted != null");
      person = people.data.find(x => x._id == personIdToUpdate);
      if (person) {
        person.blacklisted = isBlacklisted;
        //updating database to update the values
        isBlacklisted
          ? await blacklistPersonInSystem(personIdToUpdate)
          : await whitelistPersonInSystem(personIdToUpdate);
      }
    } else {
      console.log("inside else");
      person = people.data.find(x => x._id == personIdToUpdate);
      var person1 = people.data.find(y => y._id == personIdToUpdate);
      people.blackListed = person1.blackListed;
      isBlacklisted
        ? await blacklistPersonInSystem(personIdToUpdate)
        : await whitelistPersonInSystem(personIdToUpdate);
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
    <div style={{ overflowX: "auto" }}>
      {/* {()=>console.log(peopleData)} */}
      <Table>
        <TableHead>
          <TableRow>
            {headings.map(heading => {
              return <TableHeading>{heading.heading}</TableHeading>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {isDataLoaded
            ? people.data.map((person, id) => {
                return (
                  <Row>
                    <TableData>{person._id}</TableData>
                    <TableData
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setSelectedPerson(person);
                      }}
                    >
                      {person._id == personToEdit && editToggled == true ? (
                        <input
                          type="text"
                          placeHolder={person.label}
                          onChange={x => setNewPersonName(x.target.value)}
                        />
                      ) : (
                        person.label
                      )}
                    </TableData>
                    <TableData>
                      {person._id == personToEdit && editToggled ? (
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
                      <DeleteButton onClick={() => deletePerson(person._id)}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </DeleteButton>
                      {/* onpress of edit button */}
                      <EditButton
                        onClick={() => {
                          setPersonToEdit(person._id);
                          if (editToggled) {
                            setBlackListValue(getBlacklistValue(person));
                            updatePerson(
                              personToEdit,
                              newPersonName,
                              blackListValue
                            );
                            // console.log(getBlacklistValue(person))
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
                            person._id == personToEdit && editToggled
                              ? faCheck
                              : faEdit
                          }
                        />
                      </EditButton>
                      {person._id == personToEdit && editToggled ? (
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
              })
            : null}
        </TableBody>
      </Table>
    </div>
  );
};

//getting the blacklisted values to display in the select menu
const getBlacklistValue = person => {
  var value = blacklistValues.find(x => x.value == person.blacklisted);
  // console.log(value);
  return value;
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
  display: block;
`;
const TableRow = styled.tr`
  display: block;
  background: #333;
  width: 100%;
`;
const Row = styled.tr`
  background: #ededed;
  border-bottom: 1px solid #333;
  width: 100%;
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
