export class Vector{
    private elements: number[];

    constructor(public n:number, public k:number){
        this.n = n;
        this.k = k;
        this.elements = [];
    
        for(let i = 0; i<this.n; i++){
            this.elements.push(Math.floor(Math.random() * this.k));
            }
    }
    public printVector():void {
        console.log(this.elements);
    }
    public addVector(v1:Vector): Vector {
        let v3:Vector = new Vector (0,0);
        for(let i = 0; i < v1.elements.length; i++){
            if (v1.elements.length == this.elements.length) {
                v3.elements.push(v1.elements[i]+ this.elements[i]);
            }    
        }
        return v3;
        }
    public subsVector(v1:Vector):Vector {
        let vectorSubs:Vector = new Vector (0,0);
        for(let i = 0; i < v1.elements.length; i++){
            if (v1.elements.length == this.elements.length) {
                vectorSubs.elements.push(v1.elements[i] - this.elements[i]);
            }    
        }
        return vectorSubs;
    }
    public multVector(v1:Vector):Vector {
        let vectorMult:Vector = new Vector (0,0);
        for(let i = 0; i < v1.elements.length; i++){
            if (v1.elements.length == this.elements.length) {
                vectorMult.elements.push(v1.elements[i] * this.elements[i]);
            }    
        }
        return vectorMult;
    }
    public multNumber(n:number):Vector {
        let multNum:Vector = new Vector (0,0);
        for(let i = 0; i < this.elements.length; i++){
                multNum.elements.push(n * this.elements[i]);
            }    
        return multNum;
    }
}