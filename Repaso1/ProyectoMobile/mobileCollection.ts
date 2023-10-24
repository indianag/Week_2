import { Mobile } from "./mobile";

export class MobileCollection{
    private mobiles: Mobile[];
    private totalPrice: number;

    constructor(mobiles: Mobile[]){
        this.mobiles = mobiles;
        this.totalPrice =this.getTotalPriceCalculation();
        
    }
    public setMobiles(newMobiles:Mobile[]): void {
        this.mobiles = newMobiles
    }
    public getMobiles(): Mobile[]{
        return this.mobiles       
    }
    public setTotalPrice(newTotalPrice:number): void{
        this.totalPrice = newTotalPrice
    }
    public getTotalPrice(): number{
        return this.totalPrice
    }
    public getTotalPriceCalculation(): number{
        let suma:number= 0;
        for( let i = 0; i <this.mobiles.length; i++){
            suma += this.mobiles[i].getPrice();
        }
        return suma;
    }
    public printCollection():string{
        let misMobiles = ``;
        for (let i = 0; i< this.mobiles.length; i++){
            misMobiles = misMobiles + 
            `This is all my mobiles: 
            ${this.mobiles[i].toStringMobile}
            ......
            Price overall: totalPrice`;
        }
        return misMobiles;
    }
};