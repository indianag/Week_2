const {Person} = require("./Person.js");
const {Contacts} = require("./Contacts.js");

let persona = new Person("indiana", "granado", 32, "caracas", "negro", "Azul", 169, 79, false, 1991);
let persona1 = new Person("indiana", "granado", 32, "caracas", "negro", "Azul", 169, 79, false, 1991);
let persona2 = new Person("indiana", "granado", 32, "caracas", "negro", "Azul", 169, 79, false, 1991);

let Contacto= new Contacts();

Contacto.contactos=[persona, persona1, persona2];

Contacto.printPersons();