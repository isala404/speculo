import React from "react";
import styled from "styled-components";
import { BasicButton } from "../../button/button.component";

export const CarouselItem = ({ key, time, imageSrc, onclick }) => {
  return (
    <Card>
      <Overlay />
      <div>
        <div></div>
        <div>{time}</div>
      </div>
      <div style = {{zIndex:2}}>
        <BasicButton buttonTitle={"Select"} onClick={onclick} />
      </div>
    </Card>
  );
};

const Card = styled.div`
  border-radius: 4px;
  height: 400px;
  width: 300px;
  border: 2px solid #333;
  margin: 0em;
  cursor: pointer;
  object-fit: fill;
  background: url("https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg");
`;


const Overlay = styled.div`
  overflow: hidden;
  position: fixed;
  width: 300px;
  height: 400px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
  border-radius: 4px
`;

const Image = styled.img`
  overflow: hidden;
  width: 300px;
  height: auto;
`;
