import { Skill } from "../types";
import { Box } from "./items";

/**
 * Clases abstracta:
 * Ya que en un juego un personaje no puede ser de la categoría base (en mi caso: Hero), y
 * si o si tiene que ser de tipo "Wizard", "Fighter" o "Archer", tiene sentido que la clase base no se
 * pueda instanciar.
 * */

export abstract class Hero {
  protected name: string;
  protected level: number;
  protected energy: number;
  protected xp: number; // <-- To check if can level up?
  protected skills: Skill[];

  constructor(name: string) {
    this.name = name;
    this.level = 1;
    this.energy = 100;
    this.xp = 0;
    this.skills = [];
  }

  attack(): void {
    console.log(`${this.name} is attaking...`);
  }

  defend(): void {
    console.log(`${this.name} is defending itself...`);
  }

  getLevel(): number {
    return this.level;
  }

  getEnergy(): number {
    return this.energy;
  }

  getSkills(): void {
    console.log(`-------- ${this.name}'s skills --------`);
    this.skills.map((skill, index) => {
      console.log(`${index + 1}. ${skill.name}`);
    });
  }

  useSkill(index: number): Skill | void {
    if (index + 1 > this.skills.length) {
      console.log(
        `The selected skill doesn't exist in the ${this.name}'s set of skills`
      );
      return;
    }

    const selectedSkill = this.skills[index];

    // Use selected skill (aka remove from array)
    this.skills = this.skills.splice(index, 1);

    return selectedSkill;
  }

  openBox(box: Box): void {
    if (box.checkState()) {
      console.log("This box was already open. Find another!");
      return;
    }

    const findedSkills = box.open() as Skill[];

    let skillsToUse: Skill[] = [];
    let skillsToDiscard: Skill[] = [];

    findedSkills.map((skill) => {
      // Chequear si skill no esta repetido y se puede usar
      if (!this.skills.includes(skill) && this instanceof skill.type) {
        skillsToUse.push(skill);
      } else {
        skillsToDiscard.push(skill);
      }
    });

    if (skillsToUse.length > 0) {
      // Guardar skills ganadas
      this.skills = [...this.skills, ...skillsToUse];
      // Mostrar en pantalla que habilidades gane
      console.log("-------- Earned skills --------");
      skillsToUse.forEach((skill, index) => {
        console.log(`${index + 1}. ${skill.name}`);
      });
    }

    if (skillsToDiscard.length > 0) {
      // Mostrar en pantalla que habilidades descarto
      console.log("-------- Discarded skills --------");
      skillsToDiscard.forEach((skill, index) => {
        console.log(`${index + 1}. ${skill.name}`);
      });
    }

    // TODO: Perhaps the Hero can win points of (magic | arrows | strenght)
    // with each box opened ?
  }

  abstract levelUp(): void;
}

export class Wizard extends Hero {
  private magic: number;

  constructor(name: string) {
    super(name);
    this.magic = 1;
  }

  // Polimorfismo y sobrecarga de metodo
  attack(skill?: Skill): void {
    if (skill) {
      if (this.magic < skill.cost) {
        console.log(
          `${this.name} doesn't have the neccesry magic to use the ${skill.name} skill`
        );
        return;
      }
      this.magic -= skill.cost;
      this.xp += skill.xp;
      console.log(`${this.name} is attaking with: ${skill.name}`);
    } else {
      console.log(`${this.name} is attaking...`);
    }
  }

  levelUp(): void {}
}

export class Archer extends Hero {
  private arrows: number;

  constructor(name: string) {
    super(name);
    this.arrows = 1;
  }

  levelUp(): void {}
}

export class Fighter extends Hero {
  private strength: number;

  constructor(name: string) {
    super(name);
    this.strength = 1;
  }

  levelUp(): void {}
}
