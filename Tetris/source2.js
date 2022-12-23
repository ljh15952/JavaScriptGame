let canvas = document.getElementById('canvas');
let cfx = canvas.getContext('2d');

let wall = Array(20).fill(0).map(()=>Array(10).fill(0));

const renderWall = () => {
	wall.map((a,i)=>{
		a.map((b,j) => {
			if(b === 0){
				cfx.fillStyle = 'gray';
			}else if(b === 1){
				cfx.fillStyle = 'black';
			}
			cfx.fillRect(j*11,i*11,10,10);
		})
	})
}

const canMove = () => {
	return true;
}

const move = () = {
	console.log("move");
}

let before = Date.now();
const update = () => {
	let current = Date.now();
	if(current - before >= 350){
		before = current;
		canMove() && move();
	}
	renderWall();
	requestAnimationFrame(update);
}

requestAnimationFrame(update);


/*

1. c언어 (마스터)하고 c++로 넘어가기 -> 하고싶은거
2. c++하고 -> 하고싶은거
3. 파이썬 -> 하고싶은거 강력해 쉬워


*/