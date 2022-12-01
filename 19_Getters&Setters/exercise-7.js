class Person {
  #firstName = "";
  #lastName = "";
  #age = 0;

  constructor(firstName, lastName, age) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    if (typeof(age) === 'number') {
      this.#age = age;
    } else if (typeof(age) === 'string' && typeof(parseInt(age)) === 'number' && !isNaN(parseInt(age))) {
      this.#age = parseInt(age);
    } else {
      console.warn('Age must be a number!');
    }
  }

  set firstName (newFirstName) {
    if (typeof(newFirstName) != 'string') {
      console.error('First name must be a string!');
    } else {
      this.#firstName = newFirstName;
    }
  }
  set lastName (newLastName) {
    if (typeof(newLastName) != 'string') {
      console.error('Last name must be a string!');
    } else {
      this.#lastName = newLastName;
    }
  }
  set age(newAge) {
    if (typeof(newAge) != 'number') {
      console.error('Age must be a number!');
    } else if (newAge < 1) {
      this.#age = 1;
      console.warn('Age must be a number between 1 and 120. Age is now set to 1.');
    } else if (newAge > 120) {
      this.#age = 120;
      console.warn('Age must be a number between 1 and 120. Age is now set to 120.');
    } else {
      this.#age = newAge;
    }
  }

  get firstName() {
    return this.#firstName;
  }
  get lastName() {
    return this.#lastName;
  }
  get age() {
    return this.#age;
  }
  get fullName() {
    return `${this.#firstName} ${this.#lastName}`
  }
}

const person = new Person('Mario', 'Rossi', 25);

console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';

console.log(person.fullName);