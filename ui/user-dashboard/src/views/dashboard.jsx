import React, { Component } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "@videojs/themes/dist/fantasy/index.css";
import TimeCard from "../components/TimeCard";
import Person from "../components/PersonCard";
import EditPopUp from "../components/EditPopUp.jsx";
import styled from "styled-components";
import { PersonTable } from "../components/person-table/table.component";
import "../styles/videojsStyle.scss";
import { NavigationMenu } from "../components/navigation-bar/navigation-bar.component";
import "../styles/commonStyles.scss";
import {
  retrieveAllDetections,
  deleteFaceFromSystem
} from "../services/DetectionsManagement";
import Video from "../components/video-player/video.component";
import { TimeStampCarousel } from "../components/carousel/carousel/carousel.component";
import { Carousel } from "react-bootstrap";
import { MyTable } from "../components/person-table/table-test";
// import { My } from "../components/person-table/table-test";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.choosenPersonToEdit = this.choosenPersonToEdit.bind(this);
    this.editPersonSave = this.editPersonSave.bind(this);

    this.state = {
      // allDetections: [],           // stores all the detected faces with the timestamps
      allDetections: [
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
          timestamps: [100, 500, 1200, 1500],
          blacklisted: true
        },
        {
          id: 4,
          name: "UnknownPerson",
          timestamps: [100, 500],
          blacklisted: true
        }
      ],
      selectedPerson: null,
      seekTime: 0,
      chosenIndexToEdit: 0,
      searchValue: "",
      searchResults: [],
      showEditText: false,
      personToEdit: null
    };

    this.videoPlayer = null; // videojs video player is assigned to this variable. Used to access controls of videojs
  }

  componentDidMount() {
    // instantiate Video.js
    this.videoPlayer = videojs("videoPlayer");
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log("onPlayerReady", this);
    });
    this.setState({ searchResults: this.state.allDetections });

    // get detected faces with timestamps from the backend
    this.getAllDetections();
  }

  grabScreenShot() {
    this.videoPlayer.addEventListener("loadedmetadata", function() {}, false);
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  // this method seeks the video to the specified timestamp
  seekToTime(time) {
    this.videoPlayer.currentTime(time); // jump to time stamp of current time-card
  }

  showTimeCards(person) {
    this.setState({ selectedPerson: person }); // updating state of selectedPerson
  }

  // Get all detected people with detected timestamps in a video
  async getAllDetections() {
    try {
      const res = await retrieveAllDetections();
      this.setState({ allDetections: res });
    } catch (e) {
      console.log(e);
    }
  }

  // Edit name/ black-list status of a person in the system db & display in UI
  async editPersonSave(newPersonDetails) {
    console.log(newPersonDetails);

    // console.log(this.state.allDetections);

    const chosenIndexToEdit = this.state.chosenIndexToEdit;

    // console.log(chosenIndexToEdit)

    let newDetectionsArray = [...this.state.allDetections];

    console.log(newDetectionsArray);

    newDetectionsArray[chosenIndexToEdit] = newPersonDetails; // replacing the chosen index with the person details obtained from the pop-up component

    this.setState({ allDetections: newDetectionsArray });

    console.log(this.state.allDetections);

    // send patch request to db
  }

  // Delete known people from the system db
  async deletePerson(personIdToBeDeleted) {
    deleteFaceFromSystem(personIdToBeDeleted);

    //To refresh html page content
    let newDetectionsArray = this.state.allDetections.filter(
      person => person.id != personIdToBeDeleted
    );
    this.setState({
      allDetections: newDetectionsArray,
      searchResults: newDetectionsArray
    });

    // console.log(newDetectionsArray);
    // console.log(this.state.allDetections);
  }

  // choosen index of the person to be edited
  choosenPersonToEdit(index) {
    this.setState({
      chosenIndexToEdit: index
    });
    console.log(this.state.chosenIndexToEdit);
    console.log(this.state.allDetections);
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <div>
              {/* <NavigationMenu /> */}

              <div data-vjs-player>
                <div id="videoContainer">
                  <video
                    ref={node => (this.videoNode = node)}
                    id="videoPlayer"
                    className="video-js vjs-theme-fantasy"
                    data-setup='{ "controls": true, "autoplay": false, "fluid":true, "playbackRates":[0.25, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4] }'
                  >
                    <source
                      src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4"
                      type="video/mp4"
                    />
                    {/* video that needs to be added to check for faces will be opened here */}
                  </video>
                </div>
              </div>

              <div className="allDetectedFaces">
                {/* display all the names of the people recognized */}
                {this.state.allDetections.map((person, index) => (
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


