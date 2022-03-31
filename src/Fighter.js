/* Fighter class definition */

const MAX_LIFE = 100;

class Fighter {
  constructor(name, strength, dexterity) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
  }
  fight(joueur) {
    let attack = Math.round(Math.random() * this.strength);
    let defense = attack - joueur.dexterity < 0 ? 0 : attack - joueur.dexterity;
    joueur.life = joueur.life - defense < 0 ? 0 : joueur.life - defense;
    console.log(
      `${this.name} attack ${joueur.name} ${joueur.name} : ${joueur.life}`
    );
  }
}

export { Fighter };
