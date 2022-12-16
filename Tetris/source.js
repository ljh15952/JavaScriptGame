const data = {score: 0, oldCoords: null, newCoords: null,
			   pos: {x: 3, y: -2}, over:false};

const renderWell = () => {
	document.querySelector('pre').textContent = `${data.score}\n`;
	well.foeEach(r => {document.querySelector('pre').textContent += `${r.join('')}\n`});
};

//■

let well = Array(20).fill(0).map(() => Array(10).fill('□'))

const tets = [ //□■
	[['□','■','□'],
	 ['■','■','■'],
	 ['□','□','□']],
	[],
	[],
	[],
	[],
	[],
	[],
]

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
}




let before = Date.now();
const freeFall = () => {
	const now = Date.now();;
	if(now - before >= 500){
		before = now;
		canMove('down') && move();
	}
	
	well[8][0] !== 'G' && requestAnimationFrame(freeFall);
}

requestAnimationFrame(freeFall); // <- requestAnimationFrame이란?