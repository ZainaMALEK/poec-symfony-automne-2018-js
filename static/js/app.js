console.log('app.js chargé');

// liste des types en JS
let name = 'Del Piero'; // String
let age = 42; // Number
let retired = true; // Boolean
let team = null; // Null
let country = undefined; // Undefined (utilisé par le compilateur)

let teams = []; // tableau vide
let player = {
  firstname: 'Alessandro',
  lastname: 'Del Piero',
  age: 42,
  retired: true,
  country: 'Italy'
}

// Ciblage d'éléments du DOM
const sectionPlayers = document.getElementById('players');
const selectTeam = document.getElementById('selectTeam');

// Déclaration d'événements
selectTeam.addEventListener('change', e => {
  console.log(e.target.value);
})


let players = [
  {firstname: 'Blaise', lastname: 'Matuidi', num: 16, team: 'Juventus'},
  {firstname: 'Paolo', lastname: 'Dybala', num: 10, team: 'Juventus'},
  {firstname: 'Leo', lastname: 'Bonucci', num: 19, team: 'Juventus'},
  {firstname: 'Kylian', lastname: 'Mbappé', num: 7, team: 'PSG'}
];

// sectionPlayers.innerHTML = '<p>test</p>';

// ES5
// players.forEach(function (player) {
//   console.log(player)
// });


let list = '<table class="table table-bordered table-striped">';
list += '<thead><tr><th>Nom</th><th>Prénom</th><th>Equipe</th></tr></thead>';

// ES6 (arrow function)
players.forEach(player => {
  list += '<tr>';

  if (player.lastname.indexOf('ci') != -1) {
    list += '<td style="color:red">' + player.lastname + '</td>';
  } else {
    list += '<td>' + player.lastname + '</td>';
  }

  list += '<td>' + player.firstname + '</td>';
  list += '<td>' + player.team + '</td>';

  list += '</tr>';
})
list += '</table>';
sectionPlayers.innerHTML = list;



//
