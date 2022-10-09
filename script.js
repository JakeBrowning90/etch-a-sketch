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



canvas.addEventListener('mousedown', function (e) {
    if(e.target.classList.contains("pixel")) {
        drawOver(e.target);
        colour = getColour();
        if (colour == "Random") {
            colourRandom(e.target);
        }
        else if (colour == "Custom"){
            colourCustom(e.target);
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
            drawOver(e.target);
            if (colour == "Random") {
                colourRandom(e.target);
            }
            else if (colour == "Custom") {
                colourCustom(e.target);
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

function colourRandom(target) {
    let randomColour = Math.floor(Math.random()*16777215).toString(16);
    target.style.backgroundColor = "#" + randomColour;
    target.style.borderColor = "#" + randomColour;
}

function colourCustom(target) {
    let hexCode = document.getElementById("hexCode").value;
    target.style.backgroundColor = "#" + hexCode;
    target.style.borderColor = "#" + hexCode;
}

function drawOver(target) {
    let currentColour = target.classList[1];
    target.classList.remove(currentColour);
    target.style.removeProperty("background-color");
    target.style.removeProperty("border-color");
    return;
}

function getColour() {
    colourChoice = document.querySelector('input[name="colourChoice"]:checked').value;
    return colourChoice;
  };
