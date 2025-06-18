import { Entity, player, goblin } from "./entity.js";
import { logMessage, updateHUD, updateInventory } from "./ui.js";

window.loot = loot;

// ===== ON PAGE LOAD - DOM =====
document.addEventListener("DOMContentLoaded", () => {
  // ===== SETUP LISTENERS =====
  document.getElementById("attack-button").addEventListener("click", () => {
    attackGoblin();
  });

  document.getElementById("loot-button").addEventListener("click", loot);
});

function attackGoblin() {
  const damage = player.attackTarget(goblin);
  logMessage(`You hit the goblin for ${damage} damage!`);

  if (!goblin.isAlive()) {
    logMessage(`The goblin is defeated.`);
    player.gold += goblin.gold;
  } else {
    const counter = goblin.attackTarget(player);
    logMessage(`The goblin retaliates for ${counter} damage!`);
  }

  updateHUD();
}

function attack() {
  const damage = Math.floor(Math.random() * 10) + 1;
  health = Math.max(health - damage, 0);
  logMessage(`You were attacked and took ${damage} damage!`);
  updateHUD();
}

function loot() {
  const items = ["Health Potion", "Rusty Sword", "Gold Ring", "Iron Shield"];
  const found = items[Math.floor(Math.random() * items.length)];

  player.addItem(found);
  logMessage(`You found a ${found}!`);
  updateHUD();
  updateInventory();
}
