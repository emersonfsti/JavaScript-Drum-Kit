function removeTransition(e) {
  if (e.propertyName !== "transform") return; // Skip if the transitioned property is not 'transform'
  e.target.classList.remove("playing"); // Remove the 'playing' class from the element
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // Select the audio element with the corresponding key code
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`); // Select the div element with the corresponding key code
  if (!audio) return; // Stop function if no audio element is found

  key.classList.add("playing"); // Add 'playing' class to the key div
  audio.currentTime = 0; // Rewind the audio to the start
  audio.play(); // Play the audio
}

const keys = Array.from(document.querySelectorAll(".key")); // Select all elements with the class 'key' and convert NodeList to array
keys.forEach((key) => key.addEventListener("transitionend", removeTransition)); // Add an event listener to each key element for transition end
window.addEventListener("keydown", playSound); // Add an event listener to the window for keydown events
