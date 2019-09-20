//jshint esversion:6

const container = document.querySelector("#container");
let btnNew = document.getElementById("btn-new");


btnNew.addEventListener("click", function() {
    let gridNum = prompt("Please enter grid size: ie. 16 x 16");
    //clearGrid();
    generateGrid(gridNum);
});



// Generates grid based on number entered by user
function generateGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const newLine = document.createElement("br");
        for (let j = 0; j < gridSize; j++) {
            const div = document.createElement("div");
            div.classList.add("gridStyle");
            div.addEventListener("mouseover",function(e){
                e.target.style.backgroundColor = "white";
            });
            container.appendChild(div);
        }
        container.appendChild(newLine);
    }
}

// function clearGrid() {
// TODO:
//     container.forEach(child) {
//
//     }
// }
