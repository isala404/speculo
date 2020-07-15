import React from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { CarouselItem } from "../carousel-item/carousel-item.component";

export const TimeStampCarousel = ({
  users,
  togglecarousel,
  videoPlayer,
}) => {
  const displayCarousel = () => {
    return (
      <Carousel slidesPerPage={4} arrows>
        {users.timestamps.map((timestamp, index) => {
          return (
            <CarouselItem
              time={timestamp}
              onclick={() => seekToTime(timestamp, videoPlayer)}
            />
          );
        })}
      </Carousel>
    );
  };

  return <>{togglecarousel ? displayCarousel() : null}</>;
};

//method that takes the videoPlayer object and sets the playing time
const seekToTime = (time, videoPlayer) => {
  videoPlayer.currentTime(time);
};
