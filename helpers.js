var canvas = document.getElementById("GamifiedCanvas");
var ctx = canvas.getContext("2d");

function dist(x1,y1,x2,y2)
{
	return Math.abs(Math.sqrt( ((x2-x1)*(x2-x1)) + ((y2-y1)*(y2-y1)) ));
}

function getMousePos(canvas, evt) 
{
    var rect = canvas.getBoundingClientRect();
	mouseX = evt.clientX - rect.left;
	mouseY = evt.clientY - rect.top;
}

canvas.addEventListener('mousedown', function(evt) {
	HandlePress();
    }, false);
canvas.addEventListener('mousemove', function(evt) {
    getMousePos(canvas, evt);
    }, false);

var mouseX;
var mouseY;

