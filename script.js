const squareContainer = document.querySelector(".container");

function generateSquares(size) {
    let sizeSquared = size ** 2;

    for (let i = 0; i < sizeSquared; i++) {
        const div = document.createElement("div");
        div.textContent = "test";
        div.style.width = 100/size + "%";
        div.style.height = "50px";

        div.addEventListener("mouseover", () => {
            div.style.background = "black";
        })

        squareContainer.appendChild(div);
    }
}

generateSquares(4);