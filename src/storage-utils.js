import { pokemonArray } from '../src/pokemon.js';

export function findByPokemon(pokemonValue, pokemonArray) {
    for (let pokemon of pokemonArray){
        if (pokemonValue === pokemon.pokemon){
            return pokemon;
        }
    }
}

export function createInitialPokedex() {
    return pokemonArray.map(object => ({ 'pokemon': object.pokemon, appeared: 0, chosen: 0 }));
}

export function getPokedex() {
    let pokedexString = localStorage.getItem('POKEDEX');
    const pokedexObject = JSON.parse(pokedexString);
    return pokedexObject;
}

export function setPokedex() {
    let pokedex = getPokedex();
    // let appearOrChosenPoke = findByPokemon(pokemonValue, pokedex);
    // transform pokedex
    let pokedexString = JSON.stringify(pokedex);
    localStorage.setItem('POKEDEX', pokedexString);
}