const statusText = document.getElementById("status");
const notifBtn = document.getElementById("enable-notifs");

// Update online/offline status
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

// Ask for notification permission immediately
notifBtn.addEventListener("click", async () => {
  if (!("Notification" in window)) {
    alert("Notifications are not supported!");
    return;
  }

  const permission = await Notification.requestPermission();
  if (permission === "granted") {
    new Notification("✅ Notifications Enabled!", {
      body: "You'll now receive automatic updates!",
      icon: "icons/s.png"
    });
    notifBtn.disabled = true;
    notifBtn.textContent = "🔔 Notifications Enabled";
  } else {
    alert("Notifications blocked!");
  }
});
