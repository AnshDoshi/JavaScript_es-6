const firstName = "Yagnesh";


const user = {
    firstName,
    "lastName": "Modh",
    "age": 30,
    "gender": "Male",
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(user.firstName);

console.log(user.fullName());

// console.log(add(1,2));

// Named function
// function add(a, b) {
//     return a + b;
// }


// function add() {
//     return "hacked...."
// }


// anonymous function
const add = (a, b) => a + b;

console.log(add(1,2));

const greet = name => `Hello, ${name}`;

console.log(greet("yagnesh"));

(() => {
    const a = 1;
    console.log(a);
})()







