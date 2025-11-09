const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']; 

const buttonsContainer = document.getElementById('buttons');

sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;
  btn.setAttribute('data-sound', sound);  
  

  btn.addEventListener('click', () => {
    stopSounds();  
    const audio = document.getElementById(sound);
    if (audio) audio.play();  
  });

  buttonsContainer.appendChild(btn);

  const audio = document.createElement('audio');
  audio.src = `./sounds/${sound}.mp3`;  
  audio.id = sound;  
  document.body.appendChild(audio);
});

const stopBtn = document.createElement('button');
stopBtn.classList.add('btn', 'stop');
stopBtn.innerText = 'Stop';
stopBtn.setAttribute('data-sound', 'stop');  
stopBtn.addEventListener('click', stopSounds);
buttonsContainer.appendChild(stopBtn);

// Stop all sounds
function stopSounds() {
  sounds.forEach(sound => {
    const audio = document.getElementById(sound);
    if (audio) {
      audio.pause();
      audio.currentTime = 0;  
    }
  });
}
