"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobile_1 = require("./mobile");
var mobileCollection_1 = require("./mobileCollection");
var myMobile1 = new mobile_1.Mobile("Indiana", "iphone", "14 ProMax", "violeta", 1800);
var myMobile2 = new mobile_1.Mobile("Indiana", "iphone", "14 ProMax", "violeta", 1800);
var myMobile3 = new mobile_1.Mobile("Indiana", "iphone", "14 ProMax", "violeta", 1800);
var myMobile4 = new mobile_1.Mobile("Indiana", "iphone", "14 ProMax", "violeta", 1800);
var arr = [myMobile1, myMobile2, myMobile3, myMobile4];
var coleccion = new mobileCollection_1.MobileCollection(arr);
// console.log(coleccion.getMobiles());
// coleccion.setMobiles([]);
// console.log(coleccion.getMobiles());
// console.log(coleccion.getTotalPrice());
// coleccion.setTotalPrice(1);
// console.log(myMobile1.getPrice());
console.log(coleccion.getTotalPriceCalculation());
// console.log(coleccion.printCollection());
