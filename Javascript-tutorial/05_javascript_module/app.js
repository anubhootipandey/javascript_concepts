import { firstName as fname } from "./utils/fname.js";
import { age } from "./utils/age.js";
import  Person, { Person2 }  from "./utils/person.js";

console.log(fname, age);

const person = new Person2("Donald", "Duck", 34);
person.info();
console.log(person);
