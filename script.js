const players = [
  { name: "Sahithi", role: "All-Rounder", sr: "145.3", matches: 75, jersey: 18, performance: "102 runs in 48 balls" },
  { name: "Geethika", role: "Batsman", sr: "162.3", matches: 60, jersey: 7, performance: "288 runs in 62 balls" },
  { name: "Harshith", role: "Bowler", sr: "130.4", matches: 52, jersey: 24, performance: "5 wickets for 32 runs" },
  { name: "Hasini", role: "Wicket-Keeper", sr: "150.2", matches: 68, jersey: 9, performance: "3 stumpings and 50 runs" },
  { name: "Varun", role: "Batsman", sr: "138.9", matches: 81, jersey: 10, performance: "99 runs in 50 balls" },
  { name: "Pooja", role: "All-Rounder", sr: "141.0", matches: 77, jersey: 3, performance: "89 runs and 2 wickets" },
  { name: "Sreelekha", role: "Bowler", sr: "120.6", matches: 58, jersey: 14, performance: "4 wickets for 28 runs" },
  { name: "Saikarthik", role: "Batsman", sr: "158.0", matches: 66, jersey: 19, performance: "110 runs in 53 balls" },
  { name: "Pavan", role: "All-Rounder", sr: "144.4", matches: 72, jersey: 11, performance: "76 runs and 3 wickets" },
  { name: "Sandhya", role: "Wicket-Keeper", sr: "135.2", matches: 63, jersey: 8, performance: "2 stumpings and 45 runs" },
  { name: "Akhil", role: "Bowler", sr: "127.7", matches: 59, jersey: 21, performance: "5 wickets for 25 runs" }
];

const playerGrid = document.getElementById("playerGrid");
players.forEach((player, index) => {
  const card = document.createElement("div");
  card.className = "player-card";
  card.setAttribute("onclick", `openModal(${index})`);
  card.innerHTML = `
    <img src="player${index + 1}.png" alt="${player.name}" />
    <div class="card-info">
      <h2>${player.name}</h2>
      <p>${player.role}</p>
    </div>
  `;
  playerGrid.appendChild(card);
});

function openModal(index) {
  const player = players[index];
  document.getElementById("modal-name").textContent = player.name;
  document.getElementById("sr").textContent = player.sr;
  document.getElementById("matches").textContent = player.matches;
  document.getElementById("jersey").textContent = player.jersey;
  document.getElementById("performance").textContent = player.performance;
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
