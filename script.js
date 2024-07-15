const squareContainer = document.querySelector(".container");
const newGridBtn = document.querySelector(".new-grid");
const clearGridBtn = document.querySelector(".clear-grid");
const hoverToggle = document.querySelector(".hover-toggle");
const clickToggle = document.querySelector(".click-toggle");
const bwToggleBtn = document.querySelector(".bw-toggle");
const rgbToggleBtn = document.querySelector(".rgb-toggle");

let gridSize = 16;
let inputType = "mouseover";
let isRGB = false;

newGridBtn.addEventListener("click", () => {
    selectSize();
})

clearGridBtn.addEventListener("click", () => {
    generateSquares(gridSize, isRGB);
})

hoverToggle.addEventListener("click", () => {
    inputType = "mouseover";
    hoverToggle.style.background = "white";
    clickToggle.style.background = "grey";
    generateSquares(gridSize, isRGB);
})

clickToggle.addEventListener("click", () => {
    inputType = "click";
    clickToggle.style.background = "white";
    hoverToggle.style.background = "grey";
    generateSquares(gridSize, isRGB);
})

bwToggleBtn.addEventListener("click", () => {
    isRGB = false;
    bwToggleBtn.style.background = "white";
    rgbToggleBtn.style.background = "grey";
    generateSquares(gridSize, isRGB);
})

rgbToggleBtn.addEventListener("click", () => {
    isRGB = true;
    rgbToggleBtn.style.background = "white";
    bwToggleBtn.style.background = "grey";
    generateSquares(gridSize, isRGB);
})

function selectSize() {
    gridSize = prompt("What should the size of the grid be? (1-100)", 16)
    if (gridSize <= 100 && gridSize > 0) {
        generateSquares(gridSize, isRGB);
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

function generateSquares(gridSize, isRGB) {
    clearGrid();
    let sizeSquared = gridSize ** 2;

    for (let i = 0; i < sizeSquared; i++) {
        const div = document.createElement("div");
        div.style.width = 100/gridSize + "%";
        div.style.height = "50px";
        div.style.background = "white";

        div.addEventListener(inputType, () => {
            if (isRGB) {
                newColor = Math.floor(Math.random()*16777215).toString(16);
            } else {
                newColor = "000000";
            }
            div.style.background = "#" + newColor;
        })

        squareContainer.appendChild(div);
    }
}

generateSquares(gridSize, isRGB);