const input1 = {a:1, b:2, c:3, d:10, e:12}
const input2 = {a:2, e:12, f:6, d:10}

function findCommonValues(obj1, obj2) {
    const output = {};
    for (const key in obj1) {
        if (obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
            output[key] = obj1[key];
        }
    }
    return output;
}

const output = findCommonValues(input1, input2);
console.log(output); // Output: { d: 10, e: 12 }