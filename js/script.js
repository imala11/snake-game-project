document.getElementById('box').style.left = "50px";
document.getElementById("box").style.top = "50px";

var x = 50;
var y = 50;
var dx = 20;
var dy = 20;


    document.addEventListener ('keydown', function(event) {
        console.log(event.keyCode);

        if (event.keyCode == 39) {
            x = x + dx;
        }
        if (event.keyCode == 37) {
            x = x - dx;
        }
        if (event.keyCode == 40) {
            y = y + dy;
        }
        if (event.keyCode == 38) {
            y = y - dy;
        }
        document.getElementById("box").style.left = x + "px"
        document.getElementById("box").style.top = y + "px"

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