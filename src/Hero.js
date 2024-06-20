class Hero extends Fighter {
  constructor(name, strength, dexterity, image) {
    super(name, strength, dexterity, image);
    this.weapon = null;
    this.shield = null;
  }

  getDamage() {
    return this.strength + (this.weapon ? this.weapon.damage : 0);
  }

  getDefense() {
    return this.dexterity + (this.shield ? this.shield.protection : 0);
  }
}
