"use strict";
function getPokemon() {
  fetch('https://pokeapi.co/api/v2/pokemon')
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      let random = Math.floor(Math.random() * 20)
      return fetch(data.results[random].url)
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.species.name)
      // return fetch()

    })
    .catch(function (error) {
      console.log('Requestfailed', error)
    });
}
let store = getPokemon()
