import { Skill } from "../types";
import { Hero } from "./Hero";

export class Fighter extends Hero {
  private strength: number;

  constructor(name: string) {
    super(name);
    this.strength = 25;
  }

  // Polimorfismo y sobrecarga de metodo
  public attack(skill?: Skill): number{
    if (skill) {
      const attackPower = this.generateAttackPower(this.level + skill.cost);
      this.xp += skill.xp;
      console.log(
        `${this.name} esta atacando con ${skill.name} con un poder de ${attackPower}`
      );
      return attackPower;
    }
    return super.attack();
  }
}
