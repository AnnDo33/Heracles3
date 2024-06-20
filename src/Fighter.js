const MAX_LIFE = 100;

class Fighter {
  constructor(name, strength, dexterity, image) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
    this.image = image;
    this.x = 0; // Position X par défaut
    this.y = 0; // Position Y par défaut
  }

  fight(defender) {
    const attackPoints = this.getRandomInt(this.getDamage());
    const damages = Math.max(attackPoints - defender.getDefense(), 0);
    defender.life = Math.max(defender.life - damages, 0);
    console.log(
      `${this.name} attaque ${defender.name} et inflige ${damages} points de dommage.`
    );
  }

  getRandomInt(max) {
    return 1 + Math.floor(Math.random() * max);
  }

  isAlive() {
    return this.life > 0;
  }

  getDamage() {
    return this.strength;
  }

  getDefense() {
    return this.dexterity;
  }
}
