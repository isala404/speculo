import React, { useState, useEffect } from "react";
import styled from "styled-components";

export const TimeCard = ({ timestamp, video, ctx, canvas, onSeek }) => {
  const [image, setImage] = useState(null);
  // useEffect(() => {
  //   console.log("use efffect");
  //   if (image == null) {
  //     console.log("useeffect if");
  //     var img = updateImg();
  //     setImage(img);
  //   }
  // }, [image]);

  // const updateImg = async () => {
  //   var time = timestamp;
  //   var vid = video;
  //   var context = ctx;
  //   var canvasElement = canvas;
  //   var image = await grabVideoFrame(time, vid, context, canvasElement);
  //   console.log(image);
  //   setImage(image);
  //   return image;
  // };

  // //function to get video snapshot of a video frame provided the time
  // const grabVideoFrame = async (time, video, ctx, canvas) => {
  //   var vid = video;
  //   vid.currentTime = await time;
  //   //drawing the video frame into the canvas
  //   ctx.drawImage(vid, 0, 0, canvas.width, canvas.height);
  //   var dataURI = canvas.toDataURL("image/jpeg");
  //   //getting the footage snapshot
  //   return dataURI;
  // };

  return (
    <CardDiv
      className="card"
      imgSrc={image}
      id="timeCard"
      onClick={onSeek}
      style={{ cursor: "pointer" }}
    >
      <div style={{ margin: "auto", textAlign: "center", marginTop: 40 }}>
        <div className="timestamp">
          Time: {/* The time will be shown here */}
          <span>{timestamp}s</span>
        </div>
        <TimeProgress></TimeProgress>
      </div>
    </CardDiv>
  );
};

const TimeProgress = styled.div`
  position: relative;
  top: 0px;
  z-index: 30;
  width: 100%;
  height: 5px;
  margin-top: 20px;
  border-radius: 10px;
  background: rgb(0, 154, 217);
  background: linear-gradient(
    90deg,
    rgba(38, 33, 111, 1) 0%,
    rgba(20, 255, 191, 1) 100%
  );
  transition: 0.6s ease-out;
`;

const CardDiv = styled.div`
  display: inline-block;
  background: rgba(12, 22, 43, 1);
  background-image: url(${props => props.imgSrc});
  background-size: 400px 300px;
  margin: 2.5em 0.3em;
  width: 200px;
  height: 100px;
  color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 1px 10px #ccc;
  transition: transform 0.3s;
  scale: 1;
  :hover {
    color: #45dea5;
    transform: scale(1.02);
    box-shadow: 3px 2px 15px #333;
    background: rgb(12, 22, 43);
    background: rgba(15, 30, 61, 1);
  }
`;
