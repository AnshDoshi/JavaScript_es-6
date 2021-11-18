//arrow function
// console.log(add(1,3));
// function add(a,b{
//     return a+b;

// }
// const add=(a,b)=>a+b;
// console.log(add(1,2));


//avoid hoisting problem
//arrow function occupy less memory compare to normal function

const add=(a,b)=>{
    if(a!==0 && b&& 0){
    return a+b;
    }
    else{
        return 0;
    }
}
const addd = a => {
    return a+3;
}
console.log(addd(2));


//Array

const arr=[1,2,3,4,5];

//Mutable;

// arr.push(6);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.unshift(7);
// console.log(arr);
// arr.shift();
// console.log(arr);

const arr1=[6, ...arr]
console.log(arr1);

const index= arr1.findIndex(value=>value===3);
console.log(index);

// const s1=arr1.slice(0,index);
// console.log(s1);
// const s2=arr1.slice(index+1);                       
// console.log(s2);
// const arr3=[...s1,10,...s2];
// console.log(arr3);

//update value
const arr3=[...arr1.slice(0,index),10,...arr1.slice(index +1)];
const arr31=[arr1.map(x=>x===3?10:x)];
console.log(arr3);
console.log(arr31);

//remove value
const arr4=[...arr1.slice(0,index),...arr1.slice(index +1)];
const arr41=[arr1.filter(x=>x!==3)]
console.log(arr4);
console.log(arr41);



//add a value at perticular position..
const arr5=[...arr1.slice(0,index),10,...arr1.slice(index )];
console.log(arr5);


const aadd=(...rest)=>{
    console.log(rest);
    let sum=0;
    for(let i=0;i<rest.length;i++){
        sum+=rest[i];
    }
    return sum;
}
console.log(aadd(1,2,3));


const calc=(operation,...rest)=>{
    if(operation==='addition'){
        let sum=0;
        for(let i=0;i<rest.length;i++){
            sum+=rest[i];
        }
        return sum;
    }
        if(operation==='sub'){
        let sum=0;
        for(let i=0;i<rest.length;i++){
            sum-=rest[i];
        }
        return sum;
    }
}

const calcc=(...rest)=>{
    return (operation)=>{
        return operation(...rest);
    }
}

const mult=(...rest)=>{
    console.log(rest);
    let sum=1;
    for(let i=0;i<rest.length;i++){
        sum*=rest[i];
    }
    // throw new Error('error....')
    return sum;
}



console.log(calcc(1,2,3)(aadd));
console.log(calcc(1,2,3,4)(mult));








console.log(calc('addition',1,2,3));

    

