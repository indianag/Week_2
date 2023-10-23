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
    // public setTotalPriceCalculation(newTotal:number[]): void {
    //     this.totalPriceCalculation = newTotal
    // }
    public getTotalPriceCalculation(): number{
        let suma:number= 0;
        for( let i = 0; i <this.mobiles.length; i++){
            suma += this.mobiles[i].getPrice();
        }
        return suma;
    }
    public printCollection(){
        let newLocal = `This is all my mobiles:  The characteristics of the mobile name are:`;
        for (let mobile  of this.mobiles){
            console.log(mobile)
        }
    }
    /////NO PUDE CONCATENAR LETRAS//////

    
};