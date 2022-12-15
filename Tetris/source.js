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

console.log(tets);
console.log(data);
console.log(renderWell);
console.log(well);

let before = Date.now();
const freeFall = () => {
	const now = Date.now();;
	if(now - before >= 500){
		before = now;
		console.log("UPDATE THIS");
	}
	
	requestAnimationFrame(freeFall);
}

requestAnimationFrame(freeFall); // <- requestAnimationFrame이란?