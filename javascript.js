const container = document.querySelector(".container");
const size = 16;

// Create a size*size grid of square divs
for(let i = 0; i < size ; i++){
    const row = document.createElement("div");
    row.classList.add("row");
    for(let j = 0; j < size ; j++){
        const square = document.createElement("div");
        square.classList.add("square");
        row.appendChild(square);
    }
    container.appendChild(row);
}

