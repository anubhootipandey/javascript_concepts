//----------call bind apply------------


/*-----call----->
Think of it like making a direct call to a function. 
When you use call, you're immediately invoking a function, 
just like you'd call someone on the phone. You pass arguments 
to call directly, and it executes the function with those 
arguments.
*/

function about(hobby, favSinger){
    console.log(this.firstName, this.age, hobby, favSinger);
}

const user1 = {
    firstName: "Satyabrat",
    age: 15,
}

const user2 = {
    firstName: "Tanu",
    age: 19, 
}

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

const func = about.bind(user2, "guitar", "Shreya");
func();


