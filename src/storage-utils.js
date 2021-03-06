import { pokemonArray } from '../src/pokemon.js';

// Tested and Passing
export function getPokedex() {
    let pokedexString = localStorage.getItem('POKEDEX');
    const pokedexObject = JSON.parse(pokedexString);
    return pokedexObject;
}

// Tested and Passing
export function findByPokemon(pokemonArray, pokemonValue) {
    for (let pokemon of pokemonArray){
        if (pokemonValue === pokemon.pokemon){
            return pokemon;
        }
    }
}

// Tested and Passing
export function createInitialPokedex() {
    let pokeObject = pokemonArray.map(object => ({ 'pokemon': object.pokemon, appeared: 0, chosen: 0 }));
    localStorage.setItem('POKEDEX', JSON.stringify(pokeObject));
}

// Tested and Passing
export function encounterPokemon(randomArray) {
    let pokedex = getPokedex();
    for (let each of randomArray) {
        let poke = pokedex[each];
        poke.appeared++;
    }
    setPokedex(pokedex);
    // let pokedexString = JSON.stringify(pokedex);
    // localStorage.setItem('POKEDEX', pokedexString);
}

// Tested and Passing
export function capturePokemon(pokemon) {
    let pokedex = getPokedex();
    let poke = findByPokemon(pokedex, pokemon);
    poke.chosen++;
    // let pokedexString = JSON.stringify(pokedex);
    // localStorage.setItem('POKEDEX', pokedexString);
    setPokedex(pokedex);
}

// Tested and Passing
export function setPokedex(pokedex) {
    let pokedexString = JSON.stringify(pokedex);
    localStorage.setItem('POKEDEX', pokedexString);
}

// Tested and Passing
export function setTotal(pokedex) {
    let pokedexString = JSON.stringify(pokedex);
    localStorage.setItem('TOTAL', pokedexString);
}

// Tested and Passing
export function getTotal() {
    let pokedexString = localStorage.getItem('TOTAL');
    const pokedexObject = JSON.parse(pokedexString);
    return pokedexObject;
}

export function addTotalPokedex() {
    let currentPokedex = getPokedex();
    let currentTotal = getTotal();
    // add appeared and caught values of current pokedex to current total
}