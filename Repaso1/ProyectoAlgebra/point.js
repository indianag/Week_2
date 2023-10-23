"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.setX = function (newX) {
        this.x = newX;
    };
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.setY = function (newY) {
        this.y = newY;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    Point.prototype.toString = function () {
        return "".concat(this.x, ",").concat(this.y);
    };
    Point.prototype.distanceToOrigin = function () {
        var puntoX = this.x - 0;
        var puntoY = this.y - 0;
        var distancia = Math.sqrt(Math.pow(puntoX, 2) + Math.pow(puntoY, 2));
        return distancia;
    };
    Point.prototype.calculateDistance = function (anotherPoint) {
        var distancia = Math.sqrt((Math.pow((this.x - anotherPoint.x), 2)) + (Math.pow((this.y - anotherPoint.y), 2)));
        return distancia;
    };
    Point.prototype.calculateQuadrant = function () {
        var cuadrante = 0;
        if (this.x == 0 && this.y == 0) {
            cuadrante = 0;
        }
        else if (this.x > 0 && this.y > 0) {
            cuadrante = 1;
        }
        else if (this.x < 0 && this.y > 0) {
            cuadrante = 2;
        }
        else if (this.x < 0 && this.y < 0) {
            cuadrante = 3;
        }
        else if (this.x > 0 && this.y < 0) {
            cuadrante = 4;
        }
        return cuadrante;
    };
    return Point;
}());
exports.Point = Point;
;
