const statusText = document.getElementById("status");
const refreshBtn = document.getElementById("btn-refresh");

function updateStatus() {
  if (navigator.onLine) {
    statusText.textContent = "Status: Online";
    statusText.style.color = "green";
  } else {
    statusText.textContent = "Status: Offline";
    statusText.style.color = "red";
  }
}

window.addEventListener("online", updateStatus);
window.addEventListener("offline", updateStatus);
updateStatus();

refreshBtn.addEventListener("click", () => {
  window.location.reload();
});
