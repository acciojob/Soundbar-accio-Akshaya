// Array of sounds
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

// Dynamically create buttons for each sound
const buttonsContainer = document.querySelector('.container');
sounds.forEach((sound) => {
    const button = document.createElement('button');
    button.classList.add('btn');
    button.textContent = sound;
    button.addEventListener('click', () => playSound(sound));
    buttonsContainer.appendChild(button);
});

// Play the selected sound
function playSound(sound) {
    stopSounds();
    const audio = new Audio(`./sounds/${sound}.mp3`);
    audio.play();
    audio.setAttribute('data-playing', 'true');
}

// Stop all sounds
function stopSounds() {
    const audios = document.querySelectorAll('audio[data-playing="true"]');
    audios.forEach((audio) => {
        audio.pause();
        audio.currentTime = 0;
        audio.removeAttribute('data-playing');
    });
}

// Create the stop button
const stopButton = document.createElement('button');
stopButton.classList.add('stop');
stopButton.textContent = 'stop';
stopButton.addEventListener('click', stopSounds);
buttonsContainer.appendChild(stopButton);
