const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".

person2.firstName = "Simon";

console.log(person1);
console.log(person2);

/*In this code, there's no difference between a change made to person1 or person2. This happens
because both person1 and person2 point to the same object. Since person1 is not a primitive, its values
are allocated in the Heap Memory and person1 (which is in the Stack) "contains" the reference to them.
So, when we write person2=person1, we actually create a variable named person2 which contains
the same address of person1 and that results in two variables pointing to the same allocation in the Heap or,
in other words, to the same object. When we change a person2 property we change the property stored
at that address, so we change the same object that person1 also points to (the only actual object we 
have), and viceversa. To create a copy of an object, we can (for example) write person2 = {...person1}.
Another solution could be writing a constructor function Person(firstName, lastName, age) and then 
creating different objects with "new" keyword*/
