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

const gridSizeSlider = document.querySelector("#grid-size");
let currentSize = document.querySelector("#current-size");

gridSizeSlider.oninput = () => {
    currentSize.textContent = `${gridSizeSlider.value} x ${gridSizeSlider.value}`;
}

gridSizeSlider.onchange = () => {
    resetCanvas();
    createGrid(gridSizeSlider.value);
    enable();
};

const colorPicker = document.querySelector("#color-picker");
const rainbowBtn = document.querySelector("#rainbow");
let rainbow = false;

rainbowBtn.addEventListener("click", () => {
    if (rainbow == true) {
        rainbow = false;
        rainbowBtn.style.backgroundColor = "#eee";
    } else {
        rainbow = true;
        rainbowBtn.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    }
});

function enable() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.addEventListener("mouseover", (e) => {
        if (e.buttons == 1) {
            if (rainbow == true) {
                let randomColor = Math.floor(Math.random()*16777215).toString(16)
                square.style.backgroundColor = `#${randomColor}`;
            } else {
                square.style.backgroundColor = colorPicker.value;
            }
            
        } else if (e.buttons == 2) {
            square.style.backgroundColor = "#fff";
        }
    }));
    
    squares.forEach(square => square.addEventListener("mousedown", (e) => {
        if (e.buttons == 1) {
            if (rainbow == true) {
                let randomColor = Math.floor(Math.random()*16777215).toString(16)
                square.style.backgroundColor = `#${randomColor}`;
            } else {
                square.style.backgroundColor = colorPicker.value;
            }
        } else if (e.buttons == 2) {
            square.style.backgroundColor = "#fff";
        }
    }));
}

const resetCanvasBtn = document.querySelector("#reset-canvas");
resetCanvasBtn.addEventListener("click", resetCanvas);

function resetCanvas() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.style.backgroundColor = "#fff");
}