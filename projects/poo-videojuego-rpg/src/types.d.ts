import { Hero } from "./models/characters";

export type Skill = {
  name: string;
  type: typeof Hero;
  cost?: number;
};
