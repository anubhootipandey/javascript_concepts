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

const ans = users.filter(user => {
    return user.age < 28;
})

console.log(ans);


