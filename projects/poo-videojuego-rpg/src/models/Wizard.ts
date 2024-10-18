import { Skill } from "../types";
import { Hero } from "./characters";

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

