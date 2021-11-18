 //map
//reduce
//for in
//for of





//
const arr=[1,2,3,4,5];

const a=null;
const b=2;

const c= a||b;
const d= a&&b;
//and condition is equal to if condition


console.log(c);
console.log(d);




// let sum=0;

// for (let i = 0; i < arr.length; i++) {
//     sum=sum+arr[i];
    
// };
// console.log(sum)


//first perameter is function //second perameteris initial value
// const sum=arr.reduce((previous,current)=>{
//     console.log(previous);
//     console.log(current);
//     return previous+current;
//     // return 2;
// },0);
const sum=arr.reduce((p,c)=>p+c,0);//shorter way to write
console.log(sum)


// const obj={
//     a:1,
//     b:2,
//     c:3,
// } 

// // const d= 'd';
// console.log(obj.[d]);




//es6

const users=[{
    id:1,
    name:'ansh',
    gender:'Male',
},
{
    id:2,
    name:'Doshi',
    gender:'Male',
},
{
    id:3,
    name:'kiara',
    gender:'Female',

},
{
    id:4,
    name:'alia',
    gender:'Female',

}];

const groupBy=users.reduce((p,c)=>{
    (p[c.gender]=p[c.gender]||[]).push(c);
    return p;

},{})
console.log(groupBy)

// const updateduserlist=users.reduce((p,c)=>{
//     if(c.id===1){
//         return [...p,{...c,name:'ANSHU'}]
//     };
//     return [...p,c];
    

// },[])
// console.log(updateduserlist);

// {
//     male:[/*all the males*/],
//     male:[/*all the females*/],

// }



//reduce loop(most powerfull loop)





//100000

//avaible at index:2

//max time process atre traversing,iteration
//2 times



const index=users.findIndex((value)=>{
    console.log(value.id)
    return value.id===1;
});
console.log(index);


//up
const updatedUsers=[
    ...users.slice(0,index),//take all record before index
    {...users[index],name:'Ansh'},//updated object
    ...users.slice(index+1),//take all record after index
];

const updatedUsers1=users.map((v,i)=>{
    console.log(v.id)

    if(v.id===1){
        return {...v,name:'Anshu'};
    }
    return v;
}
)
console.log(updatedUsers1);




console.log(updatedUsers);


//forin

const obj={
    a:1,
    b:2,
    c:3,
};

for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key);
        console.log(element);
        console.log(obj);

    }
}

//forof

const arry={
    a:1,
    b:2,
    c:3,
};
for (const [key,value] of Object.entries(arry)) {
   console.log(key);
   console.log(value);
   console.log(arry);
}