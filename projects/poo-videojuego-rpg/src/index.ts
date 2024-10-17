import inquirer from "inquirer";
import { Hero, Archer, Fighter, Wizard } from "./models/characters";
import { Box } from "./models/items";

async function chooseCharacter(): Promise<Hero> {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "character",
      message: "Elige tu personaje:",
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

async function attack(character: Hero) {
  const options = character.getSkills().map((skill, index) => {
    return { name: skill.name, value: index };
  });

  let selectedSkill;
  if (options.length > 0) {
    const answer = await inquirer.prompt([
      {
        type: "list",
        name: "skill",
        message: "Selecciona un ataque: ",
        choices: options,
      },
    ]);

    selectedSkill = character.useSkill(answer.skill);
  } else {
    console.log(
      "Tu personaje no tiene ningun ataque en el inventario aún.\n Debes abrir una Caja para ganar ataques."
    );
  }

  if (selectedSkill) {
    if (
      character instanceof Wizard ||
      character instanceof Archer ||
      character instanceof Fighter
    ) {
      character.attack(selectedSkill);
    }
  } else {
    character.attack();
  }
}

async function openBox(character: Hero) {
  const random_boxes = [new Box(), new Box(), new Box()];

  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "box",
      message: `Por favor elije una caja sorpresa para que ${character.getName()} abra: `,
      choices: [
        { name: "Caja n° 1", value: 0 },
        { name: "Caja n° 2", value: 1 },
        { name: "Caja n° 3", value: 2 },
      ],
    },
  ]);

  const selectedBox = random_boxes[answer.box];

  character.openBox(selectedBox);
}

async function chooseAction(character: Hero) {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "¿Que quieres hacer a continuación?: ",
      choices: [
        { name: "Luchar", value: 0 },
        { name: "Ver inventario de ataques", value: 1 },
        { name: "Abrir una caja sorpresa", value: 2 },
        { name: "Salir del juego", value: 3 },
      ],
    },
  ]);
  // TODO: llamas a todas las acciones
  if (answers.action === 2) {
    await openBox(character);
  }
}

async function startGame() {
  console.log("Bienvenido al juego!");
  const myHero = await chooseCharacter();
  while (1) {
    await chooseAction(myHero);
  }
}

startGame();

// Steps of a game
