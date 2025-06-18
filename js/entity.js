// ./js/entity.js

export class Entity {
  constructor({ name, health, maxHealth, attack, defense, gold = 0 }) {
    this.name = name;
    this.health = health;
    this.maxHealth = maxHealth;
    this.attack = attack;
    this.defense = defense;
    this.gold = gold;
  }

  isAlive() {
    return this.health > 0;
  }

  takeDamage(amount) {
    const damage = Math.max(amount - this.defense, 0);
    this.health = Math.max(this.health - damage, 0);
    return damage;
  }

  attackTarget(target) {
    if (!this.isAlive()) return 0;
    const damageDealt = target.takeDamage(this.attack);
    return damageDealt;
  }
}

export const player = new Entity({
  name: "Hero",
  health: 100,
  maxHealth: 100,
  attack: 12,
  defense: 3,
  gold: 50,
});

export const goblin = new Entity({
  name: "Goblin",
  health: 30,
  maxHealth: 30,
  attack: 6,
  defense: 1,
  gold: 10,
});
