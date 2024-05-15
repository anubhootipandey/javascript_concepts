//class keyword

class CreateUser{
    constructor(firstName, lastName, email, age, address){
        console.log("constructor called!!");
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }

    about(){
        return `${this.firstName} is ${this.age} years old.`
    }
    is18(){
        return this.age >= 18;
    }
    sing(){
        return "Tara ra ra ra";
    }
}

// function CreateUser(firstName, lastName, email, age, address){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
//     return this;
// }

// CreateUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old.`
// };

// CreateUser.prototype.is18 = function(){
//     return this.age >= 18;
// };

// CreateUser.prototype.sing = function(){
//     return "Tara ra ra ra"
// };

const user1 = new CreateUser("Anu", "Pandey", "anu@12.com", 20, "House")
// const user2 = new CreateUser("Tanu", "Pandey", "tanu@12.com", 20, "House")
// const user3 = new CreateUser("Nidhi", "Pandey", "nidhi@12.com", 20, "House")
console.log(Object.getPrototypeOf(user1));



