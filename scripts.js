let squares = 16; // how many pixels to add to grid, max of 100
const rgbButton = document.querySelector("#rgb-button");
const monoButton = document.querySelector("#mono-button");
const prev = document.querySelector("#prev-color");
const logo = document.querySelector("h2");
const choose = document.querySelector("h3");
const container = document.querySelector("#container");

function generateRGB() {
    for(i = 0; i < squares; i++) {
        let column = document.createElement("div");
        column.className = "column";
        container.appendChild(column);
        for(j = 0; j < squares; j++) {
            let square = document.createElement("div");
            square.addEventListener("mouseover", () => {
                const randomColor = Math.floor(Math.random()*16777215).toString(16); // generates a random color hex
                square.style.backgroundColor = "#" + randomColor; // changes "pixels" of etch-a-sketch to randomized colors
                rgbButton.style.backgroundColor = "#" + randomColor; // changes menu items to match the current random color
                monoButton.style.backgroundColor = "#" + randomColor;
                logo.style.color = "#" + randomColor;
                choose.style.color = "#" + randomColor;
            })
            square.addEventListener("click", () => {
                square.style.backgroundColor = "white";
            })
            square.className = "square";
            column.appendChild(square);
        }
    }
    
}

function generateMonochrome() {
    for(i = 0; i < squares; i++) {
        let column = document.createElement("div");
        column.className = "column";
        container.appendChild(column);
        for(j = 0; j < squares; j++) {
            let square = document.createElement("div");
            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = "black"  // changes "pixels" of etch-a-sketch
                rgbButton.style.backgroundColor = "white"; // changes menu items back to black and white
                monoButton.style.backgroundColor = "white";
                logo.style.color = "white";
                choose.style.color = "white";
            })
            square.addEventListener("click", () => {
                square.style.backgroundColor = "white";
            })
            square.className = "square";
            column.appendChild(square);
        }
    }
    
}

function resetGrid() {
    while(container.firstChild) {
        container.removeChild(container.firstChild)
    }
}

rgbButton.addEventListener("click", () => {
    squares = prompt("What size (x by x) should the grid be? Must be below 100.");
    if(squares <= 100) {
        resetGrid();
        generateRGB();
    } else {
        square = 16;
        resetGrid();
        generateRGB();
        alert("Size too big! Must be below 100.")
    }
})

monoButton.addEventListener("click", () => {
    squares = prompt("What size (x by x) should the grid be? Must be below 100.");
    if(squares <= 100) {
        resetGrid();
        generateMonochrome();
    } else {
        square = 16;
        resetGrid();
        generateMonochrome();
        alert("Size too big! Must be below 100.")
    }
})

generateRGB() // initial setup for etch-a-sketch