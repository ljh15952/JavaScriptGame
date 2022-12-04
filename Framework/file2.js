print();
cfx.fillRect(50,50,50,50);

setTimeout(print, 5000);

var counter = 0;

function Mainloop(){
	cfx.clearRect(0,0,500,500);
	counter++;
	if(counter >= 5){
		//clearInterval(mainLoop)
	}
	if(keys[65]){
		x--;
	}
	if(keys[83]){
		y++;
	}
	if(keys[68]){
		x++;
	}
	if(keys[87]){
		y--;
	}
	//console.log("this is main loop");
	console.log(x + " " + y);
	cfx.fillRect(x,y,10,10);
}

let mainLoop = setInterval(Mainloop, 10);