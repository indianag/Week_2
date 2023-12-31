"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var myPoint = new point_1.Point(3, 5);
var anotherPoint = new point_1.Point(4, 7);
console.log(myPoint.getX());
myPoint.setX(-1);
console.log(myPoint.getX());
console.log(myPoint.getY());
myPoint.setY(-2);
console.log(myPoint.getY());
console.log(myPoint.toString());
console.log(myPoint.distanceToOrigin());
console.log(myPoint.calculateDistance(anotherPoint));
console.log(myPoint.calculateQuadrant());
console.log(myPoint.calculateNearest([]));
