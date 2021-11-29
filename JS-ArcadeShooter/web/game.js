let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "blue";
ctx.strokeStyle = "red";

ctx.beginPath();
ctx.moveTo(50,20);
ctx.lineTo(-50,-20);
ctx.lineTo(-20,50);
ctx.lineTo(20,50);
ctx.stroke();
ctx.fill();

let x = 100;
let y = 100;
let size = 10;
ctx.fillStyle = "red";
function update(time){

    x++;
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+size,y);
    ctx.lineTo(x,y+size);
    ctx.lineTo(x,y);
    ctx.fill();
    window.requestAnimationFrame(update);
}
window.requestAnimationFrame(update);

function drawShip(permanent);
