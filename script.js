const textElement = document.getElementById('changingText');
const texts = ['Web Developer', 'Web Designer', ''];
let index = 0;

function changeText() {
  textElement.textContent = texts[index];
  index = (index + 1) % texts.length;
}

setInterval(changeText, 2000); // Change text every 2 seconds
