import inquirer from "inquirer";
import { Hero } from "./models/Hero";
import { Wizard } from "./models/Wizard";
import { Archer } from "./models/Archer";
import { Fighter } from "./models/Fighter";
import { evolveHero, exploreMap, showStats } from "./game";

let gameLoop = true;
let myHero;

async function chooseCharacter(): Promise<Hero> {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "character",
      message: "Elige el tipo de heroe:",
      choices: [
        { name: "Mago", value: "wizard" },
        { name: "Arquero", value: "archer" },
        { name: "Luchador", value: "fighter" },
      ],
    },
    {
      type: "input",
      name: "name",
      message: "¿Cúal es el nombre de tu personaje?: ",
    },
  ]);

  if (answers.character === "wizard") {
    return new Wizard(answers.name);
  } else if (answers.character === "archer") {
    return new Archer(answers.name);
  } else {
    return new Fighter(answers.name);
  }
}

async function chooseAction(character: Hero) {
  const actions = {
    explore: exploreMap,
    evolve: evolveHero,
    stats: showStats,
    exit: () => {
      console.log("Adios! Vuelve pronto!");
      gameLoop = false;
    },
  };

  const answers: { action: keyof typeof actions } = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "¿Que quieres hacer a continuación?: ",
      choices: [
        { name: "Explorar", value: "explore" },
        { name: "Evolucionar", value: "evolve" },
        { name: "Estadisticas", value: "stats" },
        { name: "Salir del juego", value: "exit" },
      ],
    },
  ]);

  const action = actions[answers.action];

  if (!action) {
    console.log("La opción elegida no es valida!");
    return;
  }
  await action(character);
}

async function startGame() {
  console.log("Bienvenido al juego!");
  myHero = await chooseCharacter();
  while (gameLoop) {
    await chooseAction(myHero);
  }
}

startGame();
