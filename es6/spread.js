
const arr = ['foo','bar','xyz'];
console.log(...arr);


const arr1 = [1,2,3];
const arr2= [...arr1,4,5,6];
console.log(arr2);

const arr3 = ['a','b','c','d'];
const [deger1, ...rest] = arr3;

console.log(rest);