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


//------------------------------------------------------------------------------

/*In JavaScript, a constructor is a special function used to create and initialize objects. When you use a constructor function, you create an instance of an object with properties and methods defined in that constructor.

Here's a simple explanation:

Function Definition: A constructor function is like any other function, but it is usually defined with a capitalized name to indicate that it's intended to be used as a constructor.

Using new Keyword: When you create an object using the new keyword and a constructor function, it sets up the new object and assigns properties and methods to it.
*/

