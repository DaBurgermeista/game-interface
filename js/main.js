import { Entity, player, goblin } from "./entity.js";
import { logMessage, updateHUD } from "./ui.js";

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
  const goldFound = Math.floor(Math.random() * 25) + 5;
  gold += goldFound;
  logMessage(`You found a chest with ${goldFound} gold!`);
  updateHUD();
}
