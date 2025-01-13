class Person {
    static species = "Homo sapiens"; // Static property
  
    constructor(name, age) {
      this.name = name; // Instance property
      this.age = age;   // Instance property
    }
  
    static describeSpecies() {
      return `Humans belong to the species ${this.species}.`; // Static method
    }
  }
  