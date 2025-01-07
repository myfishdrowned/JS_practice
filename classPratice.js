class Person {
    constructor(name, age) {
      this.name = name; // Instance property
      this.age = age;   // Instance property
    }
  
    introduce() {
      return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
  }
  