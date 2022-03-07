const arr = [1,2,3,4,5,6];
const arr2 = [2,3,10];

console.log([...arr,...arr2]);

const [a, b,...rest] = arr;

console.log(a);
console.log(b);
console.log(rest);

// console.log(arr[4]);

const index = 3;

const finalArr = [...arr.slice(0, index), ...arr.slice(index + 1)];

console.log(finalArr);

const newArr = [0, ...arr, 7];

console.log(newArr);
console.log(arr);

// arr.push(7);

// console.log(arr);

// arr.pop();

// console.log(arr);

// arr.unshift(0);

// console.log(arr);

// arr.shift();

// console.log(arr);