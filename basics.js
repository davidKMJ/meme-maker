const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

// #1: Rectangle
// ctx.fillRect(50, 50, 100, 200);

// #2: Path
// ctx.rect(50, 50, 100, 100);
// ctx.rect(150, 150, 100, 100);
// ctx.rect(250, 250, 100, 100);
// ctx.fill();
// ctx.stroke();

// ctx.beginPath();
// ctx.rect(350, 350, 100, 100);
// ctx.fillStyle = 'red';
// ctx.fill();

// #3: Line
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(150, 150);
// ctx.lineTo(50, 150);
// ctx.lineTo(50, 50);
// ctx.stroke();

// #4: House
// ctx.fillRect(200, 200, 50, 200);
// ctx.fillRect(400, 200, 50, 200);
// ctx.lineWidth = 2;
// ctx.fillRect(300, 300, 50, 100);
// ctx.fillRect(200, 200, 200, 20);
// ctx.moveTo(200, 200);
// ctx.lineTo(325, 100);
// ctx.lineTo(450, 200);
// ctx.fill();

// #5: Human
ctx.fillRect(225, 200, 15, 100);
ctx.fillRect(340, 200, 15, 100);
ctx.fillRect(260, 200, 60, 200);
ctx.arc(290, 160, 30, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "red";
ctx.arc(275, 155, 5, 0, Math.PI);
ctx.arc(305, 155, 5, 0, Math.PI);
ctx.fill();
