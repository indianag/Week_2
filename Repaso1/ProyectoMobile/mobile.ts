export class Mobile{
    private name: string;
    private trademark: string;
    private model: string;
    private color: string;
    private price: number;

    constructor(name:string, trademark:string, model:string, color:string, price:number){
        this.name = name;
        this.trademark = trademark;
        this.model = model;
        this.color = color;
        this.price = price;
    }
    public setName(newName:string):void{
        this.name = newName
    }
    public getName(): string{
        return this.name
    }
    public setTrademark(newTrademark:string):void{
        this.trademark = newTrademark
    }
    public getTrademark(): string{
        return this.trademark
    }
    public setModel(newModel:string):void{
        this.model = newModel
    }
    public getModel(): string{
        return this.model
    }
    public setColor(newColor:string):void{
        this.name = newColor
    }
    public getColor(): string{
        return this.color
    }
    public setPrice(newPrice:number):void{
        this.price = newPrice
    }
    public getPrice(): number{
        return this.price
    }
};
 