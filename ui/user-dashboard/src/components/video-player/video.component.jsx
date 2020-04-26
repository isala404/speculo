import React, { Component } from "react";
import videojs from "video.js";

export default class Video extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // instantiate Video.js
    this.videoPlayer = videojs("videoPlayer");
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log("onPlayerReady", this);
    });
  }

  render(){
      return(
        <>
        <video
          ref={node => (this.videoNode = node)}
          id="videoPlayer"
          className="vjs-footage video-js vjs-theme-fantasy"
          data-setup='{ "controls": true, "autoplay": false, "fluid":true, "playbackRates":[0.25, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4] }'
        >
          <source
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4"
            type="video/mp4"
          />
          {/* video that needs to be added to check for faces will be opened here*/}
        </video>
      </>
      )
  }
}
