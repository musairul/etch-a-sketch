const container = document.querySelector(".container");

const INITAL_ROWS = 16;
const INITIAL_WIDTH = 480;
container.style.maxWidth = INITIAL_WIDTH + "px";

let selectedColor = "black";

function createGrid(numRows) {
  const boxsize = INITIAL_WIDTH / numRows;
  for (let i = 0; i < numRows * numRows; i++) {
    let div = document.createElement("div");
    div.classList.add("pixel");
    div.style.height = div.style.width = boxsize + "px";
    div.addEventListener("mouseover", function (e) {
      console.log(e.target);
      e.target.style.backgroundColor = selectedColor;
    });
    container.appendChild(div);
  }
}

function deletePixels() {
  const pixels = document.querySelectorAll(".pixel");
  pixels.forEach((pixel) => {
    container.removeChild(pixel);
  });
}

function clearGrid() {
  const pixels = document.querySelectorAll(".pixel");
  pixels.forEach((pixel) => {
    pixel.style.backgroundColor = "white";
  });

  //need to delete child of container
  console.log("clear grid called");
}

function changeSize() {
  deletePixels();
  let numRows = INITAL_ROWS;
  //add input validation
  do {
    numRows = prompt("Enter the number of rows (<100)");
  } while (parseInt(numRows) > 100);
  createGrid(numRows);
}

createGrid(INITAL_ROWS);
