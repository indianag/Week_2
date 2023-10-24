function evenNumbers(num) {
    for (var i = 0; i <= num; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}
;
evenNumbers(10);
function myRevert(myarr) {
    var array = [];
    for (var i = myarr.length - 1; (i >= 0); i--) {
        array.push(myarr[i]);
    }
    return array;
}
;
var arrayDato = ["uno", "dos", "tres"];
var arrayRevert = myRevert(arrayDato);
console.log(arrayRevert);
function isRainbow(colors) {
    var arcoiris = ['rojo', 'azul', 'verde', 'amarillo', 'naranja', 'violeta', 'indigo'];
    colores.forEach(function (color) {
        if (arcoiris.includes(color)) {
            console.log('El color esta en el arcoiris');
        }
        else {
            console.log('El color no esta en el arcoiris');
        }
    });
}
;
var colores = ['dorado', 'azul'];
isRainbow(colores);
function add(myWords) {
    var sumaCaract = 0;
    myWords.forEach(function (caracter) {
        sumaCaract += caracter.length;
    });
    return sumaCaract;
}
;
var palabras = ['retos', 'de', 'bucles', 'for'];
console.log(add(palabras));
module.exports = { add: add };
