//Rest operator

const person = {
    name: "abc",
    age: 22,
    address: "lucknow",
    gender: "female",
};

// let firstPerson = {...person, name: "def"};
// console.log(firstPerson);

const { name, ...rest } = person;

console.log(name);
console.log(rest);