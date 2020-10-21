window.addEventListener("load", initPage);
dragElement(document.getElementById("gameContainer"));

var gameWindowEl = document.getElementById("gameWindow");
var currentWidth = "400px";
var currentHeight = "500px";

// Set the width of the sidebar to 15% and the left margin of the page content to 15%
function openGameNav() {
  document.getElementById("gameSidebar").style.width = "15%";
}
function openOptionNav() {
  document.getElementById("optionSidebar").style.width = "15%";
}
function closeGameNav() {
  document.getElementById("gameSidebar").style.width = "0";
}
function closeOptionNav() {
  document.getElementById("optionSidebar").style.width = "0";
}

function initPage() {
  createGames(gameData);
  document
    .getElementById("widthSlider")
    .addEventListener("change", updateWindow);
  document
    .getElementById("heightSlider")
    .addEventListener("change", updateWindow);
}

function createGames(games) {
  for (let i = 0; i < games.length; i++) {
    let anc = document.createElement("a");
    anc.href = "#";
    anc.innerHTML = games[i][1];
    if (anc.innerHTML.length > 8) {
      anc.style.fontSize = "1.2vw";
    }
    anc.value = games[i][0];
    anc.classList.add("game");
    anc.addEventListener("click", changeGame);
    document.getElementById("games").appendChild(anc);
  }
}

function changeGame(e) {
  e = e.target;
  document.getElementById("gameContainer").removeChild(gameWindowEl);
  let newGame = document.createElement("embed");
  newGame.id = "gameWindow";
  newGame.width = currentWidth;
  newGame.height = currentHeight;
  newGame.scale = "tofit";
  newGame.src = e.value;
  document.getElementById("gameContainer").appendChild(newGame);
  gameWindowEl = newGame;
}

function updateWindow(e) {
  e = e.target;
  let newWidth = parseInt(document.getElementById("widthSlider").value) * 10;
  let newHeight = parseInt(document.getElementById("heightSlider").value) * 10;

  gameWindowEl.width = newWidth;
  gameWindowEl.height = newHeight;

  currentWidth = newWidth;
  currentHeight = newHeight;
}
function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "Header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "Header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    document.getElementById("arrowPrompt").hidden = true;
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

var gameData = [
  ["Games/2048.swf", "2048"],
  ["Games/btd5.swf", "Bloons 5"],
  ["Games/chess.swf", "Chess"],
  ["Games/CTC1.swf", "Crush The Castle 1"],
  ["Games/CTC2.swf", "Crush The Castle 2"],
  ["Games/doom.swf", "Doom"],
  ["Games/ducklife2.swf", "Duck Life 2"],
  ["Games/ducklife3.swf", "Duck Life 3"],
  ["Games/ducklife4.swf", "Duck Life 4"],
  ["Games/duneBuggy.swf", "Dune Buggy"],
  ["Games/happyWheels.swf", "Happy Wheels"],
  ["Games/impossiblequiz.swf", "Impossible Quiz 1"],
  ["Games/impossiblequiz2.swf", "Impossible Quiz 2"],
  ["Games/isaac.swf", "The Binding Of Isaac Flash"],
  ["Games/learntofly.swf", "Learn To Fly 1"],
  ["Games/learntofly2.swf", "Learn To Fly 2"],
  ["Games/learntofly3.swf", "Learn To Fly 3"],
  ["Games/poker.swf", "Poker"],
  ["Games/PPADougnut.swf", "Papa's Dougnuteria"],
  ["Games/PPAFreezeria.swf", "Papa's Freezeria"],
  ["Games/PPAHotdog.swf", "Papa's Hotdogeria"],
  ["Games/PPAPizza.swf", "Papa's Pizzeria"],
  ["Games/PPAScoops.swf", "Papa's Scooperia"],
  ["Games/PPASushi.swf", "Papa's Susheria"],
  ["Games/PPAWings.swf", "Papa's Wingeria"],
  ["Games/raze2.swf", "Raze 2"],
  ["Games/raze3.swf", "Raze 3"],
  ["Games/S&S2.swf", "Swords and Sandals 2"],
  ["Games/SFH1.swf", "Strike Force Heros 1"],
  ["Games/SFH2.swf", "Strike Force Heros 2"],
  ["Games/supermario63.swf", "Super Mario 63"],
  ["Games/tanktrouble.swf", "Tank Trouble"],
  ["Games/tetris.swf", "Tetris"],
];
