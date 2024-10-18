import { Hero } from "./characters";

export class Fighter extends Hero {
  private strength: number;

  constructor(name: string) {
    super(name);
    this.strength = 25;
  }

  levelUp(): void {}
}