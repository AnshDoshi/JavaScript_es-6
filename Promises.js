// PROMISES
//race
//all
// Any
// allsettled


// setTimeout (()=>{
//     console.log('a1');
// },0)

// console.log('s1');
// console.log('s2');
// console.log('s3');


const p1=()=>{
    return new Promise((resolve,reject)=>{
        resolve('a');
    })
}
const p2=()=>{
    return new Promise((resolve,reject)=>{
        resolve(`${data} b`);
    })
}

// const apiCalls=async()={
//     try{
//     const r1=await p1();
//     const r2=await p2(r1);
//     console.log(r1);
//     console.log(r2);
//     }catch(error){
//         console.log(error);

//     }
//     finally{
//         console.log('finally call always');
//     }

// }


//old javascript technic
// p1().then((value=>p2(value).then((val)=>console.log(val)).catch((err)=>console.log(err))).catch((err)=>console.log('err',err));