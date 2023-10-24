import { Mobile } from "./mobile";

let myMobile = new Mobile("Indiana", "iphone", "14 ProMax", "violeta", 1800);

console.log(myMobile.getName());
myMobile.setName("Betzabeth");
console.log(myMobile.getName());

console.log(myMobile.getTrademark());
myMobile.setTrademark("Samsung");
console.log(myMobile.getTrademark());

console.log(myMobile.getModel());
myMobile.setModel("J6");
console.log(myMobile.getModel());

console.log(myMobile.getColor());
myMobile.setColor("Azul");
console.log(myMobile.getColor());

console.log(myMobile.getPrice());
myMobile.setPrice(1200);
console.log(myMobile.getPrice());


let myMobile1 = new Mobile("Indiana", "iphone", "14 ProMax", "violeta", 1800);
let myMobile2 = new Mobile("Indiana", "iphone", "14 ProMax", "violeta", 1800);
let myMobile3 = new Mobile("Indiana", "iphone", "14 ProMax", "violeta", 1800);
 

console.log(myMobile.toStringMobile());