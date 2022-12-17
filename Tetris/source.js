const data = {score: 0, oldCoords: null, newCoords: null,
			   pos: {x: 3, y: -2}, over:false};

const renderWell = () => {
	document.querySelector('pre').textContent = data.score + '\n';
	well.forEach(r => {
		document.querySelector('pre').textContent += r.join('') + '\n';
	});
};

let well = Array(20).fill(0).map(() => Array(10).fill('□'))


const tets = [ //□■
	[['□','■','□'], ['■','■','■'], ['□','□','□']],
	[[],[],[]],
	[[],[],[]],
	[[],[],[]],
	[[],[],[]],
	[[],[],[]],
	[[],[],[],[]],
]

let tet = tets[Math.floor(Math.random() * tets.length)];

const setCoords = (t, p) => {
	console.log(t + " " + p);
	// t.map((r,i) => 
	// 	r.map((c, j) => 
	// 		  ({x:p.x+j, y:p.y+i, z:c==='■'}))).flat();
}
setCoords(tet, data.pos);
const removeFromWell = (coords, w) => {
	coords.forEach(c => {
		if(c.y >= 0 && c.z){
			well[c.y][c.x] = '■';
		}
	});
};

const canMove = dir => {
	const tempWell = JSON.parse(JSON.stringify(well));
	const tempPos = { ...data.pos };
	data.oldCoords && removeFromWell(data.oldCoords, tempWell);
	
	if(dir === 'rotate'){
		const flipTet = t => t[0].map((c,i) => t.map(te => te[i]));
		const rotateTet = t => flipTet([...t].reverse());
		const tempTet = rotateTet(tet);
		const tempNC = setCoords(tempTet, tempPos);
	}
	
	return true;
}

const move = dir => {
	if(dir == 'down') { data.pos.y += 1; }
	if(dir == 'left') { data.pos.x -= 1; }
	if(dir == 'right') { data.pos.x += 1; }
	//data.newCoords = setCoords(tet, data.pos);
	
	
	
	renderWell();
}


let before = Date.now();
const freeFall = () => {
	const now = Date.now();;
	if(now - before >= 500){
		before = now;
		canMove('down') && move('down');
	}
	
	well[8][0] !== 'G' && requestAnimationFrame(freeFall);
}

requestAnimationFrame(freeFall); // <- requestAnimationFrame이란?