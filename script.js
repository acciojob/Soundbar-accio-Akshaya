// Array of sound names
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

// Select the container for buttons
const buttonsContainer = document.getElementById("buttons");

// Function to stop all sounds
function stopAllSounds() {
    sounds.forEach((sound) => {
        const audio = document.getElementById(sound);
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }
    });
}

// Function to play a sound
function playSound(sound) {
    stopAllSounds(); // Stop other sounds before playing
    const audio = document.getElementById(sound);
    if (audio) {
        audio.play();
    }
}

// Generate buttons dynamically
sounds.forEach((sound) => {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.textContent = sound;
    button.addEventListener("click", () => playSound(sound));

    // Append button to the container
    buttonsContainer.appendChild(button);

    // Add audio element for the sound
    const audio = document.createElement("audio");
    audio.id = sound;
    audio.src = `sounds/${sound}.mp3`; // Assuming sounds folder has .mp3 files
    document.body.appendChild(audio);
});

// Create the "Stop" button
const stopButton = document.createElement("button");
stopButton.classList.add("stop");
stopButton.textContent = "stop";
stopButton.addEventListener("click", stopAllSounds);
buttonsContainer.appendChild(stopButton);
