// Create an object to map audio elements by their IDs
const audioElements = {
  sound1: document.getElementById('sound1'),
  sound2: document.getElementById('sound2'),
  sound3: document.getElementById('sound3'),
  sound4: document.getElementById('sound4'),
  sound5: document.getElementById('sound5'),
  sound6: document.getElementById('sound6'),
};

// Set the volume for all audio elements to 1.0 (maximum volume)
for (let sound in audioElements) {
  audioElements[sound].volume = 1.0;  // Set maximum volume
}

// Add event listeners to buttons
document.getElementById('btn-sound1').addEventListener('click', function() {
    document.getElementById('sound1').play();
});

document.getElementById('btn-sound2').addEventListener('click', function() {
    document.getElementById('sound2').play();
});

document.getElementById('btn-sound3').addEventListener('click', function() {
    document.getElementById('sound3').play();
});

document.getElementById('btn-sound4').addEventListener('click', function() {
    document.getElementById('sound4').play();
});

document.getElementById('btn-sound5').addEventListener('click', function() {
    document.getElementById('sound5').play();
});
document.getElementById('btn-sound6').addEventListener('click', function() {
    document.getElementById('sound6').play();
});
// Stop all sounds when the stop button is clicked
document.getElementById('stopButton').addEventListener('click', function() {
    const audios = document.getElementsByTagName('audio');
    for(let i = 0; i < audios.length; i++) {
        audios[i].pause();
        audios[i].currentTime = 0;  // Reset current time
    }
});