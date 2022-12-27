let canvas = document.getElementById('canvas');
let cfx = canvas.getContext('2d');

let wall = {new:null, old:null};
wall.new = Array(20).fill(0).map(()=>Array(10).fill(0));
wall.old = Array(20).fill(0).map(()=>Array(10).fill(0));

let pos = {x:5,y:-2};
const tets = [
  [['□', '■', '□'], ['■', '■', '■'], ['□', '□', '□']], 
  [['■', '□', '□'], ['■', '■', '■'], ['□', '□', '□']], 
  [['□', '□', '■'], ['■', '■', '■'], ['□', '□', '□']], 
  [['■', '■', '□'], ['■', '■', '□'], ['□', '□', '□']], 
  [['□', '■', '■'], ['■', '■', '□'], ['□', '□', '□']], 
  [['■', '■', '□'], ['□', '■', '■'], ['□', '□', '□']],
  [['□', '□', '□', '□'], ['■', '■', '■', '■'], ['□', '□', '□', '□']], // I
];

let tet = tets[Math.floor(Math.random() * tets.length)];

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
	e.code === 'ArrowLeft' && canMove('left') && move('left');
    e.code === 'ArrowRight' && canMove('right') && move('right');
    e.code === 'ArrowUp' && canMove('rotate') && move();
});

const setCoords = (t, p) =>
t.map((r, i) => 
	  r.map((c, j) => 
			({ x: p.x + j, y: p.y + i, z: c == '■' }))).reduce((acc,val)=>acc.concat(val), []);

let coords = setCoords(tet,pos);

const removeFromWell = (c,w) => {
	const ww = w;
	coords.forEach(b => {
		if(b.y >= 0 && b.z){
			ww[b.y][b.x] = 0;
		}
	});
};
const placeOnWell = (c,w) => {
	c.forEach(b => {
		if(b.y >= 0 && b.z){
			w[b.y][b.x] = 1;
		}
	});
};

const canMove = (dir) => {
	
	
	if(dir === 'rotate'){
		const flipTet = t => t[0].map((c,i)=>t.map(te => te[i]));
		const rotateTet = t => flipTet([...t].reverse());
		let tempTet = rotateTet(tet);
		let tempCoords = setCoords(tempTet,pos);
		let collided = tempCoords.some(c => c.z && c.y >= 0 && ((c.x < 0) || (c.x > 9) ||(wall.old[c.y][c.x] === 1)));
		if(!collided){
			tet = rotateTet(tet);
			return true;
		}
		return false;
	}
	if(dir === 'down'){
		let tempPos = {x:pos.x, y:pos.y+1};
		let tempCoords = setCoords(tet,tempPos);
		let collided = tempCoords.some(c =>
			c.z && c.y >= 0 && ( !wall.old[c.y] || wall.old[c.y][c.x] === 1)
		);
		if(collided){
			pos = {x:0, y:-2};
			placeOnWell(coords,wall.old);
			tet = tets[Math.floor(Math.random() * tets.length)];
			
			clearFullRows();
		}
		return !collided;
	}
	if(dir === 'left'){
		let tempPos = {x:pos.x-1, y:pos.y};
		let tempCoords = setCoords(tet,tempPos);
		return !tempCoords.some(c =>
			c.z && c.y >=0 && (c.x < 0 || wall.old[c.y][c.x] === 1)
		);
	}
	if(dir === 'right'){
		let tempPos = {x:pos.x+1, y:pos.y};
		let tempCoords = setCoords(tet,tempPos);
		return !tempCoords.some(c =>
			c.z && c.y >=0 && (c.x > 9 || wall.old[c.y][c.x] === 1)
		);
	}
	return true;
}

const move = (dir) => {
	removeFromWell(coords,wall.new);
	if(dir == 'down') { pos.y += 1; }
	if(dir == 'left') { pos.x -= 1; }
	if(dir == 'right') { pos.x += 1; }
	coords = setCoords(tet,pos);
	placeOnWell(coords,wall.new);
}

// must know
const clearFullRows = () =>{
	wall.old = wall.old.reduce((acc, cur) => {
		if(cur.every(c=> c === 1)){
			console.log("one up");
			return [Array(10).fill(0), ...acc];
		}
		return [...acc, cur];
	}, []);
};

let before = Date.now();
const update = () => {
	let current = Date.now();
	if(current - before >= 350){
		before = current;
	//	canMove('down') && move('down');
	}
	renderWall();
	requestAnimationFrame(update);
}

requestAnimationFrame(update);