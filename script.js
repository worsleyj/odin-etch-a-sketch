const squareContainer = document.querySelector(".container");
const newGridBtn = document.querySelector(".new-grid");
const hoverToggle = document.querySelector(".hover-toggle");
const clickToggle = document.querySelector(".click-toggle");

let gridSize = 16;
let inputType = "mouseover";

hoverToggle.addEventListener("click", () => {
    inputType = "mouseover";
    hoverToggle.style.background = "white";
    clickToggle.style.background = "grey";
    generateSquares(gridSize);
})

clickToggle.addEventListener("click", () => {
    inputType = "click";
    clickToggle.style.background = "white";
    hoverToggle.style.background = "grey";
    generateSquares(gridSize);
})

newGridBtn.addEventListener("click", () => {
    selectSize();
})

function selectSize() {
    gridSize = prompt("What should the size of the grid be? (1-100)", 16)
    if (gridSize <= 100 && gridSize > 0) {
        generateSquares(gridSize);
    } else {
        alert("Grid size invalid! Try again with a number between 1 and 100.")
        selectSize();
    }
}

function clearGrid() {
    while (squareContainer.firstChild) {
        squareContainer.removeChild(squareContainer.lastChild);
    }
}

function generateSquares(gridSize) {
    clearGrid();
    let sizeSquared = gridSize ** 2;

    for (let i = 0; i < sizeSquared; i++) {
        const div = document.createElement("div");
        div.style.width = 100/gridSize + "%";
        div.style.height = "50px";

        div.addEventListener(inputType, () => {
            // div.style.background = "black";
            div.style.background = "rgb(0 0 0 / 40%)";
        })

        squareContainer.appendChild(div);
    }
}

generateSquares(gridSize);