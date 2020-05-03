import React, { useState } from "react";
import styled from "styled-components";
import Select from "react-select";
import {TimeFilterer} from '../services/TimeFilterer.js';
import {BasicButton} from "../components/button/button.component";

const Input = styled.input`
  background: white;
  padding: 0.4em;
  width: 75px;
  border: 1px solid #ffffff;
  border-radius: 3px;
  border: 1px solid #2bba85;
  height: 30px;
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
  clear: both;
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

    const [ detections ] = useState (allDetections);

    // hard coded example
    // const [ detections ] = useState ([
    //     {_id: 1, name: "Akassh", timestamps: [5, 60, 100, 1200], blacklisted: true},
    //     {_id: 2, name: "Visal", timestamps: [1000],  blacklisted: false},
    //     {_id: 3, name: "Nisal", timestamps: [100, 500, 1200, 1500],  blacklisted: true},
    //     {_id: 4, name: "UnknownPerson", timestamps: [100, 500], blacklisted: true}
    // ]
    // );

    // react hooks to access state
    const [filteredResults,setFilteredResults] = useState(null);      // hook that contains the array of filtered results
    // const [filteredResults , setFilteredResults] = useState(detections);      // hook that contains the array of filtered results

    const [selectedOption, setSelectedOption] = useState("less_than_equal");        // value of the option that was chosen by the user will be hear
    const [timeGap, setTimeGap] = useState(0);        // value of the Time Gap Sensitivity that was chosen by the user will be hear
    const [totalTime, setTotalTime] = useState(0);        // value of the Total Time that was chosen by the user will be hear


    const headings = [
        { id: 1, headingName: "ID" },
        { id: 2, headingName: "NAME" },
        { id: 3, headingName: "TOTAL TIME" },
        { id: 4, headingName: "BLACKLISTED" }
    ];

    const conditions = [
        { value: "less_than_equal", label: "Less than or Equal to" },
        { value: "less_than", label: "Less than" },
        { value: "equal", label: "Equal to" },
        { value: "more_than", label: "More than" },
        { value: "more_than_equal", label: "More than or Equal to" }
    ];
    


    //function that handles and retrieves the value of the input Time gap sensitivity
    const handleTimeGapChange = e => {
        setTimeGap(e.target.value);      // setting selectedOption's value
      };

    //function that handles and retrieves the value of the select menu
    const handleSelectorChange = e => {
        setSelectedOption(e.value);      // setting selectedOption's value
      };

    //function that handles and retrieves the value of the Total time
    const handleTotalTimeChange = e => {
        setTotalTime(e.target.value);      // setting selectedOption's value
      };
    

     //function that handles and retrieve the value of the switch
    const displayFilteredResults = () => {

        console.log(timeGap + " : " + selectedOption + " : " + totalTime);

        // filter records and retrieve response (object of ids array & total times array)
        const res = TimeFilterer(detections, timeGap, selectedOption, totalTime);
        // console.log(res);

        // break down the object array into id & total times
        const allFilteredIDs = res.allChosenPeople;
        const allTotalDetectionTimes = res.allDetectionTimes;


        // use detections array to get blacklist status and name using id
        let allFilteredPeople = detections.filter(
            person => allFilteredIDs.includes(person.id)        // get all info of people who's IDs have been received after filtering
          );

        // add id, name, total time, blacklist status into filtered results array
        let allFilteredDetections = [];

        allFilteredPeople.forEach(person => {
            const index = allFilteredIDs.indexOf(person._id);
            const totalDetectedTimeOfPerson = allTotalDetectionTimes[index];

            allFilteredDetections.push(
                {
                    id : person.id,
                    name : person.label,
                    totalTime: totalDetectedTimeOfPerson,
                    blacklisted : person.blacklisted
                }
            )

        });
        console.log(allFilteredDetections);
        if (allFilteredDetections.length === 0) {
            alert("No Records Matched the Given Conditions");
        }

        // set filtered results from here.
        // from the response arrays received
        setFilteredResults(allFilteredDetections);
    };


    return (
        <div style={{marginTop:"2em"}}>

            {/* test filter function */}

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
            
            <div style = {{float: "left", display: "inline-block"}}>
                <span>Time Gap Sensitivity </span>
                
                {/* <Input
                    type = "number"
                    placeholder = "Minutes"
                    id = "minutesInput"
                    name = "minutesInput"
                    min = "0"
                /> */}
                <Input
                    type = "number"
                    placeholder = "Seconds"
                    id = "secondsGapInput"
                    name = "secondsGapInput"
                    min = "0"
                    onChange = {handleTimeGapChange}
                />
            </div>
            
            <div style = {{float: "left", display: "inline-block", marginLeft: "120px"}}>
                <label for="minutesInput">Total Time</label>
                
                <div style={{ width: "230px", display: "inline-block"}}>
                    <Select
                        options={conditions}
                        onChange={handleSelectorChange}
                        defaultValue = {conditions[0]}
                    />
                </div>

                {/* <Input
                    type = "number"
                    placeholder = "Minutes"
                    id = "minutesInput"
                    name = "minutesInput"
                    min = "0"
                /> */}
                <Input
                    type = "number"
                    placeholder = "Seconds"
                    id = "secondsTotalTimeInput"
                    name = "secondsTotalTimeInput"
                    min = "0"
                    onChange = {handleTotalTimeChange}
                />

            </div>

            <BasicButton
                buttonTitle = "Filter Results"
                onClick = {() => displayFilteredResults()}
            />

            {/* table to display filtered results */}
            {filteredResults && <Table>
                <TableHead>
                    <TableHeadRow>
                        {headings.map(heading => {
                            return <TableHeading> {heading.headingName} </TableHeading>;
                        })}
                    </TableHeadRow>
                </TableHead>
                <TableBody>
                    {filteredResults.map(person => {            // display table only if there are any filtered result, else HAVE TO GIVE A MESSAGE TO THE USER
                        return (
                            <Row>
                                <TableData>{person.id}</TableData>
                                <TableData>{person.name}</TableData>
                                <TableData>{person.totalTime}</TableData>
                                <TableData>{person.blacklisted.toString()}</TableData>
                            </Row>
                        );
                    })}
                </TableBody>
        </Table>}

        </div>
    );
};

export default FilterResults;