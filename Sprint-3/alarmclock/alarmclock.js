let intervalId;
const audio = new Audio("alarmsound.mp3");

function updateDisplay(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");

  const timeDisplay = document.querySelector(".time-display");
  if (timeDisplay) {
    timeDisplay.textContent = `${minutes}:${seconds}`;
  }
}

function clearStatusMessage() {
  const status = document.getElementById("status-message");
  if (status) {
    status.textContent = "";
    status.className = "status-message";
  }
}

function showStatusMessage(message, type) {
  const status = document.getElementById("status-message");
  if (!status) return;
  status.textContent = message;
  status.className = `status-message ${type}`;

  if (type === "success") {
    setTimeout(clearStatusMessage, 3000);
  }
}

function resetAlarmState() {
  const card = document.querySelector(".card");
  if (card) card.classList.remove("alarm-triggered");
}

function setAlarm() {
  clearInterval(intervalId);
  resetAlarmState();
  clearStatusMessage();

  const input = document.getElementById("alarmSet");
  let totalSeconds = Number(input.value);

  if (!input.value) { showStatusMessage("⚠️ Please enter a number", "error"); input.focus(); return; }
  if (isNaN(totalSeconds)) { showStatusMessage("⚠️ Please enter a valid number", "error"); input.focus(); return; }
  if (totalSeconds <= 0) { showStatusMessage("⚠️ Please enter a number greater than 0", "error"); input.focus(); return; }
  if (totalSeconds > 3600) { showStatusMessage("⚠️ Maximum time is 3600 seconds (1 hour)", "error"); input.focus(); return; }

  showStatusMessage(`✅ Alarm set for ${totalSeconds} seconds`, "success");
  updateDisplay(totalSeconds);

  intervalId = setInterval(() => {
    totalSeconds -= 1;
    if (totalSeconds <= 0) {
      clearInterval(intervalId);
      updateDisplay(0);
      playAlarm();
      const card = document.querySelector(".card");
      if (card) card.classList.add("alarm-triggered");
      showStatusMessage("⏰ Time's up! Alarm ringing!", "active");
      input.value = "";
      return;
    }
    updateDisplay(totalSeconds);
  }, 1000);
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
  audio.currentTime = 0;
}

function setup() {
  document.getElementById("set").addEventListener("click", setAlarm);
  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
    clearInterval(intervalId);
    intervalId = null;
    updateDisplay(0);
    resetAlarmState();
    showStatusMessage("⏹ Alarm stopped", "success");
    document.getElementById("alarmSet").value = "";
  });

  document.getElementById("alarmSet").addEventListener("keypress", (e) => {
    if (e.key === "Enter") setAlarm();
  });
}

window.onload = setup;
