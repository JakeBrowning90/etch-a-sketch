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
                pixel.classList.add("pixel");
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
        e.target.classList.add("inked");
        isDrawing = true;
    }
  });

  canvas.addEventListener('mousemove', function (e) {
    if (isDrawing) {
        if(e.target.classList.contains("pixel")) {
            e.target.classList.add("inked");
        }
    }   
  });

  canvas.addEventListener('mouseup', function (e) {
    if (isDrawing) {
        isDrawing = false;
    }   
  });

