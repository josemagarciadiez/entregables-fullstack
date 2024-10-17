import inquirer from "inquirer";
import { Hero, Archer, Fighter, Wizard } from "./models/characters";
import { Box } from "./models/items";

async function chooseCharacter(): Promise<Hero> {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "character",
      message: "Choose your character:",
      choices: [
        { name: "Wizard", value: "wizard" },
        { name: "Archer", value: "archer" },
        { name: "Fighter", value: "fighter" },
      ],
    },
    {
      type: "input",
      name: "name",
      message: "What is your character name?",
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
        message: "Choose attack: ",
        choices: options,
      },
    ]);

    selectedSkill = character.useSkill(answer.skill);
  } else {
    console.log(
      "Your character doesn't have any skills to attack, yet!\n You must open a Box to win any skills."
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
      message: `Please choose a gift box for ${character.getName()} to open: `,
      choices: [
        { name: "Box n° 1", value: 0 },
        { name: "Box n° 2", value: 1 },
        { name: "Box n° 3", value: 2 },
      ],
    },
  ]);

  const selectedBox = random_boxes[answer.box];

  character.openBox(selectedBox);
}

async function chooseAction() {
  const actions = [
    () => console.log("fn_1"),
    () => console.log("fn_2"),
    () => console.log("fn_3"),
    () => console.log("fn_3"),
    () => console.log("fn_5"),
    () => console.log("fn_6"),
  ];

  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "What do you want to do now?: ",
      choices: [
        { name: "Explore", value: 0 },
        { name: "Fight", value: 1 },
        { name: "Inventory", value: 2 },
        { name: "Boxes", value: 3 },
        { name: "Character Stats", value: 4 },
        { name: "Exit Game", value: 5 },
      ],
    },
  ]);

  actions[answers.action];
}

async function startGame() {
  console.log("Welcome to the RPG Game!");
  const myHero = await chooseCharacter();
  await chooseAction();
}

startGame();

// Steps of a game
