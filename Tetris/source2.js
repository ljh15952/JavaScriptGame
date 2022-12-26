let canvas = document.getElementById('canvas');
let cfx = canvas.getContext('2d');

let wall = {new:null, old:null};
wall.new = Array(20).fill(0).map(()=>Array(10).fill(0));
wall.old = Array(20).fill(0).map(()=>Array(10).fill(0));

const renderWall = () => {
	wall.old.map((a,i)=>{
		a.map((b,j) => {
			if(b === 0){
				cfx.fillStyle = 'gray';
			}else if(b === 1){
				cfx.fillStyle = 'black';
			}
			cfx.fillRect(j*11,i*11,10,10);
		})
	});
	wall.new.map((a,i)=>{
		a.map((b,j) => {
			if(b === 1){
				cfx.fillStyle = 'black';
				cfx.fillRect(j*11,i*11,10,10);
			}
			})
	});
}

window.addEventListener('keydown', e=>{
	e.code === 'ArrowDown' && canMove('down') && move('down');
	//e.code === 'ArrowLeft' && canMove('left') && move('left');
 //	e.code === 'ArrowRight' && canMove('right') && move('right');
  //	e.code === 'ArrowUp' && canMove('rotate') && move();
});

const setCoords = (t, p) =>
tet.map((r, i) => 
	  r.map((c, j) => 
			({ x: p.x + j, y: p.y + i, z: c == '■' }))).reduce((acc,val)=>acc.concat(val), []);
const removeFromWell = (coords,w) => {
	const ww = w;
	coords.forEach(c => {
		if(c.y >= 0 && c.z){
			ww[c.y][c.x] = 0;
		}
	});
};
const placeOnWell = coords => {
	coords.forEach(c => {
		if(c.y >= 0 && c.z){
			well[c.y][c.x] = 1;
		}
	});
};

const canMove = () => {
	return true;
}

const move = () => {
	removeFromWell
	if(dir == 'down') { data.pos.y += 1; }
	
}

let before = Date.now();
const update = () => {
	let current = Date.now();
	if(current - before >= 350){
		before = current;
		canMove('down') && move('down');
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