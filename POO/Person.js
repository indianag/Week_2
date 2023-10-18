class Person {
    
    constructor(nombre, apellido, edad, lugarNacimiento, colorPelo, colorOjos, altura, peso, tieneCoche, yearOfBirth){
            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
            this.lugarNacimiento = lugarNacimiento;
            this.colorPelo = colorPelo;
            this.colorOjos = colorOjos;
            this.altura = altura;
            this.peso = peso;
            this.tieneCoche = tieneCoche;
            this.yearOfBirth = yearOfBirth;
            this.hobbies = [];
    }

iMC()
{
    return this.peso/(this.altura*this.altura)*1000;
}
edad1()
{
    let yearDni = new Date().getFullYear();
    return yearDni - this.yearOfBirth;
}
printAll()
{
    console.log(`Mi nombre es: ${this.nombre}, y mi apellido: ${this.apellido}, tengo ${this.edad} años de edad, nacida en ${this.lugarNacimiento}, tengo el cabello de color: ${this.colorPelo}, mis ojos de color: ${this.colorOjos}, mido: ${this.altura}, peso: ${this.peso}, tienes coche: ${this.tieneCoche}, nacida en el año: ${this.yearOfBirth}.`);
}
printHobbies()
{
    for (let hobbie of this.hobbies){
        console.log(hobbie);
    }
    console.log(this.hobbies);
}
};





///OTRO ARCHIVO////
let miIMC = new Person("indiana", "granado", 32, "caracas", "negro", "Azul", 169, 79, false, 1991);
console.log(miIMC.iMC());




let miEdad = new Person("indiana", "granado", 32, "caracas", "negro", "Azul", 169, 79, false, 1991);
console.log(miEdad.edad1());



let person1 = new Person("indiana", "granado", 32, "caracas", "negro", "Azul", 169, 79, false, 1991);
person1.printAll();
person1.hobbies = ["comer", "dormir"];
person1.printHobbies();

module.exports = {Person}