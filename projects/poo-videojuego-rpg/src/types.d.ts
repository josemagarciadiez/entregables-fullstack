import { Hero } from "./models/characters";

export type Skill = {
  name: string;
  type: typeof Hero;
  xp: number;
  cost: number;
};
