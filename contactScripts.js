var contactHeaderEl = document.getElementById("contactHeader");

function initPage() {
  contactHeaderEl.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}

window.addEventListener("load", initPage);
