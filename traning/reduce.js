// reduce most powerful method of javascript

const arr = [1,2,3,4,5,6];

const sum = arr.reduce((previous, current) => previous + current, 0);

console.log(sum);

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }

// console.log(sum);

const users = [
    {
        name: "Yagnesh",
        age: 30,
        gender: "male"
    },
    {
        name: "virat",
        age: 32,
        gender: "male"
    },
    {
        name: "rohit",
        age: 29,
        gender: "male"
    },
    {
        name: 'alia',
        age: 21,
        gender: "female"
    },
    {
        name: "deepika",
        age: 25,
        gender: "female"
    },
    {
        name: "priyanka",
        age: 39,
        gender: "female"
    },
    {
        name: "taimur",
        age: 08,
        gender: "male"
    }
]

const obj = {
    a: 1,
    b: 2,
    c: 3
}

console.log(obj['d']);

obj['d'] = [];

console.log(obj['d']);

const groupByGender = users.reduce((p, c) => {
    if(p[c.gender] === undefined) {
        p[c.gender] = [];
    }
    p[c.gender].push(c);
    return p;
}, {});

// {
//     '00-09': [],
//     '20-29': [],
//     '30-39': [],
//     '90-94': []
// }

console.log(groupByGender);

// {
//     "male": [],
//     "female": []
// }

const findRohit = users.reduce((p, c) => {
    if(c.name === "rohit") {
        return c;
    }
    return p;
}, undefined)

console.log(findRohit);

const findRohitIndex = users.reduce((p, c, i) => {
    if(c.name === "rohit") {
        return i;
    }
    return p;
}, -1);

console.log(findRohitIndex);

const filterMaleRecords = users.reduce((p , c) => {
    if(c.gender === 'male') {
        return [...p, c]
    }
    return p;
}, []);

console.log(filterMaleRecords);

const users = [
    {
        name: "Yagnesh",
        age: 30,
        gender: "male"
    },
    {
        name: "virat",
        age: 32,
        gender: "male"
    },
    {
        name: "rohit",
        age: 29,
        gender: "male"
    },
    {
        name: 'alia',
        age: 21,
        gender: "female"
    },
    {
        name: "deepika",
        age: 25,
        gender: "female"
    },
    {
        name: "priyanka",
        age: 39,
        gender: "female"
    },
    {
        name: "taimur",
        age: 08,
        gender: "male"
    },
    {
        name: "amitabh",
        age: 94,
        gender: "male"
    }
]

// {
//     "00-09": [],
//     "20-29": [],
//     "30-39": [],
// }

// 30-39
const age = 55;

const ageGroup = Math.floor(age/10);

const key = `${ageGroup}0-${ageGroup + 1}9`

console.log(key);

//  > 30
//  < 30 > 50 
// > 50

const groupByAge = users.reduce((p, c) => {
    let key = ''
    if(c.age <= 30) {
        key = "<30"
    }
    else if(c.age >= 30 && c.age <= 50) {
        key = ">30<50"
    } else {
        key = ">50"
    }
    
    if(p[key] === undefined) {
        p[key] = [];
    }
    p[key].push(c);
    return p;
}, {
});

console.log(groupByAge);


