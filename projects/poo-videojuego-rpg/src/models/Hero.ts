import { Skill } from "../types";
import { Box } from "./Box";

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
  protected defense: number;
  protected xp: number; // <-- To check if can level up?
  protected skills: Skill[];

  constructor(name: string) {
    this.name = name;
    this.level = 1;
    this.energy = 100;
    this.defense = 50;
    this.xp = 0;
    this.skills = [];
  }

  public getName(): string {
    return this.name;
  }

  public getEnergy(): number {
    return this.energy;
  }

  public getXp(): number {
    return this.xp;
  }

  protected generateAttackPower(level: number): number {
    return 5 + level * 2;
  }

  public attack(): number {
    const attackPower = this.generateAttackPower(this.level);
    this.xp += 2;
    console.log(
      `${this.name} esta haciendo un ataque básico con un poder de ${attackPower}`
    );
    return attackPower;
  }

  public defend(damage: number): number {
    const actualDamage = Math.max(damage - this.defense, 0);
    this.energy -= actualDamage;
    console.log(
      `${this.name} ha recibido ${actualDamage} de daño. Salud restante: ${this.energy}`
    );
    if (this.energy <= 0) {
      console.log(`${this.name} ha sido derrotado!`);
    }

    return actualDamage;
  }

  // Verificar si el enemigo sigue vivo
  public isAlive(): boolean {
    return this.energy > 0;
  }

  public getSkills(index?: number): Skill[] {
    if (index) {
      return [this.skills[index]];
    }
    return this.skills;
  }

  public openBox(box: Box): void {
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
        `Felicitaciones! Has ganado ${skillsToUse.length} nuevos ataques.Puedes verlos en las estadisticas de tu personaje.`
      );
    } else {
      console.log("Lo lamento, no has ganado ningún ataque en esta ronda :(");
    }
  }
}
