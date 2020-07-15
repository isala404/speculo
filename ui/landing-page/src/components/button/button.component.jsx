import React from "react";
import styled from "styled-components";

export const BasicButton = ({buttonTitle, toggleShadow, buttonWidth, onClick}) => {
  return(
    <CustomPrimaryButton showShadow = {toggleShadow} width={buttonWidth} onClick={onClick}>{buttonTitle}</CustomPrimaryButton>
  );
}

const CustomPrimaryButton = styled.button`
  color: #2bba85;
  font-size: 1em;
  width: ${props => props.width!=null ? props.width : null};
  padding: 0.3em 1em;
  font-family: "Gilroy-Regular";
  border: 2px solid #2bba85;
  border-radius: 3px;
  box-shadow: ${props => props.showShadow ? "0px 0px 100px 4px #2bba85" : null};
  background: #2bba85;
  color: #ffffff;
  z-index: 1;
  transition: 0.3s;
  &:hover {
    background: #1ddd96;
    color: #ffffff;
    border: 2px solid #1ddd96;
    box-shadow: ${props => props.showShadow ? "0px 0px 200px 10px #1ddd96" : null};
  }
`;