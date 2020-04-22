import React, { useState, useEffect } from "react";
import styled from "styled-components";

export const TimeCard = ({ timestamp, video, ctx, canvas, onSeek }) => {
  const [image, setImage] = useState(null);
  useEffect(() => {
      console.log("use efffect")
    if (image==null) {
        console.log("useeffect if")
      var img = updateImg();
      setImage(img);
    }
  }, [image]);

  const updateImg = async () => {
    var time = timestamp;
    var vid = video;
    var context = ctx;
    var canvasElement = canvas;
    var image = await grabVideoFrame(time, vid, context, canvasElement);
    console.log(image)
    setImage(image);
    return image;
  };

  //function to get video snapshot of a video frame provided the time
  const grabVideoFrame = async (time, video, ctx, canvas) => {
    var vid = video;
    vid.currentTime = await time;
    //drawing the video frame into the canvas
    ctx.drawImage(vid, 0, 0, canvas.width, canvas.height);
    var dataURI = canvas.toDataURL("image/jpeg");
    //getting the footage snapshot
    return dataURI;
  };
  return (
    <CardDiv
      imgSrc={image}
      id="timeCard"
      onClick={onSeek}
      style={{ cursor: "pointer" }}
    >
      <div>~Image of the TimeCard~</div>
      <div>
        Time: {/* The time will be shown here */}
        <span>{timestamp}s</span>
      </div>
    </CardDiv>
  );
};

const CardDiv = styled.div`
  display: inline-block;
  background: rgba(12, 22, 43, 1);
  background-image: url(${props => props.imgSrc});
  background-size: 400px 300px;
  margin: 0.5em;
  width: 400px;
  height: 300px;
  color: #ffffff;
  border-radius: 4px;
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
