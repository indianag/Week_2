export class Point{
    private x: number;
    private y: number;

    constructor(x: number, y:number){ 
    this.x = x;
    this.y = y;
}
public setX(newX: number):void{
    this.x = newX
}
public getX(): number{
    return this.x
}
public setY(newY: number):void{
    this.y = newY
}
public getY(): number{
    return this.y
}
public toString(){
    return `${this.x},${this.y}`
}
public distanceToOrigin():number{
    let puntoX = this.x - 0;
    let puntoY = this.y - 0;
    const distancia = Math.sqrt(puntoX ** 2 + puntoY ** 2);
    return distancia
}
public calculateDistance(anotherPoint:Point): number{
    const distancia = Math.sqrt(((this.x - anotherPoint.x)** 2) + ((this.y - anotherPoint.y)** 2));
    return distancia;
}
public calculateQuadrant():number{
    let cuadrante:number = 0;
    if(this.x == 0 && this.y == 0){
        cuadrante = 0;
    }
    else if (this.x > 0 && this.y > 0){
        cuadrante = 1;
    }
    else if (this.x < 0 && this.y > 0){
        cuadrante = 2;
    }
    else if (this.x < 0 && this.y < 0){
        cuadrante = 3;
    }
    else if (this.x > 0 && this.y < 0){
        cuadrante = 4;
    }
        return cuadrante;
}
// public calculateNearest(point:Point[]):Point{
//     let punto:Point[]= [];
//    for(let distancia of point){
//         if(this.calculateDistance(distancia) < distancia.distanceToOrigin()){
//             punto.push(distancia);
            
//         }
//     } 
//    return punto 
// } 
};

