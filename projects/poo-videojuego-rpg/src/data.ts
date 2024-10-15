import { Skill } from "./types";

import { Archer, Fighter, Wizard } from "./models/characters";

export const systemSkills: Skill[] = [
  // Archer Abilities
  { name: "Rapid Shot", type: Archer },
  { name: "Arrow Rain", type: Archer },
  { name: "Explosive Arrow", type: Archer },
  { name: "Poison Arrow", type: Archer },
  { name: "Camouflage", type: Archer },
  { name: "Ice Arrow", type: Archer },
  { name: "Precise Shot", type: Archer },
  { name: "Eagle Eye", type: Archer },
  { name: "Silent Shot", type: Archer },
  { name: "Thunder Arrow", type: Archer },
  // Fighter Abilities
  { name: "Strong Punch", type: Fighter },
  { name: "Spinning Kick", type: Fighter },
  { name: "Iron Fist", type: Fighter },
  { name: "Frenzied Attack", type: Fighter },
  { name: "Perfect Block", type: Fighter },
  { name: "War Cry", type: Fighter },
  { name: "Unstoppable Charge", type: Fighter },
  { name: "Disarm", type: Fighter },
  { name: "Quick Counter", type: Fighter },
  { name: "Indestructible Shield", type: Fighter },
  // Wizard Abilities
  { name: "Fireball", type: Wizard },
  { name: "Teleportation", type: Wizard },
  { name: "Ice Ray", type: Wizard },
  { name: "Magic Shield", type: Wizard },
  { name: "Instant Healing", type: Wizard },
  { name: "Electric Storm", type: Wizard },
  { name: "Invisibility", type: Wizard },
  { name: "Elemental Summoning", type: Wizard },
  { name: "Arcane Explosion", type: Wizard },
  { name: "Mind Control", type: Wizard },
];
