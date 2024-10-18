import { Archer } from "./models/Archer";
import { Fighter } from "./models/Fighter";
import { Wizard } from "./models/Wizard";
import { Skill } from "./types";

export const systemSkills: Skill[] = [
  // Arquero
  { name: "Disparo Rápido", type: Archer, xp: 13, cost: 16 },
  { name: "Lluvia de Flechas", type: Archer, xp: 20, cost: 15 },
  { name: "Flecha Explosiva", type: Archer, xp: 26, cost: 11 },
  { name: "Flecha Venenosa", type: Archer, xp: 34, cost: 12 },
  { name: "Camuflaje", type: Archer, xp: 48, cost: 20 },
  { name: "Flecha de Hielo", type: Archer, xp: 36, cost: 17 },
  { name: "Disparo Preciso", type: Archer, xp: 27, cost: 8 },
  { name: "Vista de Águila", type: Archer, xp: 32, cost: 17 },
  { name: "Disparo Silencioso", type: Archer, xp: 32, cost: 12 },
  { name: "Flecha de Trueno", type: Archer, xp: 38, cost: 10 },
  // Luchador
  { name: "Golpe Fuerte", type: Fighter, xp: 27, cost: 17 },
  { name: "Patada Giratoria", type: Fighter, xp: 44, cost: 12 },
  { name: "Puño de Hierro", type: Fighter, xp: 16, cost: 18 },
  { name: "Ataque Frenético", type: Fighter, xp: 18, cost: 10 },
  { name: "Bloqueo Perfecto", type: Fighter, xp: 31, cost: 9 },
  { name: "Grito de Guerra", type: Fighter, xp: 24, cost: 18 },
  { name: "Carga Imparable", type: Fighter, xp: 31, cost: 5 },
  { name: "Desarme", type: Fighter, xp: 12, cost: 15 },
  { name: "Contraataque Rápido", type: Fighter, xp: 30, cost: 5 },
  { name: "Escudo Indestructible", type: Fighter, xp: 25, cost: 11 },
  // Mago
  { name: "Bola de Fuego", type: Wizard, xp: 2, cost: 18 },
  { name: "Teletransportación", type: Wizard, xp: 44, cost: 18 },
  { name: "Rayo de Hielo", type: Wizard, xp: 15, cost: 17 },
  { name: "Escudo Mágico", type: Wizard, xp: 46, cost: 15 },
  { name: "Curación Instantánea", type: Wizard, xp: 18, cost: 11 },
  { name: "Tormenta Eléctrica", type: Wizard, xp: 42, cost: 19 },
  { name: "Invisibilidad", type: Wizard, xp: 13, cost: 11 },
  { name: "Invocación de Elementales", type: Wizard, xp: 4, cost: 15 },
  { name: "Explosión Arcana", type: Wizard, xp: 18, cost: 14 },
  { name: "Control Mentalv", type: Wizard, xp: 41, cost: 11 },
];
