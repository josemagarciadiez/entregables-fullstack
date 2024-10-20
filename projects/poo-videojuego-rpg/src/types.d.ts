import { Hero } from "./models/Hero";

export type Skill = {
  name: string;
  type: typeof Hero;
  xp: number;
  cost: number;
};
