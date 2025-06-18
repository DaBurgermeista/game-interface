// ./js/ui.js

import { player } from "./entity.js";

export function logMessage(message) {
  const log = document.getElementById("log");
  const entry = document.createElement("p");
  entry.textContent = message;
  log.appendChild(entry);
  log.scrollTop = log.scrollHeight;
}

export function updateHUD() {
  document.getElementById("health").textContent = player.health;
  document.getElementById("gold").textContent = player.gold;
}
