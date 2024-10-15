import { Skill } from "../types";
import { mixArray } from "../utils";

import { systemSkills } from "../data";

export class Box {
  protected opened: boolean;
  protected skills: Skill[];

  constructor() {
    this.opened = false;
    // Call to method that load items randomly
    this.skills = this.loadSkills(3);
    // Show skills
    this.showSkills();
  }

  public open(): Skill[] | void {
    if (this.opened) {
      console.log("This box was already open. Find another!");
      return;
    }
    this.opened = true;

    return this.skills;
  }

  public checkState(): boolean {
    return this.opened;
  }

  private loadSkills(items: number): Skill[] {
    // Hago una pre mezcla de las
    const mixedSkills = mixArray(systemSkills);

    console.log(mixedSkills);

    let randomSkills: Skill[] = [];

    // Hago copia auxiliar porque tengo que remover items
    // para que el mismo item no sea elegido dos veces.
    const aux = [...mixedSkills];

    for (let i = 0; i < items; i++) {
      const randomIndex = Math.floor(Math.random() * aux.length);

      randomSkills.push(aux[randomIndex]);
      // Remuevo el item que salio seleccionado para que no se repita
      aux.splice(randomIndex, 1);
    }

    return randomSkills;
  }

  private showSkills(): void {
    if (this.opened) {
      console.log("This box was already open. Find another!");
      return;
    }

    if (this.skills.length > 0) {
      console.log("-------- Finded skills --------");
      this.skills.forEach((skill, index) => {
        console.log(`${index + 1}. ${skill.name}`);
      });
    }
  }
}