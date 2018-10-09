// Ciblage du DOM
const tabLinks = document.getElementsByClassName('tabLink');
const sections = document.getElementsByTagName('section');

// Fonctions
function addEvents() {
  // on attribue à chaque lien un écouteur d'événement
  for (let i=0; i<tabLinks.length; i++) {
    tabLinks[i].addEventListener('click', e => {
      reset();
      sections[i].style.display = 'block';
    })
  }
}

function reset() {
  // masque toutes les sections
  for (let i = 0; i < sections.length; i++) {
    sections[i].style.display = 'none';
  }
}

function init() {
  // on affiche la première section par défaut
  sections[0].style.display = 'block';
  addEvents();
}

init();
