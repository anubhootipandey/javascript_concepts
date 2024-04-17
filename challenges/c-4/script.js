const user1 = {
    name: 'John',
    age: 20,
    address: {
        city: 'Mumbai',
        state: 'Maharashtra'
    },
}

const user2 = user1

user2.name = 'Ramesh'
user2.address.city = 'Pune'

console.log(user1);
console.log(user2);

//Task1: Tell the output of user1 and user2

//----------The answer is: user1-->all the data of user1 from line no. 1 to 8 and user2 has same output as user1, it is 
//because we have used const here for user2 and in const, we can not update or change value if it is assigned before.

/*--------------------------------------------------------------------------------------------------------------------*/

//Task2: Remove the lines const user2 = user1 and console.log(user2) and also instead of writing user2.name = 'Ramesh', 
//write user1.name = 'Ramesh' and same for the address.

