class Monster extends Fighter {
  constructor(name, strength, dexterity, image) {
    super(name, strength, dexterity, image);
  }

  getDamage() {
    return this.strength;
  }

  getDefense() {
    return this.dexterity;
  }
}
