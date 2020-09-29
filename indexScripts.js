var gameBtnEl = document.getElementById("gameBtn");
var contactBtnEl = document.getElementById("contactBtn");

function initPage() {
  gameBtnEl.addEventListener("click", loadPage);
  contactBtnEl.addEventListener("click", loadPage);
}

function loadPage(e) {
  e = e.target;
  if (e.id === "gameBtn") {
    window.location.href = "games.html";
  } else if (e.id === "contactBtn") {
    window.location.href = "contact.html";
  } else {
    window.location.href = "index.html";
  }
}

window.addEventListener("load", initPage);
