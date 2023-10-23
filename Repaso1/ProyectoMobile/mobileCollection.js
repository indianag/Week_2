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
    // public setTotalPriceCalculation(newTotal:number[]): void {
    //     this.totalPriceCalculation = newTotal
    // }
    MobileCollection.prototype.getTotalPriceCalculation = function () {
        var suma = 0;
        for (var i = 0; i < this.mobiles.length; i++) {
            suma += this.mobiles[i].getPrice();
        }
        return suma;
    };
    MobileCollection.prototype.printCollection = function () {
        var newLocal = "This is all my mobiles:  The characteristics of the mobile name are:";
        for (var _i = 0, _a = this.mobiles; _i < _a.length; _i++) {
            var mobile = _a[_i];
            console.log(mobile);
        }
    };
    return MobileCollection;
}());
exports.MobileCollection = MobileCollection;
;
