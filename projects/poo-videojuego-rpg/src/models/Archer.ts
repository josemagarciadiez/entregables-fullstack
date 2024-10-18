import { Skill } from "../types";
import { Hero } from "./Hero";

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
