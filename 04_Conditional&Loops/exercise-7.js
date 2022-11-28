function sumUntil(maxValue, minValue = 1) { //to sum number in a range if needed
  let sum = 0;
  for (let i = minValue; i <= maxValue; i++) {
    sum += i;
  };
  return sum;
};

console.log(sumUntil(5));

console.log('Sum every number from 12 to 25: ' + sumUntil(25, 12));
