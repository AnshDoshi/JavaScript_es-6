
//object oriented programming concepts


//Inheritance => just revileelated information to end user
//Polimorphysome => put related information together
//Encapsulation => code reusalibility
//Abstaction => expose related thing

// function Animal(type){


// }
// Animal()


class Animal{
    constructor(type){
        this.type=type;
    console.log(type);
    //call only one when we create instance
    }

    set type(value){
        this._type=value.toUpperCase()
    }

    get type(){
        return this._type
    }


makesound(){
    console.log(this.type)
    if(this.type==='DOG'){
    console.log('bow bow') ;
    }
    else{
    console.log('meow')
    }
}
static a=1;

static sayHello(){
    console.log('hello');
}
    

};

class Dog extends Animal{
    constructor(){
        super('Dog')
    }
    makesound(){
        // console.log('Bow vow')
        super.makesound();
    }
}

const d=new Dog()


d.makesound();



// console.log(Animal.sayHello())



//instance of the object
// const a= new Animal('Dog');
// console.log(Animal.a)

// a.makesound();
// console.log(a.type);

// //instance of the object
// const b= new Animal('Cat');
// b.makesound();