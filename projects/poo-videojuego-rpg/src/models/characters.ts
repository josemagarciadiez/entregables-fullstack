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

  getName(): string {
    return this.name;
  }

  attack(): void {
    console.log(`${this.name} esta haciendo un ataque básico...`);
  }

  defend(): void {
    console.log(`${this.name} se esta defendiendo...`);
  }

  getLevel(): number {
    return this.level;
  }

  getEnergy(): number {
    return this.energy;
  }

  getSkills(): Skill[] {
    return this.skills;
  }

  /**
   * useSkill
   * @param index of skill
   * @returns Skill selected
   */
  useSkill(index: number): Skill | void {
    if (index + 1 > this.skills.length) {
      console.log(
        `El ataque seleccionado no existe en el inventario de ${this.name}`
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
      console.log("Esta caja ya fue abierta. Debes encontrar otra!");
    }

    const findedSkills = box.open() as Skill[];

    let skillsToUse: Skill[] = [];

    findedSkills.map((skill) => {
      // Check if skill is not repited and it can be used by the character
      if (!this.skills.includes(skill) && this instanceof skill.type) {
        skillsToUse.push(skill);
      }
    });

    this.skills = [...this.skills, ...skillsToUse];

    if (skillsToUse.length > 0) {
      console.log(`Felicitaciones! Has ganado ${skillsToUse.length} nuevos ataques.`);
    } else {
      console.log("Lo lamento, no has ganado ningún ataque en esta ronda :(");
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
    this.magic = 25;
  }

  // Polimorfismo y sobrecarga de metodo
  attack(skill?: Skill): void {
    if (skill) {
      if (this.magic < skill.cost) {
        console.log(
          `${this.name} no tiene la magia necesaria para usar el ataque: ${skill.name}`
        );
        return;
      }
      this.magic -= skill.cost;
      this.xp += skill.xp;
      console.log(`${this.name} esta atacando con: ${skill.name}`);
    } else {
      console.log(`${this.name} esta haciendo un ataque básico...`);
    }
  }

  levelUp(): void {}
}

export class Archer extends Hero {
  private arrows: number;

  constructor(name: string) {
    super(name);
    this.arrows = 25;
  }
  // Polimorfismo y sobrecarga de metodo
  attack(skill?: Skill): void {
    if (skill) {
      if (this.arrows < skill.cost) {
        console.log(
          `${this.name} no tiene la cantidad necesaria de flechas para usar el ataque: ${skill.name}`
        );
        return;
      }
      this.arrows -= skill.cost;
      this.xp += skill.xp;
      console.log(`${this.name} esta atacando con: ${skill.name}`);
    } else {
      console.log(`${this.name} esta haciendo un ataque básico...`);
    }
  }

  levelUp(): void {}
}

export class Fighter extends Hero {
  private strength: number;

  constructor(name: string) {
    super(name);
    this.strength = 25;
  }
  // Polimorfismo y sobrecarga de metodo
  attack(skill?: Skill): void {
    if (skill) {
      if (this.strength < skill.cost) {
        console.log(
          `${this.name} no tiene la fuerza necesaria para usar el ataque: ${skill.name}`
        );
        return;
      }
      this.strength -= skill.cost;
      this.xp += skill.xp;
      console.log(`${this.name} esta atacando con: ${skill.name}`);
    } else {
      console.log(`${this.name} esta haciendo un ataque básico...`);
    }
  }

  levelUp(): void {}
}
