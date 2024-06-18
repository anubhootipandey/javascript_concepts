let users = [
    {
        name: 'abc',
        age: 30,
    },
    {
        name: 'def',
        age: 20,
    },
    {
        name: 'ghi',
        age: 25,
    },
    {
        name: 'jkl',
        age: 28,
    },
];

const result = document.getElementById("result");

const ans = users.filter(user => {
    return user.age < 28;
});

console.log(ans);

// By creating new div
function displayUsers(users){
    users.forEach(user => {
        const userDiv = document.createElement("div");
        userDiv.innerHTML = `Name:</strong> ${user.name} <br> Name:</strong> ${user.age}`;
        result.appendChild(userDiv);
    });
}



//if we do this way then it will only show one data not multiple data if present
// function displayUsers(users){
//     result.innerHTML = "";
    
//     users.forEach(user => {
//         result.innerHTML = `<p>Name: ${user.name} <br> Age: ${user.age}`;
//     });
// }

displayUsers(ans);


