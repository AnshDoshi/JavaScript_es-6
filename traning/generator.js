

const login = () => {
    console.log("login");
    return 1;
}

const logout = () => {
    console.log("logout");
    return 2
}


function* auth() {
    yield login();
    yield logout();
    return "hello"
}

const gen = auth();

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

for (const iterator of gen) {
    console.log(iterator);
}


const set = new Set([1,2,3,4,5,6,7]);

const map = new Map();

map.set("yagnesh", { name: "yagnesh"});

map.set("virat", { name: 'virat'});


for (const [key, value] of map) {
    console.log(key);
    console.log(value);
}

const obj = {
    a: 1, 
    b: 2,
    c: 3,
    d: 4
}


for (const key in obj) {
    console.log(key);
    console.log(obj[key]);
}


for (const iterator of set) {
    console.log(iterator);
}

console.log(set.size);


// gen.next();

// gen.next();


// function* xyz() {
//   try {
//       console.log("hello")
//     yield 1;
//     yield 2;
//     yield 3;
//   } catch (error) {
//       console.log(error);
//   }
// }

// const gen = xyz();

// console.log(gen.next());
// // gen.return();
// gen.throw(new Error("something wrong"))
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
