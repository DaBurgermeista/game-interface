let health = 100;
let gold = 0;

function updateHUD() {
  document.getElementById("health").textContent = health;
  document.getElementById("gold").textContent = gold;
}

function logMessage(message) {
  const log = document.getElementById("log");
  const entry = document.createElement("p");
  entry.textContent = message;
  log.appendChild(entry);
  log.scrollTop = log.scrollHeight;
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
