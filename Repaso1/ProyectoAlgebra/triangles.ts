import { Point } from "./point";

export class Triangle{
    private vertx1: Point;
    private vertx2: Point;
    private vertx3: Point;

    constructor(vertx1: Point, vertx2: Point, vertx3: Point){
        this.vertx1 = vertx1;
        this.vertx1 = vertx2;
        this.vertx3 = vertx3;
    }
    public setVertx1(newVertx1: Point): void {
        this.vertx1 = newVertx1
    }
    public getVertx1(): Point {
        return this.vertx1
    }
    public setVertx2(newVertx2: Point): void {
        this.vertx2 = newVertx2
    }
    public getVertx2(): Point {
        return this.vertx2
    }
    public setVertx3(newVertx3: Point): void {
        this.vertx3 = newVertx3
    }
    public getVertx3(): Point {
        return this.vertx3
    }
    public calculateLengthSides():number[]{
        let puntoAB:number = calculateDistance(this.vertx1);
        let puntoBC:number = calculateDistance(this.vertx2);
        let puntoCA:number = calculateDistance(this.vertx3);
        const posiciones = [puntoAB,puntoBC,puntoCA];
    }
}




// const distancia = Math.sqrt(((this.x - anotherPoint.x) ** 2) + ((this.y - anotherPoint.y) ** 2));
// return distancia;