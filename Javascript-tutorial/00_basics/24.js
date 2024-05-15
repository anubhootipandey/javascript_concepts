//----class constructor----

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating`;
    }
    isSuperCute(){
        return this.age <= 1;
    }
    isCute(){
        return true;
    }
}

// const animal1 = new Animal("Moti", 2)
// console.log(animal1);
// console.log(animal1.isCute());
// console.log(animal1.isSuperCute());

//dog class
//super keyword
class Dog extends Animal{
    constructor(name, age, speed){
        super(name, age);
        this.speed = speed;
    }

    eat(){
        return `Modified Eat: ${this.name} is eating.`
    }

    run(){
        return `${this.name} is running at ${this.speed}kmph`
    }
}

//object / instance
const kukuu = new Dog("kukuu", 3, 45)
console.log(kukuu.eat());








