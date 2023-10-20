    import { Book } from "./book";
    import { Library } from "./library";

let libro1 = new Book("Introduccion a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");
let libro2 = new Book("Introduccion a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");


let myLibrary = new Library([libro1, libro2], "Ricardo Ortiz, 41", "soy tu Manager");

console.log(myLibrary.getAddress());
myLibrary.setAddress("El cañaveral");
console.log(myLibrary.getAddress());

console.log(myLibrary.getManager());
myLibrary.setManager("Ahora soy tu Manager");
console.log(myLibrary.getManager());

console.log(myLibrary.toStringLibray());
console.log(myLibrary.getNumberOfBooks());
console.log(myLibrary.findByAuthor("Joseph Smith"));

