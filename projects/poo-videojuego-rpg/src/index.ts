import { Wizard } from "./models/characters";
import { Box } from "./models/items";

const wizard = new Wizard("Dumbledore");

const box_1 = new Box();
const box_2 = new Box();

wizard.openBox(box_1);
wizard.openBox(box_2);

wizard.getSkills();

wizard.attack(wizard.useSkill(2) || undefined);

wizard.getSkills();
