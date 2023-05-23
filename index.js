const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const color = document.querySelector(".input-color");
const penWidth = document.querySelector(".pen-width");
const buttonClear = document.querySelector(".button");
buttonClear.addEventListener("click", clear);

function clear() {
  ctx.clearRect(0, 0, 800, 400);
}
canvas.onmousedown = function (evt) {
  ctx.beginPath();
  const x = evt.offsetX;
  const y = evt.offsetY;
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
