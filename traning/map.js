const map = new Map();

map.set("yagnesh", {
    name:"Yagnesh",
    age: 30,
    gender: "male"
});

// console.log(map.get("yagnesh"));

map.set()

const weakMap = new WeakMap();

const arr = [];

console.log(typeof arr);

const arr = {};

console.log(typeof arr);

console.log(Array.isArray(arr));

const obj1 = { a: 1};
const obj2 = { b: 2};
const obj3 = { c: 3};

const arr1 = [obj1, obj2, obj3, null]

const weakSet = new WeakSet()

weakSet.add(arr);

console.log(weakSet.has(arr));

console.log(weakSet.has(obj2)); 



