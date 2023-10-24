"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileCollection = void 0;
var MobileCollection = /** @class */ (function () {
    function MobileCollection(mobiles) {
        this.mobiles = mobiles;
        this.totalPrice = this.getTotalPriceCalculation();
    }
    MobileCollection.prototype.setMobiles = function (newMobiles) {
        this.mobiles = newMobiles;
    };
    MobileCollection.prototype.getMobiles = function () {
        return this.mobiles;
    };
    MobileCollection.prototype.setTotalPrice = function (newTotalPrice) {
        this.totalPrice = newTotalPrice;
    };
    MobileCollection.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    MobileCollection.prototype.getTotalPriceCalculation = function () {
        var suma = 0;
        for (var i = 0; i < this.mobiles.length; i++) {
            suma += this.mobiles[i].getPrice();
        }
        return suma;
    };
    MobileCollection.prototype.printCollection = function () {
        var misMobiles = "";
        for (var i = 0; i < this.mobiles.length; i++) {
            misMobiles = misMobiles +
                "This is all my mobiles: \n            ".concat(this.mobiles[i].toStringMobile, "\n            ......\n            Price overall: totalPrice");
        }
        return misMobiles;
    };
    return MobileCollection;
}());
exports.MobileCollection = MobileCollection;
;
