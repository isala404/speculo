import React from "react"
import {BasicButton} from "../button/button.component"
import styled from "styled-components"
import {Row} from "react-flexbox-grid";
import {Link} from "react-router-dom"


export const ApplicationItem =({appName, appContent, path, isFinalElement}) =>{
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
            <div style={{height : 20}} />
                {/* <Link to ={path}>
                  <BasicButton
                    buttonTitle="Check it out!"
                    buttonWidth={"60%"}
                  />
                </Link> */}
                </ApplicationButtonDiv>
              </Row>
            </ApplicationDiv>
    )
}


const ApplicationDiv = styled.div`
  text-align: left;
  margin-bottom: ${props => !props.isFinalElement ? "2em" : "0em"}
`;

const ApplicationHeading = styled.h3`
  font-family: "Gilroy-SemiBold";
  font-weight: bold;
`;

const ApplicationContent = styled.span`
  font-family: "Lexend Deca", sans-serif;
  text-align: justify;
  color: #979797;
`;

const ApplicationButtonDiv = styled.div`
  padding-top: 1em;
  width: 100%;
`;