class Arena {
  constructor(hero, monsters, size = 10) {
    this.hero = hero;
    this.monsters = monsters;
    this.size = size;
  }

  positionFighters() {
    // Positionne les combattants si nécessaire
  }

  getRandomPosition() {
    return Math.floor(Math.random() * this.size);
  }
}
