let squares = 16; // how many pixels to add to grid, max of 100
const gridButton = document.querySelector("#grid-button");
const container = document.querySelector("#container");

function generate() {
    for(i = 0; i < squares; i++) {
        let column = document.createElement("div");
        column.className = "column";
        container.appendChild(column);
        for(j = 0; j < squares; j++) {
            let square = document.createElement("div");
            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = "green";
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

gridButton.addEventListener("click", () => {
    squares = prompt("What size (x by x) should the grid be? Must be below 100.");
    if(squares <= 100) {
        resetGrid();
        generate();
    } else {
        square = 16;
        resetGrid();
        generate();
        alert("Size too big! Must be below 100 squares.")
    }
})

generate()