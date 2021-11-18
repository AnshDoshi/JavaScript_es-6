//mutable java script
const obj={
    a:2,
    b:3,
    h:11,
};
obj.d=33;

console.log(obj);
//traversing
//immutable java script
//CRUD(create,read,update,delete) OPERATION USING IMMUTABLE JAVASCRIPT
//OLD JS TECHNIQ
const obj1=Object.assign({},obj,{e:44});
console.log(obj1);



//NEW JS TECHNIQ
//SPREAD OPERATER(...)
// example of add new value in object using immuatablejs
//when you need to add new property dd before spread operater
const obj2={x:10,y:11,...obj};
console.log(obj2);

// update object value using immutable js
//when you need to update new property dd before spread operater

const obj3={...obj,b:2};
const obj4={b:2,...obj};

console.log(obj3);
console.log(obj4);

console.log(obj);


//delete property/propertieswe have to use object destructure
const user={
    fName:'Ansh'
}
const{fName:firstName}=user;
console.log(firstName)





const a=1010;
// console.log(obj.a);
// console.log(obj.b);

const {a:abc,b,...rest}=obj;
console.log(a);
console.log(abc);
console.log(rest);