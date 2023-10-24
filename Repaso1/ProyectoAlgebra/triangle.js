"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
var Triangle = /** @class */ (function () {
    function Triangle(vertx1, vertx2, vertx3) {
        this.vertx1 = vertx1;
        this.vertx2 = vertx2;
        this.vertx3 = vertx3;
    }
    Triangle.prototype.setVertx1 = function (newVertx1) {
        this.vertx1 = newVertx1;
    };
    Triangle.prototype.getVertx1 = function () {
        return this.vertx1;
    };
    Triangle.prototype.setVertx2 = function (newVertx2) {
        this.vertx2 = newVertx2;
    };
    Triangle.prototype.getVertx2 = function () {
        return this.vertx2;
    };
    Triangle.prototype.setVertx3 = function (newVertx3) {
        this.vertx3 = newVertx3;
    };
    Triangle.prototype.getVertx3 = function () {
        return this.vertx3;
    };
    Triangle.prototype.calculateLengthSides = function () {
        var longitudes = [];
        var puntoAB = this.vertx1.calculateDistance(this.vertx2);
        var puntoBC = this.vertx2.calculateDistance(this.vertx3);
        var puntoCA = this.vertx3.calculateDistance(this.vertx1);
        longitudes = [puntoAB, puntoBC, puntoCA];
        return longitudes;
    };
    return Triangle;
}());
exports.Triangle = Triangle;
