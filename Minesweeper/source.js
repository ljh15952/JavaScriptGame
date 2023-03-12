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

let board = Array(20).fill(0).map(()=>Array(10).fill(0));
// 20행 10열
let visited = Array(20).fill(0).map(()=>Array(10).fill(0));
visited[19][2] = 1;
visited[5][6] = 1;
visited[5][7] = 1;
visited[5][8] = 1;
console.log(visited);
const draw = () => {
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	
	ctx.font = '30px Arial';
	
	// board.map((r, i) => r.map((c, j) => {
	// 	ctx.strokeRect(i*30, j * 30, 30, 30);
	// 	ctx.fillText(c,i * 30 + 6 ,(j+1) * 30 - 3);
	// }));
	
	visited.map((r, i) => r.map((c, j) => {
		if(c == 0){
			ctx.fillRect(j*32, i * 32, 30, 30);
		}else{
			ctx.strokeRect(j*32, i * 32, 30, 30);
			ctx.fillText(board[i][j],j * 32 + 7 ,(i+1) * 32 - 7);
		}
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


