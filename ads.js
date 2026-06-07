let lastAdTime = 0;

// Show normal ad (with cooldown)
function showAd(adBoxId = "ad-box") {
  let now = Date.now();

  // 2 minute cooldown (prevents spam)
  if (now - lastAdTime < 120000) {
    console.log("Ad blocked (cooldown)");
    return;
  }

  lastAdTime = now;

  let box = document.getElementById(adBoxId);
  if (!box) return;

  box.innerHTML = "📢 Loading Ad...";

  setTimeout(() => {
    box.innerHTML = "📢 Advertisement Space";
  }, 2000);
}


// Reward ad system (user watches → gets CRYPT)
function watchAdReward() {
  let crypt = parseInt(localStorage.getItem("crypt") || "1000");

  alert("📺 Ad playing...");

  setTimeout(() => {
    let reward = 200;
    crypt += reward;

    localStorage.setItem("crypt", crypt);

    alert("🎉 You earned " + reward + " CRYPT");
  }, 3000);
}
