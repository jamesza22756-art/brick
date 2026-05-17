const TH_TIME = 18;
const TH_OFFSET = 7;

const zones = [
  { city: "Kaliningrad", offset: 2 },
  { city: "Moscow", offset: 3 },
  { city: "Samara", offset: 4 },
  { city: "Yekaterinburg", offset: 5 },
  { city: "Omsk", offset: 6 },
  { city: "Krasnoyarsk", offset: 7 },
  { city: "Irkutsk", offset: 8 },
  { city: "Yakutsk", offset: 9 },
  { city: "Vladivostok", offset: 10 },
  { city: "Magadan", offset: 11 },
  { city: "Kamchatka", offset: 12 }
];

const targetTimes = zones.map(z =>
  (TH_TIME + (z.offset - TH_OFFSET) + 24) % 24
);

const START_TIMES = [8, 5, 8, 10, 9, 7, 11, 15, 15, 19, 20];

let currentTimes = [...START_TIMES];
let moveCount = 0;

const actions = [
  { name: "A", clocks: [0] },
  { name: "B", clocks: [1] },
  { name: "C", clocks: [2] },

  { name: "D", clocks: [3,4] },
  { name: "E", clocks: [5,6] },
  { name: "F", clocks: [7,8] },
  { name: "G", clocks: [9,10] },

  { name: "H", clocks: [0,3,6] },
  { name: "I", clocks: [1,4,7] },
  { name: "J", clocks: [2,5,8] }
];

const buttonStyles = [
  ["#ef4444", "#991b1b"],
  ["#f97316", "#9a3412"],
  ["#facc15", "#a16207"],
  ["#22c55e", "#166534"],
  ["#06b6d4", "#155e75"],
  ["#3b82f6", "#1e40af"],
  ["#6366f1", "#3730a3"],
  ["#a855f7", "#6b21a8"],
  ["#ec4899", "#9d174d"],
  ["#14b8a6", "#0f766e"]
];

/* ===============================
   ลบก่อน deploy: เริ่ม
================================ */
const DEBUG_MODE = new URLSearchParams(window.location.search).get("debug") === "1";

const SECRET_SOLUTION = `
เฉลย:
A x3
B x5
C x2
D x4
E x6
F x1
G x3
H x2
I x4
J x5
`;

if (DEBUG_MODE) {
  console.log(SECRET_SOLUTION);
  const box = document.getElementById("debugBox");
  box.style.display = "block";
  box.innerHTML = SECRET_SOLUTION.replaceAll("\n", "<br>");
}
/* ===============================
   ลบก่อน deploy: จบ
================================ */

function renderClock(hour) {
  const minute = 0;
  const hourAngle = ((hour % 12) + minute / 60) * 30;

  const hourRad = (hourAngle - 90) * Math.PI / 180;
  const minuteRad = -90 * Math.PI / 180;

  const hourX = 50 + 22 * Math.cos(hourRad);
  const hourY = 50 + 22 * Math.sin(hourRad);

  const minuteX = 50 + 32 * Math.cos(minuteRad);
  const minuteY = 50 + 32 * Math.sin(minuteRad);

  const ticks = Array.from({ length: 12 }).map((_, i) => {
    const angle = (i * 30 - 90) * Math.PI / 180;
    const x1 = 50 + 33 * Math.cos(angle);
    const y1 = 50 + 33 * Math.sin(angle);
    const x2 = 50 + 39 * Math.cos(angle);
    const y2 = 50 + 39 * Math.sin(angle);

    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"
      stroke="#0f172a" stroke-width="2.6" stroke-linecap="round"/>`;
  }).join("");

  return `
    <svg width="125" height="125" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="43" fill="#e2e8f0" stroke="#020617" stroke-width="4"></circle>
      ${ticks}

      <line x1="50" y1="50" x2="${minuteX}" y2="${minuteY}"
        stroke="#2563eb" stroke-width="3" stroke-linecap="round"></line>

      <line x1="50" y1="50" x2="${hourX}" y2="${hourY}"
        stroke="#ef4444" stroke-width="4.5" stroke-linecap="round"></line>

      <circle cx="50" cy="50" r="4" fill="#020617"></circle>
    </svg>
  `;
}

function renderClocks() {
  const el = document.getElementById("clocks");
  el.innerHTML = "";

  zones.forEach((z, i) => {
    const div = document.createElement("div");
    div.className = "clock-card" + (currentTimes[i] === targetTimes[i] ? " correct" : "");

    div.innerHTML = `
      <div class="city">${i + 1}. ${z.city}</div>
      ${renderClock(currentTimes[i])}
      <div class="ampm-label">${currentTimes[i] < 12 ? "AM" : "PM"}</div>
    `;

    el.appendChild(div);
  });
}

function renderButtons() {
  const el = document.getElementById("buttons");
  el.innerHTML = "";

  actions.forEach((a, index) => {
    const btn = document.createElement("button");
    const [color, shadow] = buttonStyles[index];

    btn.className = "push-btn";
    btn.style.background = color;
    btn.style.setProperty("--shadow", shadow);

    // 🔥 ใส่ตัวอักษร
    btn.innerHTML = `<div class="btn-label">${a.name}</div>`;

    btn.onclick = () => press(a);

    el.appendChild(btn);
  });
}

function press(action) {
  action.clocks.forEach(i => {
    currentTimes[i] = (currentTimes[i] + 1) % 24;
  });

  moveCount++;
  update();
}

function checkWin() {
  return currentTimes.every((t, i) => t === targetTimes[i]);
}

function update() {
  renderClocks();
  document.getElementById("moves").textContent = "Moves: " + moveCount;

  document.getElementById("status").textContent = checkWin()
    ? "🎉 Completed!"
    : "Solve the puzzle...";
}

function resetGame() {
  currentTimes = [...START_TIMES];
  moveCount = 0;
  update();
}

renderButtons();
update();