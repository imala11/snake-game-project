document.getElementById('box2').style.left = "50px";
document.getElementById("box2").style.top = "50px";

var a = 250;
var b = 250;
var da = 20;
var db = 20;

document.addEventListener ('keydown', function(event2) {
    console.log(event.keyCode);

    if (event.keyCode == 68) {
        a = a + da;
    }
    if (event.keyCode == 65) {
        a = a - da;
    }
    if (event.keyCode == 83) {
        b = b + db;
    }
    if (event.keyCode == 87) {
        b = b - db;
    }
    document.getElementById("box2").style.left = a + "px"
    document.getElementById("box2").style.top = b + "px"
});