// mutable vs Immutable



// const user = { firstName: "Yagnesh", lastName: "Modh", age: 30 }
// user.fullName = function() {
//     return `${this.firstName} ${this.lastName}`
// }

// for // 1
// dowhile // 2
// foreach // 1
// while

const obj = {
    a: 1,
    b: 2,
    c: 3,
}

const obj1 = Object.assign({}, obj, { d: 4});

console.log(obj);
console.log(obj1);

// console.log(obj);
// obj.c = 4;

// console.log(obj);


// const arr = [...Array(10000000).keys()]

// console.time("for")
// for (let i = 0; i < arr.length; i++) {
// }
// console.timeEnd("for")

// console.time("while")
// let j = 0;
// while (j < arr.length) {
//     j++;
// }
// console.timeEnd("while")

// console.time("doWhile");
// let k = 0;
// do {
//     k++
// } while (k < arr.length);
// console.timeEnd("doWhile");

// console.time("foreach")
// arr.forEach(element => {
// });
// console.timeEnd("foreach")


// Immutably Achieve CRUD






