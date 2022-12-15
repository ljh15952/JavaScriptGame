const test1 = () =>{
	console.log("1111111111");
	return true;
}

const test2 = () => {
	console.log("2222222222");
}

// test1() 함수가 참을 반환하면 뒤에 있는 test2() 함수 호출
test1() && test2(); 
/*
if(test1()){
	test2(); 랑 같은 코드 인데 한 줄로 최적화
}
*/


// arrow Function
// 요즘 들어 많이 쓰이고 있는 화살표 함수?
// 1. constructor로 쓰일 수 없다.
// 2. prototype을 가지고 있지 않는다.
// 3. yield 키워드 허용 x generator를 쓸 수 없다.
const hello = () => {
	console.log("HELLO?");
}
// 리턴 f1과 f2는 값이 같다.
const f1 = (x,y,z) => x+y+z;

const f2 = (x,y,z) => {
	return x + y + z;
}
// object 바로 리턴
const f3 = (x,y,z) => ({x,y,z});