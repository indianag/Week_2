import { Mobile } from "./mobile";
import { MobileCollection } from "./mobileCollection";

let myMobile1 = new Mobile("Indiana", "iphone", "14 ProMax", "violeta", 1800);
let myMobile2 = new Mobile("Indiana", "iphone", "14 ProMax", "violeta", 1800);
let myMobile3 = new Mobile("Indiana", "iphone", "14 ProMax", "violeta", 1800);
let myMobile4 = new Mobile("Indiana", "iphone", "14 ProMax", "violeta", 1800);

let arr = [myMobile1, myMobile2, myMobile3, myMobile4];

let coleccion = new MobileCollection(arr);

// console.log(coleccion.getMobiles());
// coleccion.setMobiles([]);
// console.log(coleccion.getMobiles());

// console.log(coleccion.getTotalPrice());
// coleccion.setTotalPrice(1);
// console.log(myMobile1.getPrice());

// console.log(coleccion.getTotalPriceCalculation());


console.log(coleccion.printCollection());


