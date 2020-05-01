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
      <Grid style={{ width: "100%", marginTop: "4em"}}>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} style={{ textAlign: "left" }}>
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
            {/* {isDataLoaded ? ( */}
            <PeopleTable
              isSwitchToggled={isSwitchToggled}
              searchValue={searchVal}
            />
            {/* ) : null} */}
        </Row>
      </Grid>
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

