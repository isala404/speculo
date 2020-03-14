import React, {Component} from "react";
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import '@videojs/themes/dist/fantasy/index.css';
import TimeCard from "./timeCard";
import Person from "./person";

export default class DashBoard extends Component{
  constructor(props){
    super(props)

    this.state={
      allDetections: [
        {id: 1, faceName: "Akassh", timestamps: [60,100,1200]},
        {id: 2, faceName: "Visal", timestamps: [1000]},
        {id: 3, faceName: "Nisal", timestamps: [500,100,1200, 1500]}
      ]     // stores all the detected faces with the timestamps  ~ one time stamp each per person for now
      ,
      selectedPerson: null
      ,
      seekTime: 0
  };

  this.videoPlayer = null;     // videojs video player is assigned to this variable. Used to access controls of videojs

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
    seekToTime(time){
      // console.log("I was clicked")    // to test whether function gets called on button click
      this.videoPlayer.currentTime(time)   // jump to time stamp of current time-card
  }

  showTimeCards(person){
    console.log(person)

    this.setState({selectedPerson:person})    // updating state of selectedPerson
  }

  render(){
    return(
        <div>                              
            <div data-vjs-player>
            <video ref={ node => this.videoNode = node } id="videoPlayer" className="video-js vjs-theme-fantasy" width="800" height="450" data-setup='{ "controls": true, "autoplay": false}'>
                <source src="/Videos/random_video.mp4" type="video/mp4"/>
                {/* video that needs to be added to check for faces will be opened here */}
            </video>
            </div>

            {/* to test seeking functionality using videojs options */}
            {/* <button onClick= {() => this.videoPlayer.playbackRate(5)}>Adjust Options</button> */}

            {/* display all the names of the people recognized */}
            {this.state.allDetections.map(person => (
              <div key={person.id}>

                <Person 
                  key = {person.id}
                  name = {person.faceName}

                  onChoose = {() => this.showTimeCards(person)}
                  allTimestamps = {person.timestamps}     // taking all the timestamps of the relevant person

                  />

              </div>
            ))}


            {this.state.selectedPerson && this.state.selectedPerson.timestamps.map((timestamp, index) => {
              // if a selectedPerson exists, display all Time Cards of that person
              return (
                <TimeCard
                  key = {index}
                  timestamp = {timestamp}

                  onSeek = {() => this.seekToTime(timestamp)}    // when button is pressed, go to seek time
                />
)
            })}
        </div>
    )
}

}