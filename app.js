import { getPokemon } from "./src/components/searchPokemon.js"; 
import {getPokemonList} from "./src/services/pokemonApi.js"
import {addId} from "./src/services/pokemonApi.js"
// Query selector del botton search.

document.querySelector(".button-search").addEventListener("click", getPokemon)


