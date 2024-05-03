const myMap = new Map();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
console.log(myMap);

const mySet = new Set();
mySet.add('value1');
mySet.add('value2');
console.log(mySet);

/*Map:- 
    --used to store key-value pairs where each key is unique.
    --suitable for scenarios where you need to associate data with unique keys and perform operations such as adding, 
       removing, and updating key-value pairs.
*/
      
/*Set:- 
    --used to store unique values of any type, where each value is unique.
    --useful when you need to store a collection of unique values and perform operations such as adding, removing, and
      checking for the presence of values.
*/