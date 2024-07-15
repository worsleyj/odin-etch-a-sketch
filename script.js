const squareContainer = document.querySelector(".container");

function generateSquares(size) {
    for (let i = 0; i < size; i++) {
        const div = document.createElement("div");
        div.textContent = "test";
        squareContainer.appendChild(div);
    }
}

generateSquares(16);