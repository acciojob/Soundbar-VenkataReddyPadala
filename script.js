const buttons = document.querySelectorAll('.btn');
const stopBtn = document.querySelector('.stop');

const audios = [];
for (let i = 1; i <= 6; i++) {
  // Using a silent base64-encoded audio clip (1 second of silence)
  const audio = new Audio("data:audio/mp3;base64,//uQxAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAACcQCAAwACABAAZGF0YQAAAAA=");
  audios.push(audio);
}

// Stop all sounds
function stopAll() {
  audios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
}


buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    stopAll();
    const audio = audios[index];
    audio.play().catch(() => {}); 
    console.log(`Playing sound ${index + 1}`); 
  });
});

// Stop button
stopBtn.addEventListener('click', stopAll);
