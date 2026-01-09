const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");
const lapsContainer = document.getElementById("laps");
const card = document.getElementById("card");
const clockHand = document.getElementById("clockHand");

let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;
let running = false;
const STORAGE_KEY = "neon_stopwatch_laps";

/* ---------- TIMER CORE --------- */
function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const mini = Math.floor((ms % 1000) / 10);
    const pad = (n) => String(n).padStart(2, "0");
    return `${pad(hours)} : ${pad(minutes)} : ${pad(seconds)} : ${pad(mini)}`;
}

function updateUI() {
    display.textContent = formatTime(elapsedTime);

    // Smooth hand rotation (0–60s => 0–360deg)
    const msInMinute = 60 * 1000;
    const current = elapsedTime % msInMinute;
    const angle = (current / msInMinute) * 360;
    clockHand.style.transform = `translateX(-50%) rotate(${angle + 0}deg)`;
}

function startTimer() {
    if (running) return;
    running = true;
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        updateUI();
    }, 80); // smooth-ish

    // animations
    startBtn.textContent = "PAUSE";
    startBtn.classList.add("running");
    card.classList.add("running");
}

function pauseTimer() {
    if (!running) return;
    running = false;
    clearInterval(timerInterval);
    timerInterval = null;

    startBtn.textContent = "START";
    startBtn.classList.remove("running");
    card.classList.remove("running");
}

function resetTimer() {
    pauseTimer();
    elapsedTime = 0;
    updateUI();
    clearLaps();
}

/* ---------- LAPS + LOCALSTORAGE --------- */
function loadLapsFromStorage() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return;
    try {
        const arr = JSON.parse(stored);
        arr.forEach((time, i) => renderLapRow(i + 1, time));
    } catch (e) {
        console.error("Lap parse error:", e);
    }
}

function saveLapsToStorage() {
    const lapTimes = Array.from(
        document.querySelectorAll(".lap-row .lap-time")
    ).map((node) => node.textContent.trim());
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lapTimes));
}

function clearLaps() {
    lapsContainer.innerHTML = "";
    localStorage.removeItem(STORAGE_KEY);
}

function renderLapRow(index, time) {
    const row = document.createElement("div");
    row.className = "lap-row";

    const label = document.createElement("div");
    label.className = "lap-label";
    label.textContent = `Lap ${index}`;

    const value = document.createElement("div");
    value.className = "lap-time";
    value.textContent = time;

    row.appendChild(label);
    row.appendChild(value);
    lapsContainer.prepend(row); // latest on top
}

function addLap() {
    if (!elapsedTime) return;
    const timeStr = formatTime(elapsedTime);
    const currentCount = document.querySelectorAll(".lap-row").length + 1;
    renderLapRow(currentCount, timeStr);
    saveLapsToStorage();
}
/* ---------- EVENT LISTENERS ---------- */
startBtn.addEventListener("click", () => {
    running ? pauseTimer() : startTimer();
});

resetBtn.addEventListener("click", resetTimer);
lapBtn.addEventListener("click", addLap);

/* ---------- INITIALIZE ---------- */
// loadMode();
loadLapsFromStorage();
updateUI();