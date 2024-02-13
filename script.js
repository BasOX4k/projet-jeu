import ComboHandler from "./donna.js"
import ComboLeo from "./leo.js";

const comboLeo = new ComboLeo();
const comboHandler = new ComboHandler();

// const spriteLeonardo = document.getElementById('leonardo');
// const stepLeonardo = 10;


// window.addEventListener('keydown', moveleonardo);
// function moveleonardo(event) {
//   const keyPressedLeonardo = event.key;
//   if (keyPressedLeonardo === 'é') {
//     moveRightL();
//   }
//   if (keyPressedLeonardo === '&') {
//     moveLeftL();
//   }
// }
// function moveRightL() {
//   const currentPosition = parseInt(leonardo.style.left) || 0;
//   const newPosition = currentPosition + step;
//   leonardo.style.left = `${newPosition}px`;
//   leonardo.classList.add('leonardo')
//   setTimeout(() => {
//     leonardo.classList.remove('leonardo')
//   },1800)
// }

// function moveLeftL() {
//   const currentPosition = parseInt(leonardo.style.left) || 0;
//   const newPosition = currentPosition - step;
//   leonardo.style.left = `${newPosition}px`;
// }



const sprite = document.getElementById('yuji');
const step = 10; // Nombre de pixels par pas de déplacement



window.addEventListener('keydown', moveSprite);

// code movement donna
function moveSprite(event) {
  const keyPressed = event.key;

  if (keyPressed === 'ArrowRight') {
    moveRight();
  } else
  if (keyPressed === 'ArrowLeft') { 
    moveLeft();
  }
 
}

function moveRight() {
  const currentPosition = parseInt(sprite.style.left) || 0;
  const newPosition = currentPosition + step;
  sprite.style.left = `${newPosition}px`;
  sprite.classList.add('yuji')
  setTimeout(() => {
    sprite.classList.remove('yuji')
  }, 1800)
}
function moveLeft() {
  const currentPosition = parseInt(sprite.style.left) || 0;
  const newPosition = currentPosition - step;
  sprite.style.left = `${newPosition}px`;
}

function yujiPied(){
  yuji.classList.add("yujiPied");

    setTimeout(function() {
      yuji.classList.remove("yujiPied");
    }, 1800)
}

// Récupérer les éléments DOM des div combos
const yuji = document.querySelector('.yujiPeid');
const leoCombo = document.getElementById('leo-combo');

// Ajouter un écouteur d'événement pour détecter les clics sur les div combos
// yuji.addEventListener('keydown', () => {
//     // Faire disparaître la div Donna
//     document.getElementById('yuji').style.display = 'none';
// });

// leoCombo.addEventListener('keydown', () => {
//     // Faire disparaître la div Leonardo
//     document.getElementById('leonardo').style.display = 'none';
// });


