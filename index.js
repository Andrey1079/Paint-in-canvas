import { canvas, ctx, tempCanvas, tempCtx, color, penWidth, buttonClear } from "./utils/constants.js";
console.log;
const buttonRect = document.querySelector(".button-rect");
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
        tempCtx.rect(xStart, yStart, xMove - xStart, yMove - yStart);
        tempCtx.clearRect(0, 0, 800, 400);
        tempCtx.stroke();
      };
      tempCanvas.onmouseup = (evtOnUp) => {
        tempCanvas.onmousemove = null;
        ctx.beginPath();
        let xEnd = evtOnUp.offsetX;
        let yEnd = evtOnUp.offsetY;
        ctx.rect(xStart, yStart, xEnd - xStart, yEnd - yStart);
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
