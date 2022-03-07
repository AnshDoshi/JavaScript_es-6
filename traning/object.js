const obj = { a: 1, b: 2, c: 3 };

console.log(obj);

// Destructuring + Spread Operator
const {a, b} = obj;

console.log(a);
console.log(b);

const key = 'b';

// const a = 5;
// // destructuring
// const {a: aa, [key]: bb , c } = obj;



// console.log(a);
// console.log(aa);
// console.log(bb);
// console.log(c);

console.log(obj.a);
console.log(obj.b);
console.log(obj.c);



console.log(obj[key]);
console.log(obj['b']);
console.log(obj['c']);

// const obj1 = {d: 4, e: 5}

// // ES5 approach
// const obj1 = Object.assign({}, obj,  { d: 4 });

// console.log(obj1);

// spead operator
const newObj = { ...obj, d: 4 }

console.log(obj);

//developer1
console.log(newObj);

//deve