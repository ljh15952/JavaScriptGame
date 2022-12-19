const data = {score: 0, oldCoords: null, newCoords: null,
			   pos: {x: 0, y: -2}, over:false};

const renderWell = () => {
	document.querySelector('pre').textContent = data.score + '\n';
	well.forEach(r => {
		document.querySelector('pre').textContent += r.join('') + '\n';
	});
};

let well = Array(20).fill(0).map(() => Array(10).fill('□'))


const tets = [ //□■
	[['□','■','□'], ['■','■','■'], ['□','□','□']],
	[['□','■','□'], ['■','■','■'], ['□','□','□']],
	[['□','■','□'], ['■','■','■'], ['□','□','□']],
	[['□','■','□'], ['■','■','■'], ['□','□','□']],
	[['□','■','□'], ['■','■','■'], ['□','□','□']],
	[['□','■','□'], ['■','■','■'], ['□','□','□']],
	[['□', '□', '□', '□'], ['■', '■', '■', '■'], ['□', '□', '□', '□']],
]

let tet = tets[Math.floor(Math.random() * tets.length)];

window.addEventListener('keydown', e=>{
	//code == 'ArrowDown' && can
});


const setCoords = (t, p) => 
t.map((r, i) => 
	  r.map((c, j) => 
			({ x: p.x + j, y: p.y + i, z: c == '■' }))).flat();


const removeFromWell = (coords,w) => {
	coords.forEach(c => {
		if(c.y >= 0 && c.z){
			w[c.y][c.x] = '□';
		}
	});
	
	// 같은 행동
	// for(var i = 0; i < 20; ++i){
	// 	for(var j = 0; j < 10; ++j){
	// 		w[i][j] = '□';
	// 	}
	// }
	
};

const placeOnWell = coords => {
	coords.forEach(c => {
		if(c.y >= 0 && c.z){
			well[c.y][c.x] = '■';
		}
	});
	
	// 같은 행동
	// for(var i = 0; i < coords.length; ++i){
	// 	if(coords[i].y >= 0 && coords[i].z){
	// 		well[coords[i].y][coords[i].x] = '■';
	// 	}
	// }
};

const canMove = dir => {
	const tempWell = JSON.parse(JSON.stringify(well));
	const tempPos = { ...data.pos };
	data.oldCoords && removeFromWell(data.oldCoords, tempWell);
	
	// if(dir === 'rotate'){
	// 	const flipTet = t => t[0].map((c,i) => t.map(te => te[i]));
	// 	const rotateTet = t => flipTet([...t].reverse());
	// 	const tempTet = rotateTet(tet);
	// 	const tempNC = setCoords(tempTet, tempPos);
	// }
	
	if(dir == 'down'){
		tempPos.y += 1;
		const tempNC = setCoords(tet, tempPos);
		const collided = tempNC.some(c => c.z && c.y >= 0 && ((!tempWell[c.y]) || (tempWell[c.y][c.x] == '■')));
		if(data.oldCoords && collided && !well[0].slice(3,6).includes('■')){
			data.pos = {x:0, y:-2};
			data.newCoords = null;
			data.oldCoords = null;
			clearFullRows();
			let tet = tets[Math.floor(Math.random() * tets.length)];
		}
		if (collided && well[0].slice(3, 6).includes('■')) {
     		well[8] = ['G', 'A', 'M', 'E', ' ', 'O', 'V', 'E', 'R'];
      		data.over = true;
      		renderWell();
    	}
    	return !collided;
	}
	
	return true;
}

const move = dir => {
	if(dir == 'down') { data.pos.y += 1; }
	if(dir == 'left') { data.pos.x -= 1; }
	if(dir == 'right') { data.pos.x += 1; }
	data.newCoords = setCoords(tet, data.pos);
	data.oldCoords && removeFromWell(data.oldCoords, well);
	placeOnWell(data.newCoords);
	data.oldCoords = data.newCoords;
	renderWell();
}

const clearFullRows = () => {
	well = well.reduce((acc, cur)=>{
		if(cur.every(c => c == '■')){
			data.score += 1;
			return [Array(10).fill('■'), ...acc];
		}
		return [...acc, cur];
	}, []);
};


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