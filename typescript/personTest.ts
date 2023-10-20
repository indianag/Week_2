import { Person } from "./person";

let persona = new Person("Indiana", 1991, "indimar.w1@gmail.com")
console.log(persona.name);
console.log(persona.age);
let miAddress = persona.getAddress();
console.log(miAddress);
persona.setAddress("igranado@gmail.com");
console.log(persona.getAddress());

