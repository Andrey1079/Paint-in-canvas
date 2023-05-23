const canvas = document.querySelector(".canvas");
const tempCanvas = document.querySelector(".temporary-canvas");
const ctx = canvas.getContext("2d");
const tempCtx = tempCanvas.getContext("2d");
const color = document.querySelector(".input-color");
const penWidth = document.querySelector(".pen-width");
const buttonClear = document.querySelector(".button");
const buttonRect = document.querySelector(".button-rect");
const drawningPlaca = document.querySelector(".drawning-place");
buttonClear.addEventListener("click", clear);
buttonRect.addEventListener("click", makeRect);
function clear() {
  ctx.clearRect(0, 0, 800, 400);
}

function makeRect() {
  {
    tempCtx.beginPath();
    tempCtx.clearRect(0, 0, 800, 400);
    tempCanvas.classList.add("canvas-visible");
    tempCanvas.onmousedown = (evtOnDown) => {
      let xStart = evtOnDown.offsetX;
      let yStart = evtOnDown.offsetY;
      tempCtx.beginPath;
      tempCtx.lineWidth = penWidth.value;
      tempCtx.strokeStyle = color.value;
      tempCanvas.onmousemove = (evtInMove) => {
        tempCtx.beginPath();
        tempCanvas.onmousedown = null;
        let xMove = evtInMove.offsetX;
        let yMove = evtInMove.offsetY;
        tempCtx.rect(xStart, yStart, Math.abs(xStart - xMove), Math.abs(yStart - yMove));
        tempCtx.clearRect(0, 0, 800, 400);
        tempCtx.stroke();
      };
      tempCanvas.onmouseup = (evtOnUp) => {
        tempCanvas.onmousemove = null;
        ctx.beginPath();
        let xEnd = evtOnUp.offsetX;
        let yEnd = evtOnUp.offsetY;
        console.log(xEnd, yEnd);
        ctx.rect(xStart, yStart, Math.abs(xEnd - xStart), Math.abs(yStart - yEnd));
        ctx.stroke();
        tempCanvas.classList.remove("canvas-visible");
        canvas.onmouseup = null;
      };
    };
  }
}

canvas.onmousedown = function (evt) {
  ctx.beginPath();
  let x = evt.offsetX;
  let y = evt.offsetY;
  ctx.moveTo(x, y);
  ctx.lineWidth = penWidth.value;
  ctx.strokeStyle = color.value;
  canvas.onmousemove = function (evt) {
    const x = evt.offsetX;
    const y = evt.offsetY;
    ctx.lineTo(x, y);
    ctx.stroke();
  };
  canvas.onmouseup = function () {
    ctx.closePath();
    canvas.onmousemove = null;
  };
};
