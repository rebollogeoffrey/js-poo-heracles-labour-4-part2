const MAX_LIFE = 100

class Fighter {
  constructor(name, strength, dexterity, image, x = 0, y = 0, range = 1) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
    this.image = image;
    this.x = x
    this.y = y
    this.range = range
    this.experience = 500;
  }


  // Launch the fight
  // Lance un combat
  fight(defender) {
    let attackPoints = this.getRandomInt(this.getDamage());
    let damages = Math.max(attackPoints - defender.getDefense(), 0)
    defender.life = Math.max(defender.life - damages, 0);
  }


  // Calculate the total attack capacity of the fighter
  // Calcule la capacité d'attaque totale du combattant
  getDamage() {
    return this.getStrength();
  }


  // Calculate the total defense capacity of the fighter
  // Calcule la capacité de défense totale du combattant
  getDefense() {
    return this.getDexterity();
  }

  // Generate a random value between 1 and max
  // Génère une valeur aléatoire entre 1 et max
  getRandomInt(max) {
    return 1 + Math.floor(Math.random() * max);
  }

  getRange() {
    return this.range
  }

  // Allow to know if a fighter is still alive
  // Permet de déterminer si un combattant est encore en vie
  isAlive() {
    return this.life > 0
  }

  updateExp(exp) {
    this.experience = this.experience + exp;
  }

  getLevel() {
    return Math.ceil(this.experience / 1000);
  }

  getStrength() {
    return this.strength * this.getLevel();
  }

  getDexterity() {
    return this.dexterity * this.getLevel();
  }

}
