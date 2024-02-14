import ComboHandler from "./donna.js"
import ComboLeo from "./leo.js";

const comboLeo = new ComboLeo();
const comboHandler = new ComboHandler();

const sprite = document.getElementById('yuji');
// Nombre de pixels par pas de déplacement

const jumpVelocity = 5;
// Variable pour suivre l'état du saut
let isJumping = false;


window.addEventListener('keydown', handleKeyPress);
const step = 10; 
// code movement donna
function handleKeyPress(event) {
  const keyPressed = event.key;

  if (keyPressed === 'ArrowRight') {
    moveRight();
  } else
  if (keyPressed === 'ArrowLeft') { 
    moveLeft();
  } else
  if (keyPressed === 'ArrowUp') {
    performJump()
  }
}

function moveRight() {
  const currentPosition = parseInt(sprite.style.left) || 0;
  const newPosition = currentPosition + step;
  sprite.style.left = `${newPosition}px`;
  sprite.classList.add('yuji');
}
function moveLeft() {
  const currentPosition = parseInt(sprite.style.left) || 0;
  const newPosition = currentPosition - step;
  sprite.style.left = `${newPosition}px`;
}

function performJump() {
  isJumping = true;
  const currentPosition = parseInt(sprite.style.top) || 0;
  const top = 1;
  const newPosition = currentPosition - top;
   sprite.style.top = `${newPosition}px`;
    
  // } 
  
  // sprite.classList.add('yuji');
  
}  
// Récupérer les éléments DOM des div combos
const comboYuji = document.querySelector('.yujiPied');



let tousLesObstacles = [".obstacle", ".obstacle2", ".obstacle3"];
let tousLesObstacles2 = [".obstacle4", ".obstacle5", ".obstacle6"];

// Retourne un chiffre aléatoire entre 0 et la taille du tableau
function getRandomNumber(tableau) {
  return Math.floor(Math.random() * tableau);
}

// Retourne un des obstacles du premier tableau
function getRandomObstacle() {
  return tousLesObstacles[getRandomNumber(tousLesObstacles.length)];
}

// Retourne un des obstacles du deuxième tableau
function getRandomObstacle2() {
  return tousLesObstacles2[getRandomNumber(tousLesObstacles2.length)];
}

// Fonction pour faire bouger un obstacle toutes les 2,1 secondes
function obstacleBouge() {
  let obstacleAleatoire = getRandomObstacle();
  let obstacleChoisi = document.querySelector(obstacleAleatoire);
  obstacleChoisi.classList.add("animationObstacle");

  setTimeout(function () {
    obstacleChoisi.classList.remove("animationObstacle");
  }, 2000);

  setTimeout(obstacleBouge, 2100);
}


