const saveBtn = document.querySelector("#save");
const textInput = document.querySelector("#text");
const colorOptions = Array.from(document.querySelectorAll(".color-option"));
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineWidth = document.querySelector("#line-width");
const color = document.querySelector("#color");
const modeBtn = document.querySelector("#mode-btn");
const destroyBtn = document.querySelector("#destroy-btn");
const eraserBtn = document.querySelector("#eraser-btn");
const file = document.querySelector("#file");

canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 5;
ctx.lineCap = "round";

let isPainting = false;
let isFilling = false;
function onMove(event) {
    if (isPainting) {
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
}
function onMouseDown() {
    isPainting = true;
}
function onMouseUp() {
    isPainting = false;
}
function onLineWidthChange(event) {
    ctx.lineWidth = event.target.value;
}
function onColorChange(event) {
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
}
function onColorClick(event) {
    colorValue = event.target.dataset.color;
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    color.value = colorValue;
}
function onModeClick() {
    if (isFilling) {
        modeBtn.innerText = "Fill";
        isFilling = false;
    } else {
        modeBtn.innerText = "Draw";
        isFilling = true;
    }
}
function onCanvasClick() {
    if (isFilling) {
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}
function onDestroyClick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function onEraserClick() {
    isFilling = true;
    onModeClick();
    ctx.strokeStyle = "white";
}
function onFileChange(event) {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.src = url;
    image.onload = function () {
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        fileInput.value = "";
    };
}
function onDoubleClick(event) {
    const text = textInput.value;
    if (text === "") {
        return;
    }
    ctx.save();
    ctx.font = "48px Arial";
    ctx.lineWidth = 1;
    ctx.fillText(text, event.offsetX, event.offsetY);
    ctx.restore();
}
function onSaveClick() {
    const url = canvas.toDataURL();
    const a = document.createElement("a");
    a.href = url;
    a.download = "myDrawing.png";
    a.click();
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", onMouseUp);
canvas.addEventListener("mouseout", onMouseUp);
canvas.addEventListener("click", onCanvasClick);
canvas.addEventListener("dblclick", onDoubleClick);

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);

colorOptions.forEach((color) => color.addEventListener("click", onColorClick));
modeBtn.addEventListener("click", onModeClick);
destroyBtn.addEventListener("click", onDestroyClick);
eraserBtn.addEventListener("click", onEraserClick);
file.addEventListener("change", onFileChange);
save.addEventListener("click", onSaveClick);
