const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

// Print values of person using Object.keys
Object.keys(person).forEach(key => {
  console.log(key + ": " + person[key]);
});

// Print key/value pairs using Object.entries
console.log(Object.entries(person));
