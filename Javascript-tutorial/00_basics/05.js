//spread operator in array

// const arr1 = [1, 2, 3];
// const arr2 = [5, 6, 7];

// const newArr = [...arr1, ...arr2, 89, 70, ..."abc"];
// console.log(newArr);

//spread operator in objects

const obj1 = {
    key1: "val1",
    key2: "val2",
}

const obj2 = {
    key1: "Hiii",
    key3: "val3",
    key4: "val4",
}

// const newObj = {...obj1, ...obj2};
const newObj = {...obj1, key45: "val45", ..."abc"}
console.log(newObj);
