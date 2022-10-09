// Set default canvas size on page load
let canvasSize = 16;
const canvas = document.querySelector(".canvas");
drawGrid(canvasSize);
let isDrawing = false;

// "Refresh" button logic
const refresh = document.getElementById("refresh");
refresh.addEventListener("click", function (e) {
    //Clear existing grid
    clearGrid(canvas);
    //Update grid with number input
    canvasSize = document.getElementById("canvasSize").value;
    drawGrid(canvasSize);
});

function clearGrid(canvas) {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
}

function drawGrid(canvasSize) {
    if (canvasSize > 1 && canvasSize < 101) {
        for (i = 0; i < canvasSize; i++) {
            const canvasRow = document.createElement("canvasRow");
            canvasRow.classList.add("canvasRow");
            for (j = 0; j < canvasSize; j++) {
                const pixel = document.createElement("div");
                pixel.classList.add("pixel", "inkNone");
                canvasRow.appendChild(pixel);
            }
            canvas.appendChild(canvasRow);
        }
    }
    else {
        return;
    }
}

canvas.addEventListener('mousedown', function (e) {
    if(e.target.classList.contains("pixel")) {
        let currentColour = e.target.classList[1];
        e.target.classList.remove(currentColour);
        e.target.style.removeProperty("background-color");
        e.target.style.removeProperty("border-color");

        colour = getColour();
        if (colour == "Random") {
            let randomColour = Math.floor(Math.random()*16777215).toString(16);
            e.target.style.backgroundColor = "#" + randomColour;
            e.target.style.borderColor = "#" + randomColour;
        }
        else {
            e.target.classList.add(`ink${colour}`);
        }
        isDrawing = true; 
    }
  });

canvas.addEventListener('mousemove', function (e) {
    if (isDrawing) {
        if(e.target.classList.contains("pixel")) {
            let currentColour = e.target.classList[1];
            e.target.classList.remove(currentColour);
            e.target.style.removeProperty("background-color");
            e.target.style.removeProperty("border-color");

            //getColour()
            //e.target.classList.add(`ink${colour}`);
            if (colour == "Random") {
                let randomColour = Math.floor(Math.random()*16777215).toString(16);
                e.target.style.backgroundColor = "#" + randomColour;
                e.target.style.borderColor = "#" + randomColour;
            }
            else {
                e.target.classList.add(`ink${colour}`);
            }
        }
    }   
  });

canvas.addEventListener('mouseup', function (e) {
    if (isDrawing) {
        isDrawing = false;
    }   
  });

function getColour() {
    colourChoice = document.querySelector('input[name="colourChoice"]:checked').value;
    if (colourChoice == "red") { 
        return "Red";
    }
    else if (colourChoice == "orange") {
        return "Orange";
    }
    else if (colourChoice == "yellow") {
        return "Yellow";
    }
    else if (colourChoice == "green") {
        return "Green";
    }
    else if (colourChoice == "blue") {
        return "Blue";
    }
    else if (colourChoice == "indigo") {
        return "Indigo";
    }
    else if (colourChoice == "violet") {
        return "Violet";
    }
    else if (colourChoice == "pink") {
        return "Pink";
    }
    else if (colourChoice == "brown") {
        return "Brown";
    }
    else if (colourChoice == "black") {
        return "Black";
    }
    else if (colourChoice == "white") {
        return "White";
    }
    else if (colourChoice == "grey") {
        return "Grey";
    }
    else if (colourChoice == "eraser") {
        return "None";
    }
    else if (colourChoice == "random") {
        return "Random";
    }
  };
