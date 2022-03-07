// ESCMA SCript 5

// ECMA SCRIPT 2022

// ES6

// REASON to launch new javascript version

// 1. Fix javascript issues
// 2. added new Features to avoid third party library for complex operation
// 3. modern syntax
// 4. use Javascript enterprice level application

// 1. Web application
// 2. Mobile Application
// 3. VR
// 4. AR
// 5. backend
// 6. AI/ML
// 7. blockchain



// cant declare same variable name again
// console.log(a);

// var a = 1;

// var a = 2;

// console.log(a);

// HOISTING

// var a = 1;

var a, b;

console.log(b);

a = 1;

b = 2;

a = 2

console.log(a);

// SCOPING
{
    var c = 3;
}


console.log(c);

function add() {
    var d = 4;
    console.log(d);
}

console.log(add());

// (function() {
//     var e = 5;
//     console.log(e);
// })()

const greet = name => `Hello ${name}` ;

console.log(greet('yagnesh'));




