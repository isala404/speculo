import React, {Component} from "react";
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import '@videojs/themes/dist/fantasy/index.css';
import TimeCard from "./timeCard";

export default class DashBoard extends Component{
    state={
        allDetections: [
          {id: 1, faceName: "Akassh", timeStamp: 60},
          {id: 2, faceName: "Visal", timeStamp: 1000},
          {id: 2, faceName: "Nisal", timeStamp: 100}
        ]     // stores all the detected faces with the timestamps  ~ one time stamp each per person for now

        ,
        seekTime: 0
    };

    videoPlayer = null;     // videojs video player is assigned to this variable. Used to access controls of videojs
    
    render(){
        return(
            <div>                              
                <div data-vjs-player>
                <video ref={ node => this.videoNode = node } id="videoPlayer" className="video-js vjs-theme-fantasy" width="800" height="450" data-setup='{ "controls": true, "autoplay": false}'>
                    <source src="/Videos/FallingInLove.mp4" type="video/mp4"/>
                    {/* video that needs to be added to check for faces will be opened here */}
                </video>
                </div>

                {/* to test seeking functionality using videojs options */}
                <button onClick= {() => this.videoPlayer.currentTime(50)}>Seek 50s</button>
                <button onClick= {() => this.videoPlayer.currentTime(700)}>Seek 700s</button>
                <button onClick= {() => this.videoPlayer.currentTime(1400)}>Seek 1400s</button>
                {/* <button onClick= {() => this.videoPlayer.playbackRate(5)}>Adjust Options</button> */}

                {/* for every time that exists, create a button and display */}
                {this.state.allDetections.map(person => (
                  <div key={person.id}>
                    <TimeCard
                      key = {person.id}
                      timeStamp = {person.timeStamp}

                      onSeek = {() => this.seekToTime(person.timeStamp)}    // when button is pressed, go to seek time
                    />

                    {/* to test whether multiple components are created
                    <button onClick= {() => this.videoPlayer.currentTime(1000)}>Seek 1000s</button> */}
                  </div>
                ))}

            </div>
        )
    }

    componentDidMount() {
        // instantiate Video.js
        this.videoPlayer = videojs('videoPlayer')
        this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
          console.log('onPlayerReady', this)
        });
      }
    
      // destroy player on unmount
    componentWillUnmount() {
        if (this.player) {
          this.player.dispose()
        }
      }

    
      // this method seeks the video to the specified timestamp
    seekToTime(timeStamp){
      console.log("I was clicked")    // to test whether function gets called on button click

      this.videoPlayer.currentTime(timeStamp)   // jump to time stamp of current time-card
  }
}