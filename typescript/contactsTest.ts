import { Person } from "./person"
import { contacts } from "./contacts"

let persona = new Person("Indiana", 1991, "indimar.w1@gmail.com");
let persona1 = new Person("Indiana", 1991, "indimar.w1@gmail.com");
let persona2 = new Person("Indiana", 1991, "indimar.w1@gmail.com");

let contacto = new contacts();
contacto.people=[persona,persona1,persona2];
contacto.printCalendar();
