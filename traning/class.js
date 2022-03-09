// Pillars of oops concepts

// 1. Inheritance
// 2. polymorphism
// 3. abstraction
// 4. encapsulation

// Class

// const user1 = {
//     firstName: "Yagnesh",
//     lastName: "Modh",
//     age: 30,
//     gender: "male",
//     fullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// const user2 = {
//     firstName: "Rohit",
//     lastName: "Sharma",
//     age: 32,
//     gender: "male",
//     fullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }


class User {
    isTeamIndia = true;
    // Special Method
    // Call only once while creating instance
    constructor (firstName, lastName, age, gender) {
        this.#changeName(firstName, lastName)
        this.age = age;
        this.gender = gender;
    }

    static capitalize(str) {
        return `${str[0].toUpperCase()}${str.slice(1)}`
    }

    set firstName(value) {
        this._firstName = User.capitalize(value);
    }

    get firstName() {
        return this._firstName;
    }

    set lastName(value) {
        this._lastName = User.capitalize(value);
    }

    get lastName() {
        return this._lastName;
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    #changeName(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class AdminUser extends User {
    constructor () {
        super("Rahul", "Dravid", 54, "male")
    }

    fireUser() {
        console.log("Fire User");
    }

    changeName() {
        
    }
    
}

const myFirstName = "rahul";

console.log(User.capitalize(myFirstName));

const user1 = new User("yagnesh", "modh", 30,  'male');

console.log(user1.fullName());

console.log(user1.isTeamIndia);


console.log(user1.fullName());

const admin = new AdminUser();

console.log(admin.firstName);
console.log(admin.lastName);
console.log(admin.age);
console.log(admin.fullName());

console.log(admin.fireUser());