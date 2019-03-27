import React from "react"

function audioFile(props) {
    return (
        <audio id="myAudio">
          <source src="gunna_beat.mp3" type="audio/mp3" />
        </audio>
    )
}

export default audioFile