// function Player(name, marker) {
//     this.name = name;
//     this.marker = marker;
// }
// const player = new Player('steve', 'X');
// console.log(player.name); // 'steve'

// Constructor approach
function oldCar(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
}

const myOldCar = new oldCar('Toyota', 'Corolla', 2008, 'silver');

console.log(myOldCar.make);
console.log(myOldCar.model);
console.log(myOldCar.year);
console.log(myOldCar.color);

// Class approach
// class newCar {
//     constructor(make, model, year, color) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//         this.color = color;
//         this.drive = () => { console.log(`you drive the ${this.model}`) }
//     }
// }

// const mynewCar = new newCar('Honda', 'Civic', 2020, 'Gray');

// console.log(mynewCar.make);
// console.log(mynewCar.model);
// console.log(mynewCar.year);
// console.log(mynewCar.color);
// mynewCar.drive()

class book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

}
const theHobbit = new book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'read')
