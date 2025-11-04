//your JS code here. If required.
const buttons = document.querySelectorAll(".btn");
let currentAudio = null;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const sound = e.target.getAttribute("data-sound");

    if (e.target.classList.contains("stop")) {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
    } else {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }

      currentAudio = new Audio(`sounds/${sound}`);
      currentAudio.play();
    }
  });
});
