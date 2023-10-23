"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobile_1 = require("./mobile");
var myMobile = new mobile_1.Mobile("Indiana", "iphone", "14 ProMax", "violeta", 1800);
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
/// RETO 2 ////
var MiMetodo = /** @class */ (function () {
    function MiMetodo() {
        this.mobiles = [];
    }
    MiMetodo.prototype.printcaracMobiles = function () {
        for (var _i = 0, _a = this.mobiles; _i < _a.length; _i++) {
            var propiedades = _a[_i];
            console.log(propiedades);
        }
    };
    return MiMetodo;
}());
;
var myMobile1 = new mobile_1.Mobile("Indiana", "iphone", "14 ProMax", "violeta", 1800);
var myMobile2 = new mobile_1.Mobile("Indiana", "iphone", "14 ProMax", "violeta", 1800);
var myMobile3 = new mobile_1.Mobile("Indiana", "iphone", "14 ProMax", "violeta", 1800);
var mobile = new MiMetodo();
mobile.mobiles = [myMobile1, myMobile2, myMobile3];
mobile.printcaracMobiles();
