const squaresContainer = document.querySelector("#squares-container");

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const div = document.createElement("div");
        div.classList.add("square");
        squaresContainer.appendChild(div);
    }

    const lineBreak = document.createElement("div");
    lineBreak.classList.add("line-break");
    squaresContainer.appendChild(lineBreak);
}