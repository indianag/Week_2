function evenNumbers(num){
    for(let i = 0; i<=num; i++){
        if(i % 2 !== 0){ 
        console.log(i);
        }
    }
};

// console.log(evenNumbers(10))


function myRevert(myarr){
    let array:string[] = [];
    for(let i = myarr.length - 1; (i >= 0); i--){
        array.push(myarr[i]);
    }
    return array;
};

// const arrayDato = [ "uno", "dos", "tres"];
// const arrayRevert = evenNumbers(arrayDato);

function isRainbow(colors:string[]): void{
    let arcoiris=['rojo','azul', 'verde','amarillo', 'naranja', 'violeta', 'indigo'];
    colors.forEach((color) => {
        if(arcoiris.indexOf(color)){
            console.log('El color esta en el arcoiris');
        } 
        else {
            console.log('El color no esta en el arcoiris');
        }
    });
};

// const colores = ['rojo', 'azul'];
// isRainbow(colores);

export function add(myWords:string[]): number{
    let sumaCaract = 0;

    myWords.forEach((caracter) => {
        sumaCaract += caracter.length;
    });
    return sumaCaract;
};

// const palabras =['retos', 'de', 'bucles', 'for'];
// console.log(add(palabras));


export function isEven(number:number) {
    if (number % 2 === 0) {
        console.log('El numero es par');
    }
    else {
        console.log('El numero es impar');
    }
}
 isEven(2);





