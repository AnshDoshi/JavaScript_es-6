// Set and Map

const arr = [1,2,3,4,5,6,7, 4]

// O(logN)

console.time("for")
let result = false;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 4) {
        result  = true;
        break;
    }
}
console.timeEnd("for")

// remove data for primitive data type
const set = new Set();
console.log(set);
console.time("set")
set.add()
set.add(3);
set.add(4);
console.log(set);
set.add(5);
console.log(set.has(4));
console.timeEnd("set")
console.log(set.size);
console.log(set);
set.delete(4);

console.log(set.size);

const obj = { a: 1, b: 2}

const weakSet = new WeakSet();
weakSet.add(obj);

weakSet.add(obj);

console.log(weakSet.has(obj)); 

weakSet.delete(obj);

weakSet.delete(obj);

console.log(weakSet.has(obj)); 


