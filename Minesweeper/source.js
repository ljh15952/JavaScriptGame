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
let width = 10;
let height = 8;
let board = Array(height).fill(0).map(()=>Array(width).fill(0));
let visited = Array(height).fill(0).map(()=>Array(width).fill(0));

let arr = [];

let dx = [1,1,0,-1,-1,-1,0,1];
let dy = [0,1,1,1,0,-1,-1,-1];

for(var i = 0; i < 10; ++i){
	rx = Math.floor(Math.random() * width);
	ry = Math.floor(Math.random() * height);
	while(board[ry][rx] === '*'){
		rx = Math.floor(Math.random() * width);
		ry = Math.floor(Math.random() * height);
	}
	board[ry][rx] = '*';
	
	for(var j = 0; j < 8; ++j){
		let nx = rx + dx[j];
		let ny = ry + dy[j];
		if(nx < 0 || ny < 0 || nx >= width || ny >= height) continue;
		if(board[ny][nx] === '*') continue;
		board[ny][nx]++;
	}
}






const draw = () => {
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	
	ctx.font = '30px Arial';
	
	visited.map((r, i) => r.map((c, j) => {
		if(c == 0){
			ctx.fillStyle = 'black';
			ctx.fillRect(j*32, i * 32, 30, 30);
		}else{
			if(c == 2){
				ctx.fillStyle = 'red';
				ctx.fillRect(j*32, i * 32, 30, 30);
			}else{
				ctx.fillStyle = 'black';
				ctx.strokeRect(j*32, i * 32, 30, 30);
				ctx.fillText(board[i][j],j * 32 + 7 ,(i+1) * 32 - 7);
			}
			
		}
	}));
	// visited.map((r, i) => r.map((c, j) => {
	// 	ctx.strokeRect(j*32, i * 32, 30, 30);
	// 	ctx.fillText(board[i][j],j * 32 + 7 ,(i+1) * 32 - 7);
	// }));
}

const BFS = () => {
	arr = [];
	
	arr.push(pos);
	
	if(board[pos.y][pos.x] != 0) arr.pop();
	
	while(arr.length != 0){
		cur = arr.pop();
		console.log("BFS!");
		for(var i = 0; i < 8; ++i){
			var nx = cur.x + dx[i];
			var ny = cur.y + dy[i];
			
			if(nx < 0 || ny < 0 || nx >= width || ny >= height) continue;
			if(visited[ny][nx] === 1) continue;
			if(board[ny][nx] === '*') continue;
			//if(board[ny][nx] > 0) continue;
			
			if(visited[ny][nx] === 2 && board[ny][nx] != '*') visited[ny][nx] = 1;
			
			visited[ny][nx] = 1;
			if(board[ny][nx] == 0){
				p = {x:nx, y:ny};
				arr.push(p);
			}
		}
	}
}

const lClick = () => {
	// BFS start
	visited[pos.y][pos.x] = 1;
	if(board[pos.y][pos.x] === '*') {
		console.log("GAME OVER");
		return;
	}
	BFS();
}

const rClick = () => {
	
	if(visited[pos.y][pos.x] === 2){
		visited[pos.y][pos.x] = 0;
	}else{
		visited[pos.y][pos.x] = 2;
	}
}

const main = () => {
	draw();
	requestAnimationFrame(main);
}

requestAnimationFrame(main);


