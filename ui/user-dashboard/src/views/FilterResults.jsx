import React, { useState } from "react";
import styled from "styled-components";
import Select from "react-select";
import { TimeFilterer } from "../services/TimeFilterer.js";
import { BasicButton } from "../components/button/button.component";
import { Grid, Row, Col } from "react-flexbox-grid";
import "../styles/filter.style.scss";

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
  width: 1000px;
  table-layout: fixed;
  border-collapse: collapse;
  text-align: left;
  border-radius: 10px;
  overflow: hidden;
  margin: auto;
`;

const TableBody = styled.tbody`
  display: block;
  width: 100%;
  overflow: ${props => (props.scrollable ? "auto" : "hidden")};
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
const Rows = styled.tr`
  width: 100%;
  animation: ${props =>
    !props.deleted ? "0.4s ease-out 0s 1 appear" : "0.4s ease-out 0s 1 delete"};
  :nth-child(even) {
    background: #ededed;
    transition: 0.1s;
    opacity: 1;
  }

  /* https://stackoverflow.com/questions/6805482/css3-transition-animation-on-load */
  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes delete {
    0% {
      transform: translateX(0%);
      opacity: 1;
    }
    100% {
      transform: translateX(100%);
      opacity: 0;
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

const FilterResults = ({ allDetections }) => {
  const [ detections ] = useState (allDetections);

  // hard coded example
//   const [detections] = useState([
//     {
//       id: 1,
//       name: "Akassh",
//       timestamps: [5, 60, 100, 1200],
//       blacklisted: true
//     },
//     { id: 2, name: "Visal", timestamps: [1000], blacklisted: false },
//     {
//       id: 3,
//       name: "Nisal",
//       timestamps: [100, 500, 1200, 1500],
//       blacklisted: true
//     },
//     { id: 4, name: "UnknownPerson", timestamps: [100, 500], blacklisted: true }
//   ]);

  // react hooks to access state
  const [filteredResults,setFilteredResults] = useState(null);      // hook that contains the array of filtered results
//   const [filteredResults, setFilteredResults] = useState(detections); // hook that contains the array of filtered results

  const [selectedOption, setSelectedOption] = useState("less_than_equal"); // value of the option that was chosen by the user will be hear
  const [timeGap, setTimeGap] = useState(0); // value of the Time Gap Sensitivity that was chosen by the user will be hear
  const [totalTime, setTotalTime] = useState(0); // value of the Total Time that was chosen by the user will be hear

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
    setTimeGap(e.target.value); // setting selectedOption's value
  };

  //function that handles and retrieves the value of the select menu
  const handleSelectorChange = e => {
    setSelectedOption(e.value); // setting selectedOption's value
  };

  //function that handles and retrieves the value of the Total time
  const handleTotalTimeChange = e => {
    setTotalTime(e.target.value); // setting selectedOption's value
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
      person => allFilteredIDs.includes(person.id) // get all info of people who's IDs have been received after filtering
    );

    
    // add id, name, total time, blacklist status into filtered results array
    let allFilteredDetections = [];

    allFilteredPeople.forEach(person => {
      const index = allFilteredIDs.indexOf(person.id);
      const totalDetectedTimeOfPerson = allTotalDetectionTimes[index];

      allFilteredDetections.push({
        id: person.id,
        name: person.name,
        totalTime: totalDetectedTimeOfPerson,
        blacklisted: person.blacklisted
      });
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
    <Grid>
      <div style={{ marginTop: "4em" }}>


        <Row>
          <Col xs={12} sm={12} md={4} lg={4}>
            <div style={{ float: "left" }}>
              <span>Time Gap Sensitivity </span>

              {/* <Input
                    type = "number"
                    placeholder = "Minutes"
                    id = "minutesInput"
                    name = "minutesInput"
                    min = "0"
                /> */}
              <Input
                className="time-inputs"
                type="number"
                placeholder="Seconds"
                id="secondsGapInput"
                name="secondsGapInput"
                min="0"
                onChange={handleTimeGapChange}
              />
            </div>
          </Col>
          <Col xs={12} sm={12} md={4} lg={6} style={{ float: "left" }}>
            <Row>
              <label for="minutesInput">Total Time</label>

              <div style={{ width: "230px", display: "inline-block" }}>
                <Select
                  className="time-inputs"
                  options={conditions}
                  onChange={handleSelectorChange}
                  defaultValue={conditions[0]}
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
                className="time-inputs"
                type="number"
                placeholder="Seconds"
                id="secondsTotalTimeInput"
                name="secondsTotalTimeInput"
                min="0"
                onChange={handleTotalTimeChange}
              />
            </Row>
          </Col>
          <Col xs={12} sm={12} md={4} lg={2}>
            <BasicButton
              buttonTitle="Filter Results"
              onClick={() => displayFilteredResults()}
            />
          </Col>
        </Row>
        <Row style={{ marginTop: "1em" }}>
          {/* table to display filtered results */}
          {filteredResults && (
            <Table>
              <TableHead>
                <TableRow>
                  {headings.map(heading => {
                    return <TableHeading> {heading.headingName} </TableHeading>;
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredResults.map(person => {
                  // display table only if there are any filtered result, else HAVE TO GIVE A MESSAGE TO THE USER
                  return (
                    <Rows>
                      <TableData>{person.id}</TableData>
                      <TableData>{person.name}</TableData>
                      <TableData>{person.totalTime}</TableData>
                      <TableData>{person.blacklisted.toString()}</TableData>
                    </Rows>
                  );
                })}
              </TableBody>
            </Table>
          )}
        </Row>
      </div>
    </Grid>
  );
};

export default FilterResults;
