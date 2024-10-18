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
  // TODO: Me gustaria que las skills sean consumibles, es decir que
  // un Hero pueda tener mas 1 de la misma skill.
  // ¿Podria ser un {}[] donde guardo el skill y la cantidad?
  // o ¿guardar repetida la misma skill y despues eliminar la primer ocurrencia?
  // y en stats hacer un Array.reduce()
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
      console.log(
        `Felicitaciones! Has ganado ${skillsToUse.length} nuevos ataques.`
      );
    } else {
      console.log("Lo lamento, no has ganado ningún ataque en esta ronda :(");
    }
  }
}
