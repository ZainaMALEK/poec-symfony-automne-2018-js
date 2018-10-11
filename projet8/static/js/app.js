// ciblage du DOM
const btnPrimary = document.querySelector('#btnTest');
const box = document.querySelector('#box');
const counter = document.querySelector('#counter');

// Paramètres
const config = {
  delay: 2000
}

// variable globale permettant de controler l'intervale
let interv = null;

// Fonctions
function addEvents() {
  btnPrimary.addEventListener('click', displayBox);
}

function displayBox() {
  if (interv == null) {
    box.style.display = 'block';
    counter.innerText = config.delay / 1000;
    setTimeout(hideBox, config.delay);
    interv = setInterval(countdown, 1000);
  }
}

function hideBox() {
  box.style.display = 'none';
  clearInterval(interv);
  interv = null;
}

function countdown() {
  // conversion en number de la chaîne
  // exemple: '4' => 4
  let currentValue = parseInt(counter.innerText);
  counter.innerText = currentValue - 1;
}

function message() {console.log('coucou');}
function message2() {console.log('ciao');}
function message3(msg) {console.log(msg);}

function test() {
  setTimeout(message, 5000);
  setTimeout(message2, 8000);
  setTimeout(message3, 2000, 'Bravo !');
  setTimeout(message3, 10000, 'Bsartek !');
  console.log('Salut');
}

function init() {
  addEvents();
  countdown();
  //setInterval(message, 2000);
}

init();
