import { Skill } from "../types";
import { Hero } from "./Hero";

export class Wizard extends Hero {
  protected magic: number;

  constructor(name: string) {
    super(name);
    this.magic = 25;
  }

  public getMagic() {
    return this.magic;
  }
  // Polimorfismo y sobrecarga de metodo
  public attack(skill?: Skill): number {
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

  public canEvolve(): { success: boolean; message: string | null } {
    if (this.xp < 100) {
      return {
        success: false,
        message: `${this.name} aún no cuenta con la experiencia necesaria para evolucionar`,
      };
    }

    return {
      success: true,
      message: null,
    };
  }
}

export class EvolvedWizard extends Wizard {
  constructor(wizard: Wizard) {
    super(wizard.getName());
    this.energy = wizard.getEnergy();
    this.level = 2;
    this.xp = wizard.getXp() + 10;
    this.magic = wizard.getMagic();
  }

  public greet(): void {
    console.log(`${this.name} ha evolucionado.`);
    console.log(`Ahora tiene ${this.xp} puntos de experiencia.`);
  }
}
