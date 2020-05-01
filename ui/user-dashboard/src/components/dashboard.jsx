import React, { Component } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "@videojs/themes/dist/fantasy/index.css";
import { TimeCard } from "../components/TimeCard";
import Person from "./person-card/PersonCard";
import PersonLoader from "./person-card/PersonLoader";
import "../styles/dashboard.style.scss";
import styled from "styled-components";
import "../styles/videojsStyle.scss";
import VideoSnapshot from "video-snapshot";
import {
  retrieveAllDetections,
  deleteFaceFromSystem,
  editNameInSystem,
  blacklistPersonInSystem,
  whitelistPersonInSystem
} from "../services/DetectionsManagement";
import { Grid, Row, Col } from "react-flexbox-grid";
// import { GetWindowSize } from "../helpers/window-size";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.choosenPersonToEdit = this.choosenPersonToEdit.bind(this);
    this.editPersonSave = this.editPersonSave.bind(this);

    this.state = {
      allDetections: [],           // stores all the detected faces with the timestamps
      processing: true,           // processing status of video - to handle displaying detections once received
      // allDetections: people,
      selectedPerson: null,
      seekTime: 0,
      chosenIndexToEdit: 0,
      videoWidth: null,
      videoHeight: 100,
      windowHeight: window.innerHeight
    };

    this.videoPlayer = null;
    // videojs video player is assigned to this variable. Used to access controls of videojs

    this.container = null;
    this.video = null;
    this.canCapture = null;
    this.canvas = null;
    this.ctx = null;
    this.result = null;
  }

  onChange = async e => {
    const snapshoter = new VideoSnapshot(e);
    const previewSrc = await snapshoter.takeSnapshot();
    console.log(previewSrc);
    // const img = document.createElement("img");

    // img.src = previewSrc;

    // document.body.appendChild(img);
  };

  snapshot = () => {
    document
      .querySelector("#videoPlayer")
      .addEventListener(
        "change",
        this.onChange(
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        )
      );
  };

  componentDidMount() {

    //for grabbing a screencapture
    this.container = document.getElementById("videoPlayer");
    this.video = document.createElement("video");
    this.video.width = 600;
    this.canCapture = true;
    if (!this.video.canPlayType("video/mp4")) {
        this.canCapture = false;
        return;
    }

    if (sessionStorage.getItem('videoURL') != null){
        // Get saved data from sessionStorage
        let data = JSON.parse(sessionStorage.getItem('videoURL'));
        console.log(data);
        this.videoNode.src = data.src;
        this.videoNode.type = data.type;
        this.videoNode.load();
        this.videoNode.onloadeddata = function() {
        this.videoNode.play();
    }
        this.setState({videoSRC: data});

    } else{
        // redirect back to uploading footage? / show message that video isn't available
    }

    
    this.video.src ="../../demo.mp4";
    this.container.appendChild(this.video);
    this.video.pause();
    // this.video.play();
    this.video.hidden = true;
    this.video.muted = true;
    this.canvas = document.createElement("canvas");
    this.canvas.width = 1600;
    this.canvas.height = 1000;
    this.ctx = this.canvas.getContext("2d");
    // this.video.hidden = true;


    // instantiate Video.js
    this.videoPlayer = videojs("videoPlayer", { responsive: true });
    this.videoPlayer.responsive(true);

    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log("onPlayerReady", this);
    });

    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
    //settin the viewport dimensions
    

    // get detected faces with timestamps from the backend
    this.getAllDetections();

  }
  
  componentDidUpdate() {
    window.addEventListener("resize", this.updateDimensions);
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }
  
  // for testing purposes
  timeout = (ms) => { 
    return new Promise(resolve => setTimeout(resolve, ms));
}


  //function to get the width and height of the viewport dynamically
  updateDimensions = () => {
    var videoHeight = document.getElementById("videoPlayer").offsetHeight;
    var videoWidth = document.getElementById("videoPlayer").offsetWidth;
    var windowHeight = window.innerHeight;
    this.setState({
      videoHeight: videoHeight,
      videoWidth: videoWidth,
      windowHeight: windowHeight
    });
  };

  // this method seeks the video to the specified timestamp
  // jump to time stamp of current time-card
  seekToTime(time) {
    this.videoPlayer.currentTime(time);
  }

  showTimeCards(person) {
    // updating state of selectedPerson
    var selection = this.state.selectedPerson;
    if (selection === null) {
      this.setState({ selectedPerson: person });
    } else {
      if (selection.id === person.id) {
        this.setState({ selectedPerson: null });
      } else {
        this.setState({ selectedPerson: person });
      }
    }
  }


  // Get all detected people with detected timestamps in a video
  async getAllDetections() {
    try { 
        // const res = await retrieveAllDetections();
        // this.setState({processing:false , allDetections: res});

        await this.timeout(5000);     // tester
        this.setState({processing:false , allDetections: people});
    } catch (e) {
        console.log(e);
    }
}


  // Edit name/ black-list status of a person in the system db & display in UI
async editPersonSave(newPersonDetails) {
    const chosenIndexToEdit = this.state.chosenIndexToEdit;
    let oldDetailsOfPerson = this.state.allDetections[chosenIndexToEdit];

    let newDetectionsArray = [...this.state.allDetections];
    newDetectionsArray[chosenIndexToEdit] = newPersonDetails; // replacing the chosen index with the person details obtained from the pop-up component
    this.setState({ allDetections: newDetectionsArray });
    

    // send patch requests to db ---

    // check if the name has changed
    if (oldDetailsOfPerson.name !== newPersonDetails.name){
        try{
            const res = editNameInSystem(newPersonDetails.id, newPersonDetails.name);
            console.log(res);
        } catch (e) {
            console.log(e);
        }
    }

    // check if the blacklist status has changed
    if (oldDetailsOfPerson.blacklisted !== newPersonDetails.blacklisted){
        try{
            let res = null;
            if(newPersonDetails.blacklisted === true){           // blacklist a person
                res = await blacklistPersonInSystem(newPersonDetails.id);
            } else if (newPersonDetails.blacklisted === false){      // whitelist a person
                res = await whitelistPersonInSystem(newPersonDetails.id);
            }
            console.log(res);
        } catch (e) {
            console.log(e);
        }
    }
  }

  // Delete known people from the system db
  async deletePerson(personIdToBeDeleted) {
    try {
      const res = await deleteFaceFromSystem(personIdToBeDeleted);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
    //To refresh html page content
    let newDetectionsArray = this.state.allDetections.filter(
      person => person.id !== personIdToBeDeleted
    );
    this.setState({ allDetections: newDetectionsArray });
  }

  // choosen index of the person to be edited
  choosenPersonToEdit(index) {
    this.setState({
      chosenIndexToEdit: index
    });
  }

  render() {
    const { selectedPerson } = this.state;
    return (
      <div style={{ backgroundImage: 'url("../assets/wire-art.svg")' }}>
        {/* <div>
          <NavigationMenu />
        </div>
         */}

        <Grid>
          <Row>
            <Col xs={12} sm={12} md={12} lg={9}> 
              <div id="video-js-responsive-container vjs-hd videoContainer">
                {<video
                  ref={node => (this.videoNode = node)}
                  id="videoPlayer"
                  className="video-js vjs-fluid vjs-theme-fantasy"
                  data-setup='{ "controls": true, "autoplay": false, "fluid":true, "playbackRates":[0.25, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4] }'
                  type= "video/mp4"
                >
                  <source
                    // src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    src = {this.props.videoSRC}

                    type="video/mp4"
                  />
                  {/* video that needs to be added to check for faces will be opened here */}
                </video>}
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={3}>
              <div className="allDetectedFaces">
                <PersonDiv
                  style={{ height: this.state.videoHeight, overflowY: "auto" }}
                >
                
                {this.state.processing &&
                  <>
                    <PersonLoader />
                    <PersonLoader />
                    <PersonLoader />
                    <PersonLoader />
                  </>
                }


                  {/* display all the names of the people recognized */}
                  {!this.state.processing && this.state.allDetections.map((person, index) => (    // display only after detections are processed and received
                    <div key={index}>
                      <Person
                        key={index}
                        id={person.id}
                        name={person.name}
                        blacklisted={person.blacklisted}
                        timestamps={person.timestamps} // taking all the timestamps of the relevant person
                        onChoose={() => this.showTimeCards(person)} // display timestamps of the person
                        onChooseIndex={() => this.choosenPersonToEdit(index)} //Choose the index of a person to be edited
                        onSaveEdit={personDetails =>
                          this.editPersonSave(personDetails)
                        } // save the new details pf the person
                        onDelete={() => this.deletePerson(person.id)} // delete the person from the db
                      />
                    </div>
                  ))}

                  


                  <div style={{ height: 100 }}></div>
                </PersonDiv>
                <div className="fadeout" />
              </div>
            </Col>
          </Row>
          <Row>
            {selectedPerson != null ? (
              <div>
                <div
                  className="allTimeCards"
                  style={{ width: this.state.videoWidth}}
                >
                  <div className="timeCardContent">
                    {selectedPerson &&
                      selectedPerson.timestamps.map((timestamp, index) => {
                        // if a selectedPerson exists, display all Time Cards of that person
                        return (
                          <TimeCard
                            key={index}
                            timestamp={timestamp}
                            onSeek={() => this.seekToTime(timestamp)} // when button is pressed, go to seek time
                            ctx={this.ctx}
                            canvas={this.canvas}
                            video={this.video}
                          />
                        );
                      })}
                  </div>
                </div>
              </div>
            ) : null}
          </Row>
        </Grid>
        {/* <button onClick={this.getTimestampImages}>hajdfkjak</button> */}
      </div>
    );
  }
}

// const VideoDiv = styled.div`
//   margin-top: 10%;
//   margin-bottom: 10%;
//   width: 90%;
//   height: 90%;
// `;

const PersonDiv = styled.div``;

const people = [
  // hard coded example
  {
    id: 1,
    name: "Akassh",
    timestamps: [60, 100, 1200],
    blacklisted: true
  },
  { id: 2, name: "Visal", timestamps: [1000], blacklisted: false },
  {
    id: 3,
    name: "Nisal",
    timestamps: [100, 500, 1200, 1500, 200, 150, 900, 750, 12, 34, 78],
    blacklisted: true
  },
  {
    id: 4,
    name: "UnknownPerson",
    timestamps: [100, 500],
    blacklisted: true
  },
  {
    id: 5,
    name: "UnknownPerson",
    timestamps: [80, 60],
    blacklisted: true
  },
  {
    id: 6,
    name: "UnknownPerson",
    timestamps: [100, 500],
    blacklisted: true
  },
  {
    id: 7,
    name: "Kushan",
    timestamps: [100, 500],
    blacklisted: true
  },
  {
    id: 8,
    name: "UnknownPerson",
    timestamps: [100, 500],
    blacklisted: true
  }
];
