const arr = [1,2,3,4,5,6,7]

console.log(arr[2]);

// update record



const newArr = arr.map(value => {
    if(value % 2 === 0) {
        return value * 2
    }
    return value
});

console.log(newArr);


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

const updatedUsers = users.map((value, index) => value.name === 'alia' ? ({...value, age: 23}): value);

console.log(updatedUsers);

