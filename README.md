This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In this project you can play audio files with the tag automatically added.

### install the following

npm install --save react-audio-player
npm i sox-audio

First I need to concat the users audio file with the standard munion tag. When that is done, add the output of the concat the the react audio player for streaming. In the final version, the concat will happen when a user uploads a file and the new file will be stored in the data base along with the original. The original copy can only be accessed when the buying user completes payment.

New to convert uploaded audio file to 1 channel. To do this, follow these instructions:
convert mp3 to a wav file => sox filename.mp3 filename.wav
conver the new wav to a 1 channel wav => sox -c 1 filename.wav

Or simply you can merge two files despite the properties of it => sox -M tagFile.wav beat.mp3