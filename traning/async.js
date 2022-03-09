// Javascript is **single threaded**  **sync** language

// main thread
// console.log(1); // 0.1
// console.log(3); // 0.1
// console.log(4); // 0.1
// console.log(5); // 0.1
// console.log(6); // 0.1


// another thread (process)
// console.log(2); // async code 5 min

//=============================
// total time is 5:5 sec

// ============================
// total time is 5 sec saved 0.5 sec

// javascript is using v8 engine to handle Parallal programing 

// 3 ways to create async process

// 1. callback

// 2. promises

// 3. generator

// document.addEventListener("click", () => {

// })

console.log("s1")

setTimeout(() => { 
    console.log("a1");
 }, 1000);

console.log("s2")
setTimeout(() => { 
    console.log("a2");
 }, 500);
console.log("s3")
console.log("s4")
setTimeout(() => { 
    console.log("a3");
 }, 100);


 setTimeout(() => { console.log("a1") }, 10)
console.log("s1")
setTimeout(() => { console.log("a2") }, 1)
console.log("s2")
setTimeout(() => { console.log("a3") }, 5)
console.log("s3")
console.log("s4")
setTimeout(() => { console.log("a4") }, 0.9)
