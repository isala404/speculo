import React, { useState, useEffect } from "react";
import { PeopleTable } from "../components/person-table/table.component";
import Switch from "react-switch";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

export const Admin = () => {
  const [isSwitchToggled, setSwitchToggle] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  //function that handles and retrieve the value of the switch
  const handleSwitchChange = checked => {
    setSwitchToggle(checked);
  };

  useEffect(() => {}, [searchVal]);
  return (
    <>
      <div>
        <Grid style={{ width: "100%", margin: "10%" }}>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6} style={{ textAlign: "left"}}>
              <span>Sort with ID and blacklist state</span>
              <Switch onChange={handleSwitchChange} checked={isSwitchToggled} />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} style={{ textAlign: "right" }}>
              <Input
                type={"text"}
                placeholder={"Select a person to Search for"}
                onChange={e => {
                  setSearchVal(e.target.value);
                }}
              />
            </Col>
          </Row>
          <Row>
            <div style={{margin:"auto"}}>
              <PeopleTable
                peopleData={people}
                isSwitchToggled={isSwitchToggled}
                searchValue={searchVal}
              />
            </div>
          </Row>
        </Grid>
      </div>
    </>
  );
};

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

const people = [
  // hard coded example
  { id: 1, name: "Akassh", timestamps: [60, 100, 1200], blacklisted: true },
  { id: 2, name: "Visal", timestamps: [1000], blacklisted: false },
  {
    id: 3,
    name: "Nisal",
    timestamps: [100, 500, 1200, 1500],
    blacklisted: true
  },
  { id: 4, name: "UnknownPerson", timestamps: [100, 500], blacklisted: true },
  {
    id: 5,
    name: "Kushan",
    timestamps: [100, 500, 1200, 1500],
    blacklisted: true
  },
  {
    id: 6,
    name: "Isala",
    timestamps: [100, 500, 1200, 1500],
    blacklisted: true
  }
];
