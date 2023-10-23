"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, trademark, model, color, price) {
        this.name = name;
        this.trademark = trademark;
        this.model = model;
        this.color = color;
        this.price = price;
    }
    Mobile.prototype.setName = function (newName) {
        this.name = newName;
    };
    Mobile.prototype.getName = function () {
        return this.name;
    };
    Mobile.prototype.setTrademark = function (newTrademark) {
        this.trademark = newTrademark;
    };
    Mobile.prototype.getTrademark = function () {
        return this.trademark;
    };
    Mobile.prototype.setModel = function (newModel) {
        this.model = newModel;
    };
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    Mobile.prototype.setColor = function (newColor) {
        this.name = newColor;
    };
    Mobile.prototype.getColor = function () {
        return this.color;
    };
    Mobile.prototype.setPrice = function (newPrice) {
        this.price = newPrice;
    };
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    return Mobile;
}());
exports.Mobile = Mobile;
;
