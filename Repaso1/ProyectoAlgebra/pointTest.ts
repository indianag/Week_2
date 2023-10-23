import { Point } from "./point";

let myPoint = new Point(3,5);
let anotherPoint:Point = new Point(4,7);


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


