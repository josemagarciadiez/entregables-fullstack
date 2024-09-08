async function getData(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Algo salío mal.");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function getPokemons() {
  const pokemonList = await getData(
    "https://pokeapi.co/api/v2/pokemon?limit=31"
  );

  let pokemons = [];

  pokemonList.results.forEach(async (pokemon) => {
    const pokemonData = await getData(pokemon.url);
    pokemons.push(pokemonData);
  });

  console.log(pokemons);
}

getPokemons();
