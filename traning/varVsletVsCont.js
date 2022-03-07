// Hoisting
// SCOPING


// PRIMITIVE DATA TYPE

// string
// boolean
// number
// bigint
// symbol

// Non-premitive data type

// object
// array


const pi = 3.14;

const obj = { a: 1, b: 2}

obj.c = 3;

console.log(obj);





{
    const x = 10;
    console.log(x);
}


// let a = 1;

// {
//     let b = 2;
//     console.log(b);
// }


// console.log(b);

//              hoisting        scoping         redeclare       reassign

// Var             yes             NO               yes             yes

// Let             No              Yes              No              yes

// Const           No              Yes              No              No

var a = 1;

console.log(a);


{
    let a = 5;

    console.log(5);
}

console.log(a);