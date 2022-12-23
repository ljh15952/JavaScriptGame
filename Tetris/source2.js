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


const update = () => {
	renderWall();
	requestAnimationFrame(update);
}

requestAnimationFrame(update);
