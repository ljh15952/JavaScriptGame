const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

pos = {x:0,y:0};

canvas.addEventListener('mousemove', e => {
  const canv = canvas.getBoundingClientRect();
  pos = { x: Math.floor((e.clientX - canv.left) / 32), 
		 y: Math.floor((e.clientY - canv.top) / 32) };
});
canvas.addEventListener('click', () => lClick());
canvas.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  console.log(pos);
	rClick();
});

// 20행 10열
let board = Array(20).fill(0).map(()=>Array(10).fill(0));
let visited = Array(20).fill(0).map(()=>Array(10).fill(0));

let arr = [];

let dx = [1,1,0,-1,-1,-1,0,1];
let dy = [0,1,1,1,0,-1,-1,-1];

for(var i = 0; i < 10; ++i){
	rx = Math.floor(Math.random() * 10);
	ry = Math.floor(Math.random() * 20);
	while(board[ry][rx] === '*'){
		rx = Math.floor(Math.random() * 10);
		ry = Math.floor(Math.random() * 20);
	}
	board[ry][rx] = '*';
	console.log(rx + ' ' + ry);
	
	for(var j = 0; j < 8; ++j){
		let nx = rx + dx[j];
		let ny = ry + dy[j];
		if(nx < 0 || ny < 0 || nx >= 10 || ny >= 20) continue;
		if(board[ny][nx] === '*') continue;
		board[ny][nx]++;
	}
}






const draw = () => {
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	
	ctx.font = '30px Arial';
	
	// board.map((r, i) => r.map((c, j) => {
	// 	ctx.strokeRect(i*30, j * 30, 30, 30);
	// 	ctx.fillText(c,i * 30 + 6 ,(j+1) * 30 - 3);
	// }));
	
	// visited.map((r, i) => r.map((c, j) => {
	// 	if(c == 0){
	// 		ctx.fillRect(j*32, i * 32, 30, 30);
	// 	}else{
	// 		ctx.strokeRect(j*32, i * 32, 30, 30);
	// 		ctx.fillText(board[i][j],j * 32 + 7 ,(i+1) * 32 - 7);
	// 	}
	// }));
	visited.map((r, i) => r.map((c, j) => {
		ctx.strokeRect(j*32, i * 32, 30, 30);
		ctx.fillText(board[i][j],j * 32 + 7 ,(i+1) * 32 - 7);
	}));
}

const lClick = () => {
	visited[pos.y][pos.x] = 1;
}

const rClick = () => {
	visited[pos.y][pos.x] = 1;
}

const main = () => {
	draw();
	requestAnimationFrame(main);
}

requestAnimationFrame(main);


