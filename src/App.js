import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import audioFile from './AudioFile'
import ReactAudioPlayer from 'react-audio-player'
import './tag.mp3'

class App extends Component {

 tag = <ReactAudioPlayer
  src="https://www.pacdv.com/sounds/voices/am-i-totally-screwed-or.wav"
  autoPlay={false}
  controls={true}
  loop="true"

/>

  render() {
    const audioPlayer = <ReactAudioPlayer
    src="https://www.mfiles.co.uk/mp3-downloads/leyenda.mp3"
    autoPlay={false}
    controls
    onPlay={this.tag.onPlay}
  />
 

    return (
      <div className="App">
      <h1>Music Tag Feature</h1>
      <br></br>
      {audioPlayer}
      {this.tag}
     

      </div>
    );
  }
}

export default App;
