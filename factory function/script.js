//A factory function in JavaScript is a function that returns objects. Unlike constructor functions, 
//which are used with the new keyword to create new instances of objects, factory functions simply 
//generate and return objects without the need for new. Factory functions are a way to implement 
//the factory pattern, which is a creational design pattern used for creating objects.

function createPerson(name, age) {
    return {
        name: name,
        age: age,
        sayHello: function() {
            console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
        }
    };
}

// Creating instances of Person using the factory function
var person1 = createPerson("Alice", 30);
var person2 = createPerson("Bob", 25);

// Calling method on instances
person1.sayHello(); // Output: Hello, my name is Alice and I am 30 years old.
person2.sayHello(); // Output: Hello, my name is Bob and I am 25 years old.


