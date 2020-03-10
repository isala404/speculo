import React, {Component} from "react";
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import '@videojs/themes/dist/fantasy/index.css';

export default class DashBoard extends Component{
    state={
    };

    videoPlayer = null;     // videojs video player is assigned to this variable. Used to access controls of videojs
    
    render(){
        return(
            <div>                              
                <div data-vjs-player>
                <video ref={ node => this.videoNode = node } id="videoPlayer" className="video-js vjs-theme-fantasy" width="800" height="450" data-setup='{ "controls": true, "autoplay": false}'>
                    <source src="/Videos/FallingInLove.mp4" type="video/mp4"/>
                </video>
                </div>
                <button onClick= {() => this.videoPlayer.currentTime(500)}>Seek</button>
                {/* <button onClick= {() => this.videoPlayer.playbackRate(5)}>Adjust Options</button> */}
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


    // controlPlayer(){
    //   let video = videojs('#videoPlayer');
    //   this.player = video.playbackRate(20);
    //   // video.playbackRate(10);
    // }
}