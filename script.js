let canvasSize = 16;
const canvas = document.querySelector(".canvas");

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

canvas.addEventListener('mousedown', function (e) {
    if(e.target.classList.contains("pixel")) {
        //console.log(e.target);
        e.target.classList.add("colored");
        //e.target.style.backgroundColor = 'black';
    }
  });