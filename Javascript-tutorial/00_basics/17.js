//----------clone using Object.assign-------

const obj = {
    key1: "value1",
    key2: "value2"
}

// const obj2 = obj;
// obj.key3 = "value3";
// //memory has only one object and obj and obj2 is pointing to the same object in the memory

// console.log(obj);
// console.log(obj2);

//cloning
//using spread operator
// const obj2 = [...obj]

//using Object.assign
const obj2 = Object.assign({}, obj)
obj.key3 = "value3";
console.log(obj);
console.log(obj2);


