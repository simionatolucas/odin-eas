function createGrid(size) {
    const squaresContainer = document.querySelector("#squares-container");

    squaresContainer.setAttribute('style', `grid-template-columns: repeat(${size}, 1fr); 
                                            grid-template-rows: repeat(${size}, 1fr);`);  

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const div = document.createElement("div");
            div.classList.add("square");
            squaresContainer.appendChild(div);
        }
    }
}

createGrid(16);
enable();

const gridSizeBtn = document.querySelector("#grid-size");
gridSizeBtn.addEventListener("click", () => {
    let size = prompt("Grid size (max 100): ");
    let currentSize = document.querySelector("#current-size");

    while(size > 100) {
        size = prompt("Grid size (max 100): ");
    }

    resetCanvas();
    createGrid(size);
    enable();

    currentSize.textContent = `Current size: ${size}`;
});


function enable() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.addEventListener("mouseover", (e) => {
        if (e.buttons == 1) {
            square.classList.add("selected");
        } else if (e.buttons == 2) {
            square.classList.remove("selected");
        }
    }));
    
    squares.forEach(square => square.addEventListener("mousedown", (e) => {
        if (e.buttons == 1) {
            square.classList.add("selected");
        } else if (e.buttons == 2) {
            square.classList.remove("selected");
        }
    }));
}

const resetCanvasBtn = document.querySelector("#reset-canvas");
resetCanvasBtn.addEventListener("click", resetCanvas);

function resetCanvas() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.classList.remove("selected"));
}