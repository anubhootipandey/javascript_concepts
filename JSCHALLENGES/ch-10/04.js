//Remove duplicates from an array

const arr = [2, 3, 5, 3, 6, 8, 9, 2, 11, 5];


//-----------------------Using Set method------------------------
//My answer:
// const res = [...new Set(arr)];
// console.log(res);


const strArr = ['Muke', 'John', 'Thomas', 'John', 'Peter', 'Muke'];

// //My answer:
// const ans = [...new Set(strArr)]
// console.log(ans);

//-----------------------Using filter & indexOf method------------------------

// const uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index)
// console.log(uniqueArr);

// const uniqueStrArr = strArr.filter((item, index) => strArr.indexOf(item) === index)
// console.log(uniqueStrArr);

//-----------------------Using forEach method------------------------

// const uniqueArr = []
// const res = {}

// arr.forEach(item => {
//     if(!res[item]){
//         uniqueArr.push(item);
//         res[item] = true;
//     }
// });

// console.log(uniqueArr);

//-----------------------Using reduce method------------------------

const uniqueArr = arr.reduce((acc, cur) => {
    if(!acc.includes(cur)){
        acc.push(cur);
    }
    return acc;
}, []);

console.log(uniqueArr);










