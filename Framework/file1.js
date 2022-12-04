

canvas = document.getElementById("canvas");
cfx = canvas.getContext("2d");

function print(){
	console.log("q123weqwe");
}
// a 65
// s 83
// d 68
// f 87
var keys = [];
var x = 0;
var y = 0;
window.onkeydown = (e) =>{
	console.log(e.keyCode);
	keys[e.keyCode] = true;
	
	
}

window.onkeyup = (e) => {
	keys[e.keyCode] = false;
}
