print();
cfx.fillRect(50,50,50,50);

setTimeout(print, 5000);

var counter = 0;

function Mainloop(){
	counter++;
	if(counter >= 5){
		clearInterval(mainLoop)
	}
	console.log("this is main loop");
}

let mainLoop = setInterval(Mainloop, 1000);