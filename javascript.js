const container = document.querySelector(".container");
let size = 16;

// Create a size*size grid of square divs
function createGrid(){
    container.textContent = "";
    const sqSize = 100 / size;
    for(let i = 0; i < size ; i++){
    const row = document.createElement("div");
    row.classList.add("row");
    for(let j = 0; j < size ; j++){
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("square");
        squareDiv.style.width = `${sqSize}%`;
        squareDiv.style.height = `${sqSize}%`;
        row.appendChild(squareDiv);
    }
    container.appendChild(row);
    }
    setHoverEffect();
}


// Set a hover effect so that the grid divs change color 
// when the mouse passes over them  
function setHoverEffect(){
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) =>{
        square.addEventListener("mouseover", ()=>{
            square.style.backgroundColor = randomColor();
        });
    });
}

// get a random color
function randomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}


// Set click event on the button to change the size of the grid
const button = document.querySelector(".button");
button.addEventListener("click", ()=>{
    let enterSize = prompt("Enter the number of squares per size (ex: 16 for 16x16)");
    enterSize = parseInt(enterSize) || 16;
    if(enterSize > 100) enterSize = 100;
    setSize(enterSize);
    createGrid();
});

function setSize(newSize){
    size = newSize;
}