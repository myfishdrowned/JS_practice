const person = {
    _age: 25,
  
    get age() {
      return this._age;
    },
  
    set age(newAge) {
      if (newAge > 0) {
        this._age = newAge;
      } else {
        console.log("Age must be positive");
      }
    }
  };
  
  console.log(person.age);   // Getter -> Output: 25
  person.age = 30;           // Setter updates _age
  console.log(person.age);   // Getter -> Output: 30
  person.age = -5;           // Setter -> Output: Age must be positive
  