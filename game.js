let crypt = 1000;
let xp = 0;
let level = 1;
let gamesPlayed = 0;

function updateUI() {
  document.getElementById("crypt").innerText = crypt;
  document.getElementById("xp").innerText = xp;
  document.getElementById("level").innerText = level;
}

function playTrade() {
  let profit = Math.floor(Math.random() * 300 - 100); // win/loss

  crypt += profit;
  xp += 50;
  gamesPlayed++;

  if (xp >= 300) {
    level++;
    xp = 0;
  }

  if (gamesPlayed >= 5) {
    localStorage.setItem("fundedUnlock", "true");
  }

  updateUI();

  alert("Trade result: " + profit + " CRYPT");
}

function dailyReward() {
  crypt += 200;
  updateUI();
  alert("🎁 Daily reward claimed!");
}

function inviteFriend() {
  crypt += 300;
  xp += 100;
  updateUI();
  alert("👥 Friend invited! Reward added.");
}

function goFunded() {
  window.location.href = "funded.html";
}

updateUI();
