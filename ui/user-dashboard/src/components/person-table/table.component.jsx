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
  deleteFaceFromSystem,
  retrieveAllRecords,
  whitelistPersonInSystem,
  blacklistPersonInSystem,
  editNameInSystem
} from "../../services/DetectionsManagement";
import Select from "react-select";
import "./table.style.scss"
import Skeleton from 'react-loading-skeleton';


export const PeopleTable = ({ isSwitchToggled, searchValue }) => {
  const [people, setPeople] = useState([]);
  //react hooks to access state
  const [results, setResults] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [personToEdit, setPersonToEdit] = useState(-1);
  const [editToggled, setEditToggled] = useState(false);
  const [newPersonName, setNewPersonName] = useState(null);
  const [blackListValue, setBlackListValue] = useState(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [isTyped, setIsTyped] = useState(false);
  const [isSelectorClicked, setIsSelectorClicked] = useState(false);
  const[deletedKey, setDeletedKey] = useState(-1);

  //updating the state on searchval change
  useEffect(() => {
    if (!isDataLoaded) {
      getData();
    }
    //searching the array of objects
    if (people.data) {
      var result = people.data.filter(person => {
        return person.label.toUpperCase().includes(searchValue.toUpperCase());
      });
      var arr = {data: result}
      console.log(arr)
      sortPeople(arr);
      setResults(arr);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue, isSwitchToggled, isDataLoaded]);

  //method to invoke request to get all the records
  const getData = async () => {
    await retrieveAllRecords().then(res => {
      setResults(res);
      setPeople(res);
      setIsDataLoaded(true);
    });
  };

  //function to delete a person on delete button press
  const deletePerson = async personIdToDelete => {
    //Delete request to backend
    deleteFaceFromSystem(personIdToDelete);
    if(results.data){
      var newArr = people.data.filter(person =>{
        return person._id !== personIdToDelete
      })
      var arr = {
        data: newArr
      }
      setTimeout(()=>{
        sortPeople(arr)
        setResults(arr)
        setDeletedKey(-1)
      }, 400)
    }
  };

  //function to patch label of a face 
  const updateName = async name => {
    selectedPerson.label = name;
    editNameInSystem(selectedPerson._id, name);
  };

  //function to patch blacklisted value of a face
  const updateBlacklistState = async isBlacklisted => {
    console.log(selectedPerson.label);
    selectedPerson.blacklisted = isBlacklisted;
    isBlacklisted
      ? await blacklistPersonInSystem(selectedPerson._id)
      : await whitelistPersonInSystem(selectedPerson._id);
  };

  //function that handles and retrieves the value of the select menu
  const handleSelectorChange = selectedOption => {
    console.log(selectedOption);
    if (selectedPerson.blacklisted !== selectedOption) {
      console.log("insidddeee");
      setIsSelectorClicked(true);
      setBlackListValue(selectedOption.value);
    }
  };

  //sorting people by id and blacklist
  const sortPeople = (arr) => {
    if (arr.data) {
      isSwitchToggled
        ? setResults({data:arr.data.sort(sortByLabel("label"))})
        : setResults({data:arr.data.sort(sortByBlackListedValue("blacklisted"))});
    }
  };
  //getting the blacklisted values to display in the select menu
const getBlacklistValue = person => {
  var value = blacklistValues.find(x => x.value === person.blacklisted);
  // console.log(value);
  return value;
};

//function to sort according to label
const sortByLabel = (property) => {
  return (a, b) => {
    if (a[property] > b[property]) return 1;
    else if (a[property] < b[property]) return -1;
    return 0;
  };
};

//function to sort by blacklist value
const sortByBlackListedValue = (property) => {
  return (a, b) => b[property] - a[property]
};

  return (
    <div style={{ overflowX: "auto", margin: "0em 4em" }}>
      {/* {()=>console.log(peopleData)} */}
      <Table>
        <TableHead>
          <TableRow>
            {headings.map(heading => {
              return <TableHeading>{heading.heading}</TableHeading>;
            })}
          </TableRow>
        </TableHead>
        <TableBody scrollable= {isDataLoaded}>
          {results.data
            ? results.data.map((person, index) => {
                return (
                  <Row key={index} deleted={index===deletedKey ? true: false}>
                    <TableData>{person._id}</TableData>
                    <TableData
                      style={{ cursor: "pointer", overflow: "hidden", whiteSpace:"nowrap" }}
                      onClick={() => {
                        setSelectedPerson(person);
                      }}
                    >
                      {person._id === personToEdit && editToggled === true ? (
                        <input
                          type="text"
                          placeholder={person.label}
                          onChange={x => {
                            var charSeq = x.target.value;
                            if (charSeq !== "" && charSeq != null) {
                              setIsTyped(true);
                              setNewPersonName(x.target.value);
                            } else {
                              setIsTyped(false);
                            }
                            console.log(isTyped);
                          }}
                        />
                      ) : (
                        <div className="label" style={{width: 200, overflowX:"auto"}}>{person.label}</div>
                      )}
                    </TableData>
                    <TableData>
                      {person._id === personToEdit && editToggled ? (
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
                      {/* onpress of edit button */}
                      <EditButton
                        onClick={() => {
                          setPersonToEdit(person._id);
                          setSelectedPerson(person);
                          if (editToggled) {
                            if (isTyped && isSelectorClicked) {
                              updateName(newPersonName);
                              updateBlacklistState(blackListValue);
                            } else if (isTyped && !isSelectorClicked) {
                              updateName(newPersonName);
                            } else if (isSelectorClicked && !isTyped) {
                              updateBlacklistState(blackListValue);
                            }
                            setEditToggled(false);
                            sortPeople(results);
                          } else {
                            setEditToggled(true);
                            sortPeople(results);
                          }
                        }}
                      >
                        <FontAwesomeIcon
                          icon={
                            person._id === personToEdit && editToggled
                              ? faCheck
                              : faEdit
                          }
                        />
                      </EditButton>
                      {person._id === personToEdit && editToggled ? (
                        <CancelButton
                          onClick={() => {
                            setPersonToEdit(-1);
                            setEditToggled(false);
                          }}
                        >
                          <FontAwesomeIcon icon={faTimes} />
                        </CancelButton>
                      ) : null}

                      <DeleteButton
                        onClick={() => {
                          console.log("del");
                          setSelectedPerson(person);
                          setDeletedKey(index)
                          deletePerson(person._id);
                        
                        }}
                      >
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </DeleteButton>
                    </TableData>
                  </Row>
                );
              })
            : loadingAnimation()}
        </TableBody>
      </Table>
    </div>
  );
};

const loadingAnimation = () =>{
  var skeletons = []
  for (var i =0; i < 10; i++){
    skeletons.push(
      <Row>
              <TableData>
                <Skeleton/>
              </TableData>
              <TableData>
                <Skeleton/>
              </TableData>
              <TableData>
                <Skeleton/>
              </TableData>
              <TableData>
                <Skeleton/>
              </TableData>
            </Row>
    )
  }
  return skeletons;
}

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
  min-width: 600px;
  width: 1000px;
  table-layout: fixed;
  border-collapse: collapse;
  text-align: left;
  border-radius: 10px;
  overflow: hidden;
`;

const TableBody = styled.tbody`
  display: block;
  width: 100%;
  overflow: ${props => props.scrollable? "auto": "hidden"};
  height: 500px;
`;

const TableHead = styled.thead`
  width: 100%;
  color: #fff;
  display: table-header-group;
`;
const TableRow = styled.tr`
  display: block;
  background: rgba(15, 30, 61, 1);
  width: 100%;
`;
const Row = styled.tr`
  width: 100%;
  animation: ${props => !props.deleted ? "0.4s ease-out 0s 1 appear" : "0.4s ease-out 0s 1 delete"};
  :nth-child(even) {
    background: #ededed;
    transition: 0.1s;
    opacity: 1;
  }

  /* https://stackoverflow.com/questions/6805482/css3-transition-animation-on-load */
  @keyframes appear {
  0% {
    opacity:0
  }
  100% {
    opacity:1;
  }
}

@keyframes delete {
  0% {
    transform: translateX(0%);
    opacity:1
  }
  100% {
    transform: translateX(100%);
    opacity:0;
  }
}
`;


const TableHeading = styled.th`
  padding: 1em;
  text-align: left;
  width: 250px;
`;
const TableData = styled.td`
  padding: 1em;
  text-align: left;
  width: 250px;
`;

const DeleteButton = styled.button`
  color: #c21807;
  background-color: transparent;
  border: none;
  border-radius: 6px;
  outline: none;
  transition: 0.3s;
  margin-left: 1em;

  &:hover {
    color: white;
    background-color: #c21807;
  }
`;

const EditButton = styled.button`
  color: #2bba85;
  background-color: transparent;
  border: none;
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
