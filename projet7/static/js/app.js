// Ciblage du DOM
const destination = document.getElementById('destination');
const suggestionList = document.getElementById('suggestionList');

// Source de données
const cities = [
  {id:1, name: 'Turin', country: 'Italie'},
  {id:2, name: 'Paris', country: 'France'},
  {id:3, name: 'Milan', country: 'Italie'},
  {id:4, name: 'Arcueil', country: 'France'},
  {id:5, name: 'New-York', country: 'Etats-Unis'},
  {id:6, name: 'Cluj', country: 'Roumanie'},
  {id:7, name: 'Tanger', country: 'Maroc'},
  {id:8, name: 'Madrid', country: 'Espagne'},
  {id:9, name: 'Palerme', country: 'Italie'},
  {id:10, name: 'New-Delhi', country: 'Inde'},
  {id:11, name: 'Bergame', country: 'Italie'},
  {id:12, name: 'Tunis', country: 'Tunisie'},
  {id:13, name: 'Alger', country: 'Algérie'},
  {id:14, name: 'Oran', country: 'Algérie'}
]

// Paramètres
const config = {
  minLength: 2
}

// tableau des suggestions liées à la recherche
let suggestions = [];

// Fonctions
function addEvents() {
  destination.addEventListener('keyup', e => {

    clearSuggestions(); // purge des suggestions précédentes

    if (destination.value.length >= config.minLength) {
      getSuggestions(destination.value);
      displaySuggestions();
    }

  })
}

function getSuggestions(str) {
  // parcours des villes
  cities.forEach(city => {
    if (city.name.toLowerCase().indexOf(str.toLowerCase()) != -1) {
      suggestions.push(city);
    }
  })
}

function displaySuggestions() {
  // affiche dans le DOM les suggestions trouvées
  // dans le tableau suggestions
  let html = '';
  suggestions.forEach(suggestion => {
    html += '<li>'+ suggestion.name +'</li>';
  })
  // Affichage dans le DOM
  suggestionList.innerHTML = html;

  // ajout d'un écouteur sur les suggestions (li)
  let lis = suggestionList.querySelectorAll('li');
  for (let i=0; i<lis.length; i++) {
    lis[i].addEventListener('click', e => {
      destination.value = e.target.textContent;
      clearSuggestions();
    })
  }
}

function clearSuggestions() {
  // purge
  suggestions = [];
  suggestionList.innerHTML = '';
}

function init() {
  addEvents();
}

init();
