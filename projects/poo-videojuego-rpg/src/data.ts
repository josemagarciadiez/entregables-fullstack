import { Skill } from "./types";

import { Archer, Fighter, Wizard } from "./models/characters";

export const systemSkills: Skill[] = [
  // Archer Abilities
  { name: "Rapid Shot", type: Archer, xp: 13, cost: 16 },
  { name: "Arrow Rain", type: Archer, xp: 20, cost: 15 },
  { name: "Explosive Arrow", type: Archer, xp: 26, cost: 11 },
  { name: "Poison Arrow", type: Archer, xp: 34, cost: 12 },
  { name: "Camouflage", type: Archer, xp: 48, cost: 20 },
  { name: "Ice Arrow", type: Archer, xp: 36, cost: 17 },
  { name: "Precise Shot", type: Archer, xp: 27, cost: 8 },
  { name: "Eagle Eye", type: Archer, xp: 32, cost: 17 },
  { name: "Silent Shot", type: Archer, xp: 32, cost: 12 },
  { name: "Thunder Arrow", type: Archer, xp: 38, cost: 10 },
  // Fighter Abilities
  { name: "Strong Punch", type: Fighter, xp: 27, cost: 17 },
  { name: "Spinning Kick", type: Fighter, xp: 44, cost: 12 },
  { name: "Iron Fist", type: Fighter, xp: 16, cost: 18 },
  { name: "Frenzied Attack", type: Fighter, xp: 18, cost: 10 },
  { name: "Perfect Block", type: Fighter, xp: 31, cost: 9 },
  { name: "War Cry", type: Fighter, xp: 24, cost: 18 },
  { name: "Unstoppable Charge", type: Fighter, xp: 31, cost: 5 },
  { name: "Disarm", type: Fighter, xp: 12, cost: 15 },
  { name: "Quick Counter", type: Fighter, xp: 30, cost: 5 },
  { name: "Indestructible Shield", type: Fighter, xp: 25, cost: 11 },
  // Wizard Abilities
  { name: "Fireball", type: Wizard, xp: 2, cost: 18 },
  { name: "Teleportation", type: Wizard, xp: 44, cost: 18 },
  { name: "Ice Ray", type: Wizard, xp: 15, cost: 17 },
  { name: "Magic Shield", type: Wizard, xp: 46, cost: 15 },
  { name: "Instant Healing", type: Wizard, xp: 18, cost: 11 },
  { name: "Electric Storm", type: Wizard, xp: 42, cost: 19 },
  { name: "Invisibility", type: Wizard, xp: 13, cost: 11 },
  { name: "Elemental Summoning", type: Wizard, xp: 4, cost: 15 },
  { name: "Arcane Explosion", type: Wizard, xp: 18, cost: 14 },
  { name: "Mind Control", type: Wizard, xp: 41, cost: 11 },
];
