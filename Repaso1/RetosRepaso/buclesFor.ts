function evenNumbers(num){
    for(let i = 0; i<=num; i++){
        if(i % 2 !== 0){ 
        console.log(i);
        }
    }
};

evenNumbers(10);


function myRevert(myarr){
    let array:string[] = [];
    for(let i = myarr.length - 1; (i >= 0); i--){
        array.push(myarr[i]);
    }
    return array;
};

const arrayDato = [ "uno", "dos", "tres"];
const arrayRevert = myRevert(arrayDato);
console.log(arrayRevert);

function isRainbow(colors:string[]): void{
    let arcoiris:string[] = ['rojo','azul', 'verde','amarillo', 'naranja', 'violeta', 'indigo'];
    colores.forEach((color) => {
        if(arcoiris.includes(color)){
            console.log('El color esta en el arcoiris');
        } 
        else {
            console.log('El color no esta en el arcoiris');
        }
    });
};


const colores = ['dorado', 'azul'];
isRainbow(colores);

function add(myWords:string[]): number{
    let sumaCaract = 0;

    myWords.forEach((caracter) => {
        sumaCaract += caracter.length;
    });
    return sumaCaract;
};

const palabras =['retos', 'de', 'bucles', 'for'];
console.log(add(palabras));


module.exports = {add}





