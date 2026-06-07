let balance = 10000;
let startBalance = 10000;

function startChallenge() {
  alert("🏆 Challenge Started!");
  document.getElementById("status").innerText = "ACTIVE";
}

function simulateTrade() {
  let change = Math.floor(Math.random() * 500 - 200);

  balance += change;

  let profitPercent = ((balance - startBalance) / startBalance) * 100;

  document.getElementById("progress").innerText = profitPercent.toFixed(2) + "%";

  if (profitPercent >= 10) {
    document.getElementById("status").innerText = "🎉 PASSED!";
  }

  if (profitPercent <= -5) {
    document.getElementById("status").innerText = "❌ FAILED!";
  }

  alert("Trade: " + change + " USD");
}
