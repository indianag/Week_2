export class Person {
    public name: string;
    public age: number;
    private address: string;

    constructor(name:string,age:number,address:string){
        this.name = name;
        this.age = age;
        this.address = address;
    }
    printName(){
        console.log(this.name);
    }
    yearOfBirth(){
        let currentYear = new Date().getFullYear();
        return this.age - currentYear;
    } 
    public setAddress(newAddress:string):void{
        this.address = newAddress
    }
    public getAddress(): string{
        return this.address
    }
}

let persona = new Person("Indiana", 1991, "indimar.w1@gmail.com")
console.log(persona.name);
console.log(persona.age);
let miAddress = persona.getAddress();
console.log(miAddress);
persona.setAddress("igranado@gmail.com");
console.log(persona.getAddress());


