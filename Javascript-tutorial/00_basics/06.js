//object destructuring

// const band = {
//     bandName: "led zeplin",
//     famousSong: "stairway to heaven",
//     year: 1968
// }


// // const bandName = band.bandName;
// // const famousSong = band.famousSong;
// // console.log(bandName, famousSong);

// //destructuring

// const {bandName, famousSong, ...restObj} = band;
// console.log(bandName, famousSong);
// console.log(restObj);


//objects inside array--->very useful in real world application

const users = [
    {
        userId: 1,
        firstName: "Anu",
        lastName: "Pandey",
        gender: "female"
    },
    {
        userId: 2,
        firstName: "Tanu",
        lastName: "Pandey",
        gender: "female"
    },
    {
        userId: 3,
        firstName: "Nidhi",
        lastName: "Pandey",
        gender: "female"
    },
    {
        userId: 4,
        firstName: "Satyabrat",
        lastName: "Pandey",
        gender: "male"
    }
]

// console.log(users);

//iterate usinf for of loop
// for(let user of users){
//     console.log(user.firstName);
// }

//--------------destructuring--------------

// const [, , ,user1, user2, user3, user4] = users;
// console.log(user4);

//-------------nested destructuring-----------------

// const [{firstName}, , , {gender}] = users;
// console.log(firstName, gender);

const [{firstName: user1firstName, userId}, , , {gender: user4gender}] = users;
console.log(user1firstName);
console.log(user4gender);
console.log(userId);


