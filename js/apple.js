
document.getElementById('box2').style.left = "50px";
document.getElementById("box2").style.top = "50px";

var a = 250;
var b = 250;
var da = 20;
var db = 20;
var r = 10;

var canvas = document.getElementById("modelZone"); //get the canvas dom object
var ctx = canvas.getContext("2d"); //get the context

var redraw = function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height); //clear canvas
    ctx.beginPath();  //draw the object c
    ctx.closePath();
    ctx.fill();
      
    requestAnimationFrame(redraw);
  }

function move(){
  var f = Math.random() // this returns a float between 0.0 and 1.0
  a = f * canvas.width;
  b = f * canvas.height;
}
redraw();

setInterval(move, 1000);

document.getElementById("box2").style.left = a + "px"
document.getElementById("box2").style.top = b + "px"