import { app } from "./app.js";

import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const db = getFirestore(app);

function showPopup(message) {
  document.getElementById("popup-message").innerText = message;
  openPopup();
}

function openPopup() {
  const popup = document.getElementById("popup");
  popup.classList.add("open-popup");
  popup.scrollIntoView({ behavior: "smooth" });
}

function closePopup() {
  document.getElementById("popup").classList.remove("open-popup");
}

export async function sendFeedback(answer) {
  try {
    await addDoc(collection(db, "feedback"), {
      answer: answer,
      timestamp: new Date()
    });
    showPopup("Thanks for your feedback!");
  } catch (e) {
    console.error("Error sending feedback: ", e);
    showPopup("Something went wrong. Please try again.");
  }
}

window.sendFeedback = sendFeedback;

window.closePopup = closePopup;
