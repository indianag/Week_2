import { Vector } from "./vector";

let vector1 = new Vector(5,6);
let vector2 = new Vector(5,6);

vector1.printVector();

console.log(vector1.addVector(vector2));
console.log(vector1.subsVector(vector2));
console.log(vector1.multVector(vector2));
console.log(vector1.multNumber(5));

