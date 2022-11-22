function createGrid(size) {
    const squaresContainer = document.querySelector("#squares-container");

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const div = document.createElement("div");
            div.classList.add("square");
            squaresContainer.appendChild(div);
        }

        const lineBreak = document.createElement("div");
        lineBreak.classList.add("line-break");
        squaresContainer.appendChild(lineBreak);
    }
}

createGrid(16);

const squares = document.querySelectorAll(".square");

squares.forEach(square => square.addEventListener("mouseover", (e) => {
    if (e.buttons == 1) {
        square.classList.add("selected");
    } else if (e.buttons == 2) {
        square.classList.remove("selected");
    }
}));

squares.forEach(square => square.addEventListener("click", (e) => {
    if (e.buttons == 0) {
        square.classList.add("selected");
    } else if (e.buttons == 2) {
        square.classList.remove("selected");
    }
}));

const resetCanvas = document.querySelector("#reset-canvas");
resetCanvas.addEventListener("click", () => {
    squares.forEach(square => square.classList.remove("selected"));
});