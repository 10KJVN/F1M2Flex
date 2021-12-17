let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");
let x = 100;								
let y = 100;
let size = 10;
function update(time){   					
    ctx.clearRect(0,0,canvas.width, canvas.height);	
    x++; 								
    drawSquare(x,y,size,"red"); 				
    window.requestAnimationFrame(update);
}
window.requestAnimationFrame(update);
function drawSquare(x,y,size, color){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x+50,y+0);
    ctx.lineTo(x+-50,y+-20);
    ctx.lineTo(x+-50,y+20);
    ctx.lineTo(x+50,y+0);
    ctx.lineTo(x,y);
    ctx.fill();
}

