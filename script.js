const audioElements = [];

function createAudioElement(id, src) {
    const audio = new Audio(src);
    audio.id = id;
    audioElements.push(audio);
}

document.getElementById('sound1').addEventListener('click', function() {
    createAudioElement('sound1', 'sounds/applause.mp3');
    audioElements[0].play();
});

document.getElementById('sound2').addEventListener('click', function() {
    createAudioElement('sound2', 'sounds/boo.mp3');
    audioElements[1].play();
});

document.getElementById('sound3').addEventListener('click', function() {
    createAudioElement('sound3', 'sounds/gasp.mp3');
    audioElements[2].play();
});

document.getElementById('sound4').addEventListener('click', function() {
    createAudioElement('sound4', 'sounds/tada.mp3');
    audioElements[3].play();
});

document.getElementById('sound5').addEventListener('click', function() {
    createAudioElement('sound5', 'sounds/victory.mp3');
    audioElements[4].play();
});

document.getElementById('sound6').addEventListener('click', function() {
    createAudioElement('sound6', 'sounds/wrong.mp3');
    audioElements[5].play();
});

document.getElementById('stopButton').addEventListener('click', function() {
    audioElements.forEach((audio) => {
        audio.pause();
        audio.currentTime = 0;
    });
});
