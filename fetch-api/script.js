const POKEMON_TYPE_COLOR = {
  bug: "#94bc4a",
  dark: "#736c75",
  dragon: "#6a7baf",
  electric: "#e5c531",
  fairy: "#e397d1",
  fighting: "#cb5f48",
  fire: "#ea7a3c",
  flying: "#7da6de",
  ghost: "#846ab6",
  grass: "#71c558",
  ground: "#cc9f4f",
  ice: "#70cbd4",
  normal: "#aab09f",
  poison: "#b468b7",
  psychic: "#e5709b",
  rock: "#b2a061",
  steel: "#89a1b0",
  water: "#539ae2",
};

const POKEMON_TYPE_GRADIENT = {
  bug: "linear-gradient(180deg, hsla(81, 46%, 51%, 1) 31%, hsla(0, 0%, 100%, 1) 86%)",
  dark: "linear-gradient(180deg, hsla(287, 4%, 44%, 1) 30%, hsla(0, 0%, 100%, 1) 86%)",
  dragon:
    "linear-gradient(180deg, hsla(225, 30%, 55%, 1) 30%, hsla(0, 0%, 100%, 1) 86%)",
  electric:
    "linear-gradient(180deg, hsla(49, 78%, 55%, 1) 30%, hsla(0, 0%, 100%, 1) 86%)",
  fairy:
    "linear-gradient(180deg, hsla(314, 58%, 74%, 1) 30%, hsla(0, 0%, 100%, 1) 86%)",
  fighting:
    "linear-gradient(180deg, hsla(11, 56%, 54%, 1) 30%, hsla(0, 0%, 100%, 1) 86%)",
  fire: "linear-gradient(180deg, hsla(21, 81%, 58%, 1) 30%, hsla(0, 0%, 100%, 1) 86%)",
  flying:
    "linear-gradient(180deg, hsla(215, 60%, 68%, 1) 30%, hsla(0, 0%, 100%, 1) 86%)",
  ghost:
    "linear-gradient(180deg, hsla(261, 34%, 56%, 1) 30%, hsla(0, 0%, 100%, 1) 86%)",
  grass:
    "linear-gradient(180deg, hsla(106, 48%, 56%, 1) 30%, hsla(0, 0%, 100%, 1) 86%)",
  ground:
    "linear-gradient(180deg, hsla(38, 55%, 55%, 1) 30%, hsla(0, 0%, 100%, 1) 86%)",
  ice: "linear-gradient(180deg, hsla(185, 54%, 64%, 1) 30%, hsla(0, 0%, 100%, 1) 86%)",
  normal:
    "linear-gradient(180deg, hsla(81, 10%, 66%, 1) 30%, hsla(0, 0%, 100%, 1) 86%)",
  poison:
    "linear-gradient(180deg, hsla(298, 35%, 56%, 1) 30%, hsla(0, 0%, 100%, 1) 86%)",
  psychic:
    "linear-gradient(180deg, hsla(338, 69%, 67%, 1) 30%, hsla(0, 0%, 100%, 1) 86%)",
  rock: "linear-gradient(180deg, hsla(47, 34%, 54%, 1) 30%, hsla(0, 0%, 100%, 1) 86%)",
  steel:
    "linear-gradient(180deg, hsla(203, 20%, 61%, 1) 30%, hsla(0, 0%, 100%, 1) 86%)",
  water:
    "linear-gradient(180deg, hsla(210, 71%, 61%, 1) 30%, hsla(0, 0%, 100%, 1) 86%)",
};

function capitalizeFirstLeeter(word) {
  if (word.length === 0) {
    return word;
  }

  return word.charAt(0).toUpperCase() + word.slice(1);
}

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
  try {
    const pokemonList = await getData(
      "https://pokeapi.co/api/v2/pokemon?limit=100"
    );

    if (!pokemonList || !pokemonList.results) {
      throw new Error("No se pudo obtener el listado de Pokemons.");
    }

    const pokemons = await Promise.all(
      pokemonList.results.map((pokemon) => getData(pokemon.url))
    );

    return pokemons;
  } catch (error) {
    console.error(error);

    return [];
  }
}

function createPokemonCard(pokemon) {
  const $container = document.createElement("article");
  $container.classList.add("card_container");

  const $card = document.createElement("article");
  $card.classList.add("card_wrapper");

  const $image_container = document.createElement("div");
  $image_container.classList.add("image");

  const $clip = document.createElement("div");
  $clip.classList.add("clip");

  if (pokemon.types.length > 0) {
    $clip.style.background =
      POKEMON_TYPE_GRADIENT[pokemon.types[0].type["name"]];
  }

  const $img = document.createElement("img");
  $img.setAttribute(
    "src",
    `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`
  );
  $img.setAttribute("alt", `Image of ${pokemon.name}`);

  $image_container.appendChild($clip);
  $image_container.appendChild($img);

  const $details_container = document.createElement("div");
  $details_container.classList.add("details");

  const $header = document.createElement("div");
  $header.classList.add("header");

  const $div_1 = document.createElement("div");
  $div_1.classList.add("title");
  const $title = document.createElement("h2");
  const $id = document.createElement("p");

  $title.innerText = capitalizeFirstLeeter(pokemon.name);
  $id.innerText = `N° ${pokemon.id}`;

  $div_1.appendChild($title);
  $div_1.appendChild($id);

  $header.appendChild($div_1);

  const $div_2 = document.createElement("div");
  $div_2.classList.add("hp");
  const $hp_title = document.createElement("p");
  const $hp_value = document.createElement("h2");

  $hp_title.innerText = "HP";
  $hp_value.innerText = pokemon.stats[0].base_stat;

  $div_2.appendChild($hp_title);
  $div_2.appendChild($hp_value);

  $header.appendChild($div_2);

  const $badges = document.createElement("div");
  $badges.classList.add("badges");

  pokemon.types.forEach(({ type }) => {
    const $badge = document.createElement("div");
    $badge.classList.add("badge");

    const $icon = document.createElement("div");
    $icon.classList.add("icon");
    $icon.style.backgroundColor = POKEMON_TYPE_COLOR[type.name];

    const $img = document.createElement("img");
    $img.setAttribute("src", `./assets/icons/${type.name}.svg`);
    $img.setAttribute("alt", `${capitalizeFirstLeeter(type.name)} type icon.`);

    $icon.appendChild($img);

    const $type = document.createElement("span");
    $type.innerText = capitalizeFirstLeeter(type.name);

    $badge.appendChild($icon);
    $badge.appendChild($type);

    $badges.appendChild($badge);
  });

  const $stats = document.createElement("div");
  $stats.classList.add("stats");
  // STAT 1 --------------------------------------------------
  const $stat1 = `<div class="stat">
                    <div class="stat_title">
                      <img src="./assets/sword.svg" alt="Sword Icon" />
                      <span>Attack</span>
                  </div>
                  <div class="stat_value">
                    <span>${pokemon.stats[1].base_stat}</span>
                  </div>
                </div>`;
  // STAT 2 --------------------------------------------------
  const $stat2 = `<div class="stat">
                    <div class="stat_title">
                      <img src="./assets/shield.svg" alt="Sword Icon" />
                      <span>Defense</span>
                  </div>
                  <div class="stat_value">
                    <span>${pokemon.stats[2].base_stat}</span>
                  </div>
                  </div>`;
  // STAT 3 --------------------------------------------------
  const $stat3 = `<div class="stat">
                    <div class="stat_title">
                      <img src="./assets/bolt.svg" alt="Sword Icon" />
                      <span>Speed</span>
                    </div>
                    <div class="stat_value">
                    <span>${pokemon.stats[5].base_stat}</span>
                    </div>
                    </div>`;
  // ---------------------------------------------------------

  $stats.innerHTML += $stat1;
  $stats.innerHTML += $stat2;
  $stats.innerHTML += $stat3;

  $details_container.appendChild($header);
  $details_container.appendChild($badges);
  $details_container.appendChild($stats);

  $card.appendChild($image_container);
  $card.appendChild($details_container);

  $container.appendChild($card);

  return $container;
}

async function renderPokemons() {
  const $container = document.querySelector(".container");

  const pokemons = await getPokemons();

  console.log(pokemons);

  pokemons.map((pokemon) => {
    if (pokemon) {
      const $pokemonCard = createPokemonCard(pokemon);
      $container.appendChild($pokemonCard);
    }
  });
}

renderPokemons();
