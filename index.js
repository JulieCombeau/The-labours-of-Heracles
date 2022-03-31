// First Labour : Heracles vs Nemean Lion
// use your Figher class here
import { Fighter } from "./src/Fighter.js";

const heracles = new Fighter("Heracles", 20, 6);
const lion = new Fighter("Nemean Lion", 11, 13);

let round = 1;

while (heracles.life > 0 && lion.life > 0) {
  console.log(`Round n° ${round}`);
  heracles.fight(lion);
  if (lion.life > 0) lion.fight(heracles);
  round++;
}

heracles.life == 0 ? console.log("Lion Win") : console.log("Heracles Win");
lion.life > 0 ? console.log("Heracles is dead") : console.log("Lion is dead");
