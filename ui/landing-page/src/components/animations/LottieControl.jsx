import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from './face-scanning-blue.json'

export default class LottieAnimation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isStopped: false, isPaused: false};
  }

  render() {
    // const buttonStyle = {
    //   display: 'block',
    //   margin: '10px auto'
    // };

    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData.default,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return <div>
      <Lottie options={defaultOptions}
              height={400}
              width={400}
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}/>
      {/* <button style={buttonStyle} onClick={() => this.setState({isStopped: true})}>stop</button>
      <button style={buttonStyle} onClick={() => this.setState({isStopped: false})}>play</button>
      <button style={buttonStyle} onClick={() => this.setState({isPaused: !this.state.isPaused})}>pause</button> */}
    </div>
  }
}

// ref: https://github.com/chenqingspring/react-lottie
// anim-source: https://lottiefiles.com/8683-face-scanning