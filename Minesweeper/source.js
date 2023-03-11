const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

pos = {x:0,y:0};

canvas.addEventListener('click', () => console.log(pos));
canvas.addEventListener('mousemove', e => {
  const canv = canvas.getBoundingClientRect();
  pos = { x: Math.floor((e.clientX - canv.left) / 5), y: Math.floor((e.clientY - canv.top) / 5) };
});

canvas.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  console.log(pos)
});

const draw = () => {
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	ctx.font = '15px Arial';
	
	ctx.strokeRect(80 - 3,120 - 13,15,15);
	ctx.fillText(0,80,120);
	
	ctx.strokeRect(100 - 3,120 - 13,15,15);
	ctx.fillText(1,100,120);
	
	ctx.strokeRect(120 - 3,120 - 13,15,15);
	ctx.fillText(2,120,120);
	
	ctx.strokeRect(140 - 3,120 - 13,15,15);
	ctx.fillText(3,140,120);
	
	ctx.strokeRect(160 - 3,120 - 13,15,15);
	ctx.fillText(4,160,120);
}

const main = () => {
	draw();
	requestAnimationFrame(main);
}

requestAnimationFrame(main);


