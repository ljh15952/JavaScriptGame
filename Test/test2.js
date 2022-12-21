// 배열 recude()
// 배열의 각 요소를 순회하며 callback함수의 실행 값을 누적하여 하나의 결과값 반환

// 파라미터
// 1. callback function
// - accumulator callback함수의 반환값 누적
// - currentValue 배열의 현재 요소
// - index(Optional) 배열의 현재 요소의 인덱스
// - array(Optional) 호출한 배열
// 2. initialValue(Optional) 중요
// - 최초 callback함수 실행 시 acc 인수에 제공되는 값, 
// - 넣어주지 않을 경우 배열의 첫 번째요소를 사용하고 빈 배열에서는 오류 발생
// 배열의 모든 값 더하기
// const arr = [1,2,3,4,5,6,7,8,9,10];
// // inital값이 없을 경우 acc = arr[0], cur = arr[1]로 시작이되어 순회를 함
// sum = arr.reduce((acc,cur)=> console.log(acc + " " + cur),100);
// console.log(sum);


/*
테트리스에서 사용처
const clearFullRows = () => {
  	well = well.reduce((acc, cur) => {
    	if (cur.every(c => c === '■')) { //모든 한 줄이 block이라면
      		data.score += 1; // 1점 추가
      		return [Array(10).fill('□'), ...acc]; //
    	}
    	return [...acc, cur];
  }, []);
};

tet.map((r, i) => 
	  r.map((c, j) => 
			({ x: p.x + j, y: p.y + i, z: c == '■' }))).reduce((acc,val)=>acc.concat(val), []);
*/

// array every() 사용
// 배열의 모든 원소가 조건에 맞는지 검사 맞으면 true, 하나라도 아니면 false

// arr = [1,2,3,0,5];
// if(arr.every(i => i > 0)){
// 	console.log("correct");
// }


arr = [1,2,3,4,5];

for(var i of arr){
	i += 10;
}
console.log(arr);
