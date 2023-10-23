import { Point } from "./point";

let myPoint = new Point(3,5);
let myPoint1 = new Point(2,4);
let myPoint2 = new Point(1,6);
let anotherPoint:Point = new Point(4,7);
let arrPuntos:Point [] = [myPoint, myPoint1, myPoint2];

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

console.log(myPoint.calculateNearest(arrPuntos));


