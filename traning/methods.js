const arr = [1,2,3,4,5,6,7];

console.log(arr.indexOf(4));

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

const indexAlia = users.findIndex(x => x.name === 'alia');

console.log(indexAlia);

const updatedUsers = [
    ...users.slice(0, indexAlia),
    {...users[indexAlia], age:23},
    ...users.slice(indexAlia + 1)
]

console.log(updatedUsers);

// if record fond it return index
// not found return -1
const indexRohit = users.findIndex(user => user.name === 'hardik');

// if record found return data
// not found return undefined
const rohit = users.find(user => user.name === "hardik");

// if record found return array of data
// not found return []
const maleUsers = users.filter(user => user.gender === "other");

// if every record match condition then return true;
// else false
const isEveryAdult = users.every(user => user.age > 18);

// if any record match condition then return true;
// else false
const isChildExist = users.some(user => user.age < 18)

console.log(isEveryAdult);

console.log(isChildExist);

console.log(rohit);

console.log(indexRohit);

console.log(maleUsers);

console.log(users);

