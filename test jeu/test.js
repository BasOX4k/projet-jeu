const sprite = document.getElementById('mickey');
const step = 10; // Nombre de pixels par pas de déplacement

window.addEventListener('keydown', moveSprite);

function moveSprite(event) {
  const keyPressed = event.key;

  if (keyPressed === 'ArrowRight') {
    moveRight();
  } 
  if (keyPressed === 'ArrowLeft'){ 
    moveLeft();
  }
}

function moveRight() {
  const currentPosition = parseInt(mickey.style.left) || 0;
  const newPosition = currentPosition + step;
  mickey.style.left = `${newPosition}px`;
}
function moveLeft() {
  const currentPosition = parseInt(mickey.style.right) ||0;
  const newPosition = currentPosition + step;
  mickey.style.right = `${newPosition}px`;
}