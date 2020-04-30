import React from "react"
import {BasicButton} from "../button/button.component"
import styled from "styled-components"
import {Row} from "react-flexbox-grid";

export const ApplicationItem =({appName, appContent, buttonOnclick, isFinalElement}) =>{
    return(
        <ApplicationDiv isFinalElement = {isFinalElement}>
              <Row>
                <ApplicationHeading>{appName}</ApplicationHeading>
              </Row>
              <Row>
                <ApplicationContent>
                  {appContent}
                </ApplicationContent>
              </Row>
              <Row>
                <ApplicationButtonDiv>
                  <BasicButton
                    buttonTitle="Check it out!"
                    buttonWidth={"60%"}
                  />
                </ApplicationButtonDiv>
              </Row>
            </ApplicationDiv>
    )
}


const ApplicationDiv = styled.div`
  text-align: left;
  margin-bottom: ${props => !props.finalElement ? "2em" : "0em"}
`;

const ApplicationHeading = styled.h3`
  font-family: "Gilroy-SemiBold";
  font-weight: bold;
`;

const ApplicationContent = styled.span`
  font-family: "Lexend Deca", sans-serif;
  text-align: justify;
`;

const ApplicationButtonDiv = styled.div`
  padding-top: 1em;
  width: 100%;
`;