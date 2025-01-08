//your JS code here. If required.
const soundFiles = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']; // Sound file names without extensions
        const soundDirectory = './sounds/';
        const buttonsContainer = document.getElementById('buttons');

        const createButton = (label, className, onClickHandler) => {
            const button = document.createElement('button');
            button.className = className;
            button.textContent = label;
            button.addEventListener('click', onClickHandler);
            return button;
        };

        const sounds = {};

        // Create buttons for each sound
        soundFiles.forEach(sound => {
            const audio = new Audio(`${soundDirectory}${sound}.mp3`);
            sounds[sound] = audio;

            const button = createButton(sound, 'btn', () => {
                stopAllSounds();
                audio.play();
            });

            buttonsContainer.appendChild(button);
        });

        // Create a stop button
        const stopButton = createButton('stop', 'btn stop', () => {
            stopAllSounds();
        });

        buttonsContainer.appendChild(stopButton);

        // Stop all sounds
        function stopAllSounds() {
            Object.values(sounds).forEach(audio => {
                audio.pause();
                audio.currentTime = 0;
            });
        }
