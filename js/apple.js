var score = 0;
document.getElementById()
document.getElementById('box2').style.left = "50px";
document.getElementById("box2").style.top = "50px";

var a = 250;
var b = 250;
var da = 20;
var db = 20;
var r = 10;

var canvas = document.getElementById("modelZone"); //get the canvas dom object
var ctx = canvas.getContext("2d"); //get the context


function move(){
    var w = Math.random()
    var h = Math.random() // this returns a float between 0.0 and 1.0
    a = w * canvas.width;
    b = h * canvas.height;
    document.getElementById('box2').style.left = a +"px";
    document.getElementById("box2").style.top = b + "px";
    if (a > 1370){
        move();
    };
    if (a < 10){
        move();
    };
    if (b < 10){
        move();
    };
    if (b > 870){
        move();
    };
};
 

document.getElementById("box2").style.left = a + "px"
document.getElementById("box2").style.top = b + "px"

document.getElementById('box').style.left = "50px";
document.getElementById("box").style.top = "50px";

var x = 50;
var y = 50;
var dx = 20;
var dy = 20;

function framex() {
    if (x == 1370) {
      clearInterval(id);
      alert("you lost");
    } else {
    x++;
      document.getElementById('box').style.left = x + 'px'; 
      var id = setInterval(framex, 100);
    };
};

    document.addEventListener ('keydown', function(event) {
        console.log(event.keyCode);
        

        if (event.keyCode == 39) {
            x = x + dx;
        };
        if (event.keyCode == 37) {
            x = x - dx;
        };
        if (event.keyCode == 40) {
            y = y + dy;
        };
        if (event.keyCode == 38) {
            y = y - dy;
        };
        document.getElementById("box").style.left = x + "px"
        document.getElementById("box").style.top = y + "px"
        
        var hy = {posx: x, posy: y, width: 40, height: 40}
        var wx = {posa: a, posb: b, width: 40, height: 40}
        
        if (hy.posx < (wx.posa + wx.width)+20 &&
         (hy.posx + hy.width)+ 20 > wx.posa &&
         hy.posy < (wx.posb + wx.height)+20 &&
         (hy.height + hy.posy)+20 > wx.posb) {
          // collision detected!
          console.log("collision");
          move();
          document.getElementsByTagName("h2")= document.write
        };
        if (x < 10) {
            document.getElementById("box").style.visibility= "hidden";
            alert("you lost");
        }
        else if (x > 1370) {
            document.getElementById("box").style.visibility= "hidden";
            alert("you lost");
        }
        else if (y < 10) {
            document.getElementById("box").style.visibility= "hidden";
            alert("you lost");
        }
        else if (y > 870) {
            document.getElementById("box").style.visibility= "hidden";
            alert("you lost");
        }
    });

    