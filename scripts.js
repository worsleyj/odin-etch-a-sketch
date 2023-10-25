const DIV_NUM = 16;
const container = document.querySelector("#container");

for(i = 0; i < DIV_NUM; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "green";
    })
    square.className = "square";
    container.appendChild(square);
}
