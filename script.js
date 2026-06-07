let balance = 100000;
let xp = 0;

new TradingView.widget({
  container_id: "tvchart",
  width: "100%",
  height: 500,
  symbol: "BINANCE:BTCUSDT",
  interval: "15",
  timezone: "Etc/UTC",
  theme: "dark",
  style: "1",
  locale: "en"
});

function buy(){
  let profit=Math.floor(Math.random()*2000)-500;
  balance+=profit;
  xp+=10;

  document.getElementById("balance").innerText=balance;
  document.getElementById("xp").innerText=xp;
  document.getElementById("pl").innerText=profit;

  let li=document.createElement("li");
  li.innerText="BUY Trade: "+profit;
  document.getElementById("history").appendChild(li);

  updateLevel();
}

function sell(){
  let profit=Math.floor(Math.random()*2000)-500;
  balance+=profit;
  xp+=10;

  document.getElementById("balance").innerText=balance;
  document.getElementById("xp").innerText=xp;
  document.getElementById("pl").innerText=profit;

  let li=document.createElement("li");
  li.innerText="SELL Trade: "+profit;
  document.getElementById("history").appendChild(li);

  updateLevel();
}

function updateLevel(){
  let level="Beginner";

  if(xp>100) level="Trader";
  if(xp>500) level="Pro Trader";
  if(xp>1000) level="Funded Trader";
  if(xp>2000) level="Trading Legend";

  document.getElementById("level").innerText=level;
}

function dailyQuest(){
  alert("Quest Completed! +50 XP");
  xp+=50;
  document.getElementById("xp").innerText=xp;
}

function spinReward(){
  let reward=Math.floor(Math.random()*1000);
  balance+=reward;
  document.getElementById("balance").innerText=balance;
  alert("Reward: NPR "+reward);
}
