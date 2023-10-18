const {Person} = require("./Person.js");

let person1 = new Person("indiana", "granado", 32, "caracas", "negro", "Azul", 169, 79, false, 1991);
person1.hobbies = ["comer", "dormir"];

person1.iMC();
person1.edad1();
person1.printAll();
person1.printHobbies([]);