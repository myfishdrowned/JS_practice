class Person {
    constructor(name, age) {
      this.name = name; // Instance property
      this.age = age;   // Instance property
    }
  
    introduce() {
      return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
  }
const alien = new Person("alien", 25); 
const von = new Person("von", 30);    

console.log(alien.introduce());
console.log(von.introduce());   
