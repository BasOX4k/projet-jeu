import ComboHandler from "./donna.js"
import ComboLeo from "./leo.js";

const comboLeo = new ComboLeo();
const comboHandler = new ComboHandler();

const spriteLeonardo = document.getElementById('leonardo');
const stepLeonardo = 10;


window.addEventListener('keydown', moveleonardo);
function moveleonardo(event) {
  const keyPressedLeonardo = event.key;
  if (keyPressedLeonardo === 'é') {
    moveRightL();
  }
  if (keyPressedLeonardo === '&') {
    moveLeftL();
  }
}
function moveRightL() {
  const currentPosition = parseInt(leonardo.style.left) || 0;
  const newPosition = currentPosition + step;
  leonardo.style.left = `${newPosition}px`;
  leonardo.classList.add('leonardo')
  setTimeout(() => {
    leonardo.classList.remove('leonardo')
  },1800)
}

function moveLeftL() {
  const currentPosition = parseInt(leonardo.style.left) || 0;
  const newPosition = currentPosition - step;
  leonardo.style.left = `${newPosition}px`;
}



const sprite = document.getElementById('donna');
const step = 10; // Nombre de pixels par pas de déplacement



window.addEventListener('keydown', moveSprite);


function moveSprite(event) {
  const keyPressed = event.key;

  if (keyPressed === 'ArrowRight') {
    moveRight();
  } 
  if (keyPressed === 'ArrowLeft') { 
    moveLeft();
  }
 
}

function moveRight() {
  const currentPosition = parseInt(donna.style.left) || 0;
  const newPosition = currentPosition + step;
  donna.style.left = `${newPosition}px`;
  donna.classList.add('donna')
  setTimeout(() => {
    donna.classList.remove('donna')
  }, 1800)
}
function moveLeft() {
  const currentPosition = parseInt(donna.style.left) || 0;
  const newPosition = currentPosition - step;
  donna.style.left = `${newPosition}px`;
}


