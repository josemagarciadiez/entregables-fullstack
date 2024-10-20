import inquirer from "inquirer";

import { Hero } from "./models/Hero";
import { Box } from "./models/Box";
import { randomSelection } from "./utils";
import { systemEnemies } from "./data";
import { Skill } from "./types";
import { EvolvedWizard, Wizard } from "./models/Wizard";
import { Archer } from "./models/Archer";
import { Fighter } from "./models/Fighter";

export async function exploreMap(character: Hero) {
  const actions = {
    fight: startFight,
    open: openBox,
  };

  console.log("Estas explorando el mapa del juego...");

  console.log(
    "Llegas a un punto del camino donde encuentras a un enemigo y una caja sorpresa."
  );

  const answer: { action: keyof typeof actions } = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "¿Cúal es tu decisión?: ",
      choices: [
        { name: "Luchar contra el enemigo", value: "fight" },
        { name: "Abrir Caja sorpresa", value: "open" },
      ],
    },
  ]);

  const action = actions[answer.action];

  if (!action) {
    console.log("La opción elegida no es valida!");
    return;
  }

  await action(character);
}

async function startFight(character: Hero) {
  // 1. Generar enemigo aleatorio y desestructuro
  // respuesta, ya que la funcion devuelve un T[]
  const [enemy] = randomSelection(systemEnemies, 1);
  // 2. Ataque personaje
  const characterSkills = character.getSkills();
  // si personaje tiene skills, que el usuario elija
  // si no ataque comun
  let selectedSkill: Skill | null = null;
  let heroAttackPower;
  if (characterSkills.length > 0) {
    const options = characterSkills.map((skill, index) => {
      return { name: skill.name, value: index };
    });
    const skillIndex = await chooseSkill(options);
    [selectedSkill] = character.getSkills(skillIndex);
  }

  if (selectedSkill && character instanceof (Wizard || Archer || Fighter)) {
    heroAttackPower = character.attack(selectedSkill);
  } else {
    heroAttackPower = character.attack();
  }
  // 3. Defensa enemigo
  const heroDamage = enemy.defend(heroAttackPower);
  // 4. Ataque enemigo
  const enemyAttackPower = enemy.attack();
  // 5. Defensa personaje
  const enemyDamage = character.defend(enemyAttackPower);
  // 6. Quien haya sacado mas energia gana.
  if (heroDamage > enemyDamage) {
    console.log("Felicitaciones! has ganado esta batalla");
    console.log(
      `Tu experiencia ha crecido. Ahora tiene ${character.getXp()} puntos de experiencia.`
    );
  } else if (enemyDamage > heroDamage) {
    console.log("Lo siento! Has perdido esta batalla :(");
  } else {
    console.log("Ha sido un empate");
  }
}

async function chooseSkill(
  options: { name: string; value: number }[]
): Promise<number> {
  // return skill index
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "skill",
      message: "Selecciona un ataque: ",
      choices: options,
    },
  ]);

  return answer.skill;
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

export function showStats(character: Hero) {
  const characterSkills = character.getSkills();
  console.log("----------- Estadisticas ----------- ");
  console.log(`Nombre:   ${character.getName()}`);
  console.log(`Energía:   ${character.getEnergy()}`);
  console.log(`Experiencia:   ${character.getXp()}`);
  console.log("--- Inventario ---");
  if (characterSkills.length > 0) {
    characterSkills.forEach((skill, index) => {
      console.log(`${index + 1}. ${skill.name}`);
    });
  }
}

export function evolveHero(character: Hero) {
  if (!(character instanceof Wizard)) {
    console.log("Lo siento! Solo los Magos pueden evolucionar :(");
    return;
  }

  const evolveResult = character.canEvolve();

  if (!evolveResult.success) {
    console.log(evolveResult.message);
  }

  // TODO: Aca tendría que aprender a compartir un estado global
  // entre modulos en Node.
  const newHero = new EvolvedWizard(character);

  newHero.greet();
}
