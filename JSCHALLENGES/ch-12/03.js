//Split Array Items into Individual words

const arr1 = ["I want to become", "a professional front end", "developer"];



//My answer-
// const res = arr1.map(x => x.split(' ')).flat();
// console.log(res);


//Or

const res = arr1.flatMap(x => x.split(' '));
console.log(res);

//output-['I', 'want', 'to', 'become', 'a', 'professional', 'front', 'end', 'developer']
