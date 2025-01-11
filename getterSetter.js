const obj = {
    _property: 0, // Underlying property
  
    // Getter
    get property() {
      return this._property;
    },
  
    // Setter
    set property(value) {
      if (value >= 0) {
        this._property = value;
      } else {
        console.log("Value must be non-negative");
      }
    }
  };
console.log(obj.property); // Getter is called -> Output: 0

obj.property = 5;         // Setter is called
console.log(obj.property); // Getter is called -> Output: 5

obj.property = -3;        // Setter is called -> Output: Value must be non-negative
