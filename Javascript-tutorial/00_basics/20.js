//proto, prototype

// const user = {
//     firstName: "Anu",
//     lastName: "Pandey",
//     email: "khatarnakkhatri@00.com",
//     age: 20,
//     address: "House Number, Colony, pincode, state",
//     about: function(){
//         return `${this.firstName} is ${this.age} years old.`
//     },
//     is18: function(){
//         return this.age >= 18;
//     }
// }

// const aboutUser = user.about();
// console.log(aboutUser);


const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`
    },
    is18 : function(){
        return this.age >= 18;
    }
}
function createUser(firstName, lastName, email, age, address){
    const user = Object.create(userMethods);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    // user.about = function(){
    //     return `${this.firstName} is ${this.age} years old.`
    // }
    // user.is18 = function(){
    //     return this.age >= 18;
    // }
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    return user;
}

const user1 = createUser("Anu", "Pandey", "adshj123@.com", 18, "my Address")
console.log(user1);
// const is18 = user1.is18();
// console.log(is18);
// const about = user1.about();
// console.log(about);





