const spriteHammer = document.getElementById('hammer');
const stepHammer = 10;


window.addEventListener('keydown', moveHammer);
function moveHammer(event) {
  const keyPressedHammer = event.key;
  if (keyPressedHammer === 'é') {
    moveRightH();
  }
  if (keyPressedHammer === '&') {
    moveLeftH();
  }
}
function moveRightH() {
  const currentPosition = parseInt(hammer.style.left) || 0;
  const newPosition = currentPosition + step;
  hammer.style.left = `${newPosition}px`;

}

function moveLeftH() {
  const currentPosition = parseInt(hammer.style.left) || 0;
  const newPosition = currentPosition - step;
  hammer.style.left = `${newPosition}px`;
}



const sprite = document.getElementById('mickey');
const step = 10; // Nombre de pixels par pas de déplacement

const onHit = document.getElementById('combo-mickey');

window.addEventListener('keydown', moveSprite);

window.addEventListener('keydown', hit);

function hit(event) {
  const keyOnHit = event.key;
  if (keyOnHit === 'KeyT') {

  }
}

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
  const currentPosition = parseInt(mickey.style.left) || 0;
  const newPosition = currentPosition + step;
  mickey.style.left = `${newPosition}px`;
  mickey.classList.add('mickey')
  setTimeout(() => {
    mickey.classList.remove('mickey')
  },1000)
}
function moveLeft() {
  const currentPosition = parseInt(mickey.style.left) || 0;
  const newPosition = currentPosition - step;
  mickey.style.left = `${newPosition}px`;
}


// document.addEventListener('keydown', jump);

// function jump(event) {
  // if (event.keyCode === 32) { // Touche "Espace"
    // const sprite = document.getElementById('sprite');
    // sprite.style.animation = 'jump 0.5s ease alternate'; // Lancer l'animation de saut
    // setTimeout(() => { // Réinitialiser l'animation après le saut
      // sprite.style.animation = '';
    // }, 500);
  // }
// }
