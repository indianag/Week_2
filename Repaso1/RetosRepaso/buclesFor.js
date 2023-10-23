function evenNumbers(num) {
    for (var i = 0; i <= num; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}
;
console.log(evenNumbers(10));
function myRevert(myarr) {
    var array = [];
    for (var i = myarr.length - 1; (i >= 0); i--) {
        array.push(myarr[i]);
    }
    return array;
}
;
var arrayDato = ["uno", "dos", "tres"];
var arrayRevert = evenNumbers(arrayDato);
function isRainbow(colors) {
    var arcoiris = ['rojo', 'azul', 'verde', 'amarillo', 'naranja', 'violeta', 'indigo'];
    colors.forEach(function (color) {
        if (arcoiris.indexOf(color)) {
            console.log('El color esta en el arcoiris');
        }
        else {
            console.log('El color no esta en el arcoiris');
        }
    });
}
;
var colores = ['rojo', 'azul'];
isRainbow(colores);
function add(myWords) {
    var sumaCaract = 0;
    myWords.forEach(function (caracter) {
        sumaCaract += caracter.length;
    });
    return sumaCaract;
}
var palabras = ['retos', 'de', 'bucles', 'for'];
console.log(add(palabras));
