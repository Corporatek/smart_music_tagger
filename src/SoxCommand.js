var SoxCommand = require('sox-audio');
var sox = require('sox');
var fs = require('fs');

// Returns errors and success messages
var addStandardListeners = function(command) {
	command.on('start', function(commandLine) {
		console.log('Spawned sox with command ' + commandLine);
	});

	command.on('progress', function(progress) {
	    console.log('Processing progress: ', progress);
	});

	command.on('error', function(err, stdout, stderr) {
	    console.log('Cannot process audio: ' + err.message);
	    console.log('Sox Command Stdout: ', stdout);
	    console.log('Sox Command Stderr: ', stderr)
	});

	command.on('end', function() {
		console.log('Sox command succeeded!');
		mergeFiles(merging, munionFileName)
		
	});
};
var addStandardListeners2 = function(command) {
	command.on('start', function(commandLine) {
		console.log('Spawned sox with command ' + commandLine);
	});

	command.on('progress', function(progress) {
	    console.log('Processing progress: ', progress);
	});

	command.on('error', function(err, stdout, stderr) {
	    console.log('Cannot process audio: ' + err.message);
	    console.log('Sox Command Stdout: ', stdout);
	    console.log('Sox Command Stderr: ', stderr)
	});

	command.on('end', function() {
		console.log('Sox command succeeded!');		
	});
};

// A string of the tag and the uploaded file
var fileNameList = ['/Users/newowner/Desktop/WDI/smart_music_tag/src/audiofiles/gunna.mp3', '/Users/newowner/Desktop/WDI/smart_music_tag/src/audiofiles/new_tag.mp3']

// Gets the duration of the audio file and stores the number in the uploadDur variable

var uploadDur = ""

var getDuration = sox.identify(fileNameList[0], function(err, results) {
	uploadDur = results.duration
	return uploadDur
    
  });

var y = 7.6

//Below gets how many times the tag will fit into the the uploaded mp3 file
var tagCount = function () {
	var x = Math.floor(uploadDur / y)
	return x
}

//Below adds the tag mp3 to an array the number of times it will fit into the track
var tagArray = []

(function appendFile() {
for(i = 0; i < tagCount(); i++) {
	tagArray.push(fileNameList[1])
	}
})()

// concat the files into a new one
var concatFiles = function(tagArray, outputPipe) {

	var command = SoxCommand();
	tagArray.forEach(function addInput(fileName) {
		command.input(fileName);
	});
	command.output(outputPipe)
		.outputFileType('mp3')
        .concat();

	addStandardListeners(command);
	command.run()
	return command;
};

//the new output file's name. Need to add a method that creates a unique file name everytime an upload is ran.
var outFileName = 'concatted_tag.mp3'
var munionFileName = 'tagged_beat.mp3'


var newTagFile = '/Users/newowner/Desktop/WDI/smart_music_tag/concatted_tag.mp3'
// Merge the new new tag file with the audio track

var uploaded = fileNameList[0]

var merging = [uploaded, newTagFile]

var mergeFiles = function(fileName, outputPipe) {
	var command = SoxCommand()
		.input('-M')
		.input(fileName[0])
		.input(fileName[1])

	command.output(outputPipe)
		.outputFileType('mp3')
		.outputChannels(1);
		// .concat()

		addStandardListeners2(command);
		command.run()
		return command;
}

//calling the concat function
concatFiles(tagArray, outFileName)

//calling the concat function
// mergeFiles(merging, munionFileName)

