const gridEl = document.getElementById("grid");
const gridSize = 25;
let safeSpots = [];

function generateGrid() {
  gridEl.innerHTML = "";
  for (let i = 0; i < gridSize; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = i;
    cell.onclick = () => handleClick(cell, i);
    gridEl.appendChild(cell);
  }
}

function predict() {
  safeSpots = [];
  while (safeSpots.length < 22) {
    let r = Math.floor(Math.random() * gridSize);
    if (!safeSpots.includes(r)) safeSpots.push(r);
  }

  document.querySelectorAll(".cell").forEach((cell, idx) => {
    if (safeSpots.includes(idx)) {
      cell.classList.add("safe");
    } else {
      cell.classList.add("mine");
    }
  });
}

function resetGrid() {
  generateGrid();
}

function handleClick(cell, index) {
  if (safeSpots.includes(index)) {
    cell.classList.add("safe");
  } else {
    cell.classList.add("mine");
  }
}

generateGrid();
