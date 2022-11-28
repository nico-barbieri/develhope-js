function calculateAverageAge(persons) {
  const averageAge = Math.round(persons.reduce((average, person, index) => {
    //divide the sum by n element only if it's the last iteration
    return (index==(persons.length-1))
      ? ((average + person.age)/persons.length) 
      : (average + person.age);
  }, 0));
  return averageAge;
}

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const average = calculateAverageAge(persons);
console.log(persons);
console.log(average);