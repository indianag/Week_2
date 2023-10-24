import { Triangle } from "./triangle";
import { Point } from "./point";

let v1 = new Point(2,3);
let v2 = new Point(-1,3);
let v3 = new Point(5,8);

let myTriangle = new Triangle(v1,v2,v3);

console.log(myTriangle.calculateLengthSides());

