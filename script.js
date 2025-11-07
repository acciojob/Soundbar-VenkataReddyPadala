const buttons = document.querySelectorAll('.btn');
const stopBtn = document.querySelector('.stop');
const audios = [];

for (let i = 1; i <= 6; i++) {
  const audio = document.getElementById(`audio${i}`);
  audio.src = "data:audio/mp3;base64,//uQxAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAACcQCAAwACABAAZGF0YQAAAAA=";
  audios.push(audio);
}

function stopAll() {
  audios.forEach(a => {
    a.pause();
    a.currentTime = 0;
  });
}

buttons.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    stopAll();
    const audio = audios[i];
    audio.play().catch(() => {});
  });
});

stopBtn.addEventListener('click', stopAll);
