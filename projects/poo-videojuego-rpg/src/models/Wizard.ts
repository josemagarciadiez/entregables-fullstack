import { Skill } from "../types";
import { Hero } from "./Hero";

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

  canEvolve(): { success: boolean; message: string | null } {
    if (!(this instanceof Wizard)) {
      return { success: false, message: "Solo los Magos pueden evolucionar." };
    }

    if (this.level < 10) {
      return {
        success: false,
        message: `${this.name} aún no cuenta con el nivel necesario para evolucionar`,
      };
    }

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

export class EvolvedWizard extends Wizard {}
