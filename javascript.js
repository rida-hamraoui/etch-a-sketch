const container = document.querySelector(".container");
const size = 16;

// Create a size*size grid of square divs
for(let i = 0; i < size ; i++){
    const row = document.createElement("div");
    row.classList.add("row");
    for(let j = 0; j < size ; j++){
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("square");
        row.appendChild(squareDiv);
    }
    container.appendChild(row);
}

// Set a hover effect so that the grid divs change color 
// when the mouse passes over them  
const squares = document.querySelectorAll(".square");
squares.forEach((square) =>{
    square.addEventListener("mouseover", ()=>{
        square.style.backgroundColor = "black";
    });
});