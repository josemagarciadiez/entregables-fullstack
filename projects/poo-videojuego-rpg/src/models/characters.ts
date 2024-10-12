/**
 * Clases abstractas:
 * Aplicación: Ya que en un juego un personaje no puede ser de la categoría base (en mi caso: Hero), y
 * si o si tiene que ser de tipo "Wizard", "Fighter" o "Archer", tiene sentido que la clase base no se
 * pueda instanciar.
 * */

abstract class Hero {
  protected name: string;
  protected level: number;
  protected energy: number;

  constructor(name: string) {
    this.name = name;
    this.level = 1;
    this.energy = 100;
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
}
