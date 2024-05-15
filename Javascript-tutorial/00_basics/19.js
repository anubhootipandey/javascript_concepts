//----------call bind apply------------


/*-----call----->
Think of it like making a direct call to a function. 
When you use call, you're immediately invoking a function, 
just like you'd call someone on the phone. You pass arguments 
to call directly, and it executes the function with those 
arguments.
*/

const user1 = {
    firstName: "Satyabrat",
    age: 15,
    about: function(){
        console.log(this.firstName, this.age);
    }
}

// const user2 = {
//     firstName: "Tanu",
//     age: 19, 
// }

// user1.about.call(user2, "sleep", "Mohit Chauhan")


/*-----apply------>
Similar to call, but instead of passing arguments directly, 
you pass them as an array. It's like applying for something 
using a form where you list down all your details. 
The function then takes those arguments from the array 
and executes.
*/

// user1.about.apply(user1, ["guitar", "Shreya"])


/*----------bind-------->
This doesn't immediately execute the function like call 
and apply do. Instead, it creates a new function where 
this is bound to a specific value (or object). It's like 
making a copy of a function but with a predetermined context 
(or value of this). You can execute this new function later.
*/

// const func = about.bind(user2, "guitar", "Shreya");
// func();


//---------------------------------------------------------
//--------------------Don't do this mistake----------------
//---------------------------------------------------------

//user1.about();
// const myFunc = user1.about;//undefined
// myFunc();
const myFunc = user1.about.bind(user1);
myFunc();


//------------------------------arrow function------>

const user3 = {
    firstName: "Tanu",
    age: 19,
    about: () => {
        console.log(this);
        console.log(this.firstName, this.age);
    } 
}
user3.about.call(user3);//Since user3.about is an arrow 
//function, its this refers to the this of the surrounding 
//scope where it was defined, not to the user3 object.
//So, when you call user3.about.call(user3), it doesn't 
//change the value of this inside the arrow function because 
//arrow functions are not affected by call, apply, or bind. 
//Therefore, this.firstName and this.age inside the arrow 
//function about still refer to the this of the surrounding 
//lexical context, which in this case is likely the global 
//object (or undefined in strict mode).


//--------------------------------------------------------------

//Arrow functions don't bind their own this, instead, 
//they inherit this from the surrounding lexical context.

