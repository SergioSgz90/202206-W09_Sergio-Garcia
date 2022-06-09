export function getPokemon() {
  const name = document.querySelector('.name-pokemon').value;
  const namePokemon = name.toLowerCase();
  // idpok ++

  fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector('.pokemon').innerHTML = `
    <img class="pokemon-img" src="${data.sprites.other['official-artwork'].front_default}" alt="${namePokemon}">
     <h2 class ="pokemon-title">${data.name}</h2>
     <h2 class ="pokemon-id">No.${data.id}</h2>
    `;
    })
    .catch((error) => {
      document.querySelector(`.pokemon`).innerHTML = `
     <p class="error">POKÉMON NAME NOT FOUND!</p>
    `;
    });
}
