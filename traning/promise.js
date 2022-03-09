
// pending

// completed

// rejected

const login = () => {
    return new Promise((resolve, reject) => {

        

        // make server call
        // response will be passed to resolve parameter
        // reject("p1 reject");
        setTimeout(() => { resolve("access_token") }, 3000)
        
    })
}

const users = (token) => {
    return new Promise((resolve, reject) => {
        if(!token) {
            reject("token is required to get data")
        }
        resolve("users")
    })
}

const ls = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve("ls resolved") }, 2000)
    })
}

const ms = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve("ms resolved") }, 3000)
    })
}

const rs = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve("rs resolved") }, 1000)
    })
}

const loadFacebookPage = async () => {
    try {
        console.time("process")
        const res = await Promise.race([
            ls(),
            ms(),
            rs()
        ]);
        console.log(res);
        // const lsRes = await ls();
        // const msRes = await ms();
        // const rsRes = await rs();
        // console.log(lsRes);
        // console.log(msRes);
        // console.log(rsRes);
        console.timeEnd("process")
    } catch (error) {
        console.log(error);
        
    }
}

loadFacebookPage();

const loadData = async () => {
    try {
        const loginRes = await login();
        const userRes = await users(loginRes)
        console.log(loginRes);
        console.log(userRes);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("finally");
    }
}

loadData();





// vanilla javascript approach to handle promises
// callback hell
// login()
// .then(value => {
//     users()
//     .then(val => {
//         console.log(val);
//     })
//     .catch(err => {
//         console.log(err);
//     })

// })
// .catch(err => console.log(err));

console.log("s1")
console.log("s2")
