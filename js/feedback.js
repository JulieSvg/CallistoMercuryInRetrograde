function showPopup(message) {
  document.getElementById("popup-message").innerText = message;
  openPopup();
}

function openPopup() {
  document.getElementById("popup").classList.add("open-popup");
}

function closePopup() {
  document.getElementById("popup").classList.remove("open-popup");
}