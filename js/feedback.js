let popup = document.getElementById("popup");

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

function openPopup() {
  popup.classList.add("open-popup");

  popup.scrollIntoView({ behavior: "smooth" });
}