const squareContainer = document.querySelector(".container");

function selectSize() {
    let gridSize = prompt("What should the size of the grid be? (1-100)", 16)
    if (gridSize <= 100 && gridSize > 0) {
        generateSquares(gridSize);
    } else {
        alert("Grid size invalid! Try again with a number between 1 and 100.")
        selectSize();
    }
}

function generateSquares(gridSize) {
    let sizeSquared = gridSize ** 2;

    for (let i = 0; i < sizeSquared; i++) {
        const div = document.createElement("div");
        div.textContent = "test";
        div.style.width = 100/gridSize + "%";
        div.style.height = "50px";

        div.addEventListener("mouseover", () => {
            div.style.background = "black";
        })

        squareContainer.appendChild(div);
    }
}

selectSize();