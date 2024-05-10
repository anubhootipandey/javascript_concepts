function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

var anu = new Person('Anu', 'Pandey');
var tanu = new Person('Tanu', 'Pandey');
var satyabrat = new Person('Satyabrat', 'Pandey');
var nidhi = new Person('Nidhi', 'Pandey');

console.table([anu, tanu, satyabrat, nidhi]);