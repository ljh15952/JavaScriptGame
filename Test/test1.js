canvas = document.getElementById("canvas");
cfx = canvas.getContext("2d");

arr1 = Array(5).fill(0).map(()=>Array(3).fill(0));
arr2 = Array(5).fill(Array(3).fill(0));

arr1[0][1] = 1;
arr2[0][1] = 1;

console.log(arr1);
console.log(arr2);
