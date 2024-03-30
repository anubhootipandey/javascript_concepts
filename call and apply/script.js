const person = {
    fullName: function(city, country) {
      return this.firstName + ' ' + this.lastName + ', ' + city + ', ' + country;
    }
  };
  
  const person1 = {
    firstName: 'Anne',
    lastName: 'Doe'
  };
  
  const person2 = {
    firstName: 'Helen',
    lastName: 'Frank'
  };
  
  // Using call() method
  console.log(person.fullName.call(person1, 'New York', 'USA')); // Output: John Doe, New York, USA
  console.log(person.fullName.call(person2, 'London', 'UK')); // Output: Jane Doe, London, UK

  // Using apply() method
console.log(person.fullName.apply(person1, ['Bangkok', 'Thailand'])); // Output: John Doe, New York, USA
console.log(person.fullName.apply(person2, ['Berlin', 'Germany'])); // Output: Jane Doe, London, UK
  


/*
Key Differences:

->call() accepts arguments individually, while apply() accepts arguments as an array or an array-like object.
->When the number of arguments is known, call() is generally preferred. When the number of arguments is unknown or dynamic, apply() is more suitable.
->Both methods achieve the same result in terms of setting the this context and calling the function, but they differ in how they accept arguments.

*/