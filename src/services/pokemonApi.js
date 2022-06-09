let idPokemon1 = 3;

export async function getPokemonList() {
  for (let i = 0; i < 3; i++) {
    await idPokemon1++;

    fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon1}`)
      .then((response) => response.json())
      .then((data) => {
        document.querySelector('.pokemon_row1').innerHTML += `
    <div class="pokemon-container">
    <img class="pokemon-images" src="${data.sprites.other['official-artwork'].front_default}" alt="${data.name}">
    <ul class ="pokemon-info">
    <li class ="pokemon-title">${data.name}</h2>
    <li class ="pokemon-id">No.${data.id}</h2>
    </ul>
     </div>
    `;
      })
      .catch((error) => {
        document.querySelector(`.pokemon`).innerHTML = `
     <p class="error">POKÉMON NAME NOT FOUND!</p>
    `;
      });
  }
  return;
}

export function addId() {
  var elem = document.querySelector('.pokemon_row1');

  elem.parentNode.removeChild(elem);
  idPokemon1 = +3;
  getPokemonList()
}
