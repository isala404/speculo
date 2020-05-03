import React, { useState} from "react";
import styled from "styled-components";
import Select from "react-select";
import {TimeFilterer} from '../services/TimeFilterer.js';

const Input = styled.input`
  background: white;
  padding: 0.4em;
  width: 75px;
  border: 1px solid #ffffff;
  border-radius: 3px;
  border: 1px solid #2bba85;
  height: 25px;
  transition: 0.3s;
  font-family: "Lexend Deca", sans-serif;
  font-size: 0.75em;
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
//   background: #0B162B;
  color: #fff;
`;
const TableHeadRow = styled.tr`
  display: block;
  background-color: #0B162B;
`;
const Row = styled.tr`
  background: white;
  border-bottom: 1px solid #A0FFDC;
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


const FilterResults = ({allDetections}) => {

    // hard coded example
    const [ detections ] = useState([
        {id: 1, name: "Akassh", timestamps: [60,100,1200], blacklisted: true},
        {id: 2, name: "Visal", timestamps: [1000],  blacklisted: false},
        {id: 3, name: "Nisal", timestamps: [100,500,1200, 1500],  blacklisted: true},
        {id: 4, name: "UnknownPerson", timestamps: [100,500], blacklisted: true}
    ]);


    // react hooks to access state
    // const [filteredResults,setFilteredResults] = useState(detections);      // hook that contains the array of filtered results
    const [filteredResults] = useState(detections);      // hook that contains the array of filtered results
    // const [timeGapSensitivity, setTimeGapSensitivity] = useState(50);       // time gap sensitivity that can be allowed by the user

    // an effect hook can be used for search
    // useEffect(() => {
    //     let filtered = 
    // });


    const headings = [
        { id: 1, headingName: "ID" },
        { id: 2, headingName: "NAME" },
        { id: 3, headingName: "TIME STAMPS" },
        { id: 4, headingName: "TOTAL TIME" },
        { id: 5, headingName: "BLACKLISTED" }
    ];

    const conditions = [
        { value: "less_than_equal", label: "Less than or Equal to" },
        { value: "less_than", label: "Less than" },
        { value: "equal", label: "Equal to" },
        { value: "more_than", label: "More than" },
        { value: "more_than_equal", label: "More than or Equal to" }
    ];
    

    return (
        <div style={{overflowX: "auto"}}>

            {/* test filter function */}
            {console.log(TimeFilterer(detections, 400, "more_than", 400))}

            {/* <Switch onChange={handleSwitchChange} checked={isSwitchToggled} /> */}
            {/* <Input
                type={"text"}
                placeholder={"Select a person to Search for"}
                onChange={e => {
                setSearchVal(e.target.value);
                var result = search(people, searchVal);
                setResults(result);
                }}
            /> */}

            <label for="minutesInput">Time Gap Sensitivity</label>
            
            <Select
                options={conditions}
                // onChange={handleSelectorChange}
                defaultValue = {conditions[0]}
            />

            <Input
                type = "number"
                placeholder = "Minutes"
                id = "minutesInput"
                name = "minutesInput"
                min = "0"
            />
            <Input
                type = "number"
                placeholder = "Seconds"
                id = "secondsInput"
                name = "secondsInput"
                min = "0"
            />
            <Table>
                <TableHead>
                    <TableHeadRow>
                        {headings.map(heading => {
                            return <TableHeading style={ heading.id===1 ? {width:'50px'} : {}}>{heading.headingName}</TableHeading>;
                        })}
                    </TableHeadRow>
                </TableHead>
                <TableBody>
                    {filteredResults.map(person => {
                        return (
                            <Row>
                                <TableData style={{width:'50px'}}>{person.id}</TableData>
                                <TableData>{person.name}</TableData>
                                <TableData>{person.timestamps.toString()}</TableData>
                                <TableData>{/*person.id*/}</TableData>
                                <TableData>{person.blacklisted.toString()}</TableData>


                                {/* <TableData
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
                                </TableData> */}
                                {/* <TableData>
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
                            </TableData> */}
                        </Row>
                    );
                })}
            </TableBody>
        </Table>
        </div>
    );
};

export default FilterResults;