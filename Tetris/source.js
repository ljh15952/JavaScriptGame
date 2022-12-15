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

const test1 = () =>{
	console.log("1111111111");
	return true;
}

const test2 = () => {
	console.log("2222222222");
}

let before = Date.now();
const freeFall = () => {
	const now = Date.now();;
	if(now - before >= 500){
		before = now;
		console.log("UPDATE THIS");
	}
	
	test1() && test2(); // <- test1() 함수가 return true라면 뒤에 있는 test2() 함수도 실행
	/*
	if(test1()){
		test2(); 랑 같은 코드 인데 한 줄로 줄였네요?
	}
	
	*/
	
	requestAnimationFrame(freeFall);
}

requestAnimationFrame(freeFall); // <- requestAnimationFrame이란?