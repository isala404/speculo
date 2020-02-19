import React from "react";
import "./button.style.scss"

export const Button = ({ onClickHandler, buttonTitle, buttonStyle }) => {
  return(<button className="button" style={buttonStyle} onClick={onClickHandler}>{buttonTitle}</button>)
};
