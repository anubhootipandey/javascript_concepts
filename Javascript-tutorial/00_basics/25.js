//------getter and setter-------

class Person{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    get fullDetails(){
        return ` My name is ${this.name} and i am ${this.age} years old ${this.gender}.`
    }
    // setName(name, age){
    //     this.name = name;
    //     this.age = age;
    // }
    set fullDetails(fullDetails){
        const [name, age] = fullDetails.split("");
        this.name = name;
        this.age = age;
    }
}

const person1 = new Person("Angel", 19, "female")
// console.log(person1.fullDetails());
// console.log(person1.name);
// person1.setName("anjali", 34);
// console.log(person1.name);
person1.fullDetails = "Hell"
console.log(person1.fullDetails);





