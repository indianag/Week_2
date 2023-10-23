function zodiac(day, month) {
    var signoZodiaco = " ";
    if ((day >= 20 && month == 1) || (day <= 18 && month == 2)) {
        signoZodiaco = "Acuario";
    }
    else if ((day >= 19 && month == 2) || (day <= 20 && month == 3)) {
        signoZodiaco = "Piscis";
    }
    else if ((day >= 21 && month == 3) || (day <= 19 && month == 4)) {
        signoZodiaco = "Aries";
    }
    else if ((day >= 20 && month == 4) || (day <= 20 && month == 5)) {
        signoZodiaco = "Tauro";
    }
    else if ((day >= 21 && month == 5) || (day <= 20 && month == 6)) {
        signoZodiaco = "Geminis";
    }
    else if ((day >= 21 && month == 6) || (day <= 22 && month == 7)) {
        signoZodiaco = "Cancer";
    }
    else if ((day >= 23 && month == 7) || (day <= 22 && month == 8)) {
        signoZodiaco = "Leo";
    }
    else if ((day >= 23 && month == 8) || (day <= 22 && month == 9)) {
        signoZodiaco = "Virgo";
    }
    else if ((day >= 23 && month == 9) || (day <= 22 && month == 10)) {
        signoZodiaco = "Libra";
    }
    else if ((day >= 23 && month == 10) || (day <= 21 && month == 11)) {
        signoZodiaco = "Escorpio";
    }
    else if ((day >= 22 && month == 11) || (day <= 21 && month == 12)) {
        signoZodiaco = "Sagitario";
    }
    else if ((day >= 22 && month == 12) || (day <= 19 && month == 1)) {
        signoZodiaco = "Capricornio";
    }
    return signoZodiaco;
}
console.log(zodiac(13, 5));
function continent(country) {
    var continentes = {
        America: ['venezuela', 'Argentina,', 'Colombia', 'Panama', 'Estados Unidos'],
        Europa: ['España', 'Italia', 'Francia', 'Alemania', 'Portugal'],
        Asia: ['China', 'Rusia', 'Japon', 'Turquia', 'Georgia'],
        Africa: ['Angola', 'Nigeria', 'Madagascar', 'Marruecos', 'Egipto'],
        Oceania: ['Australia', 'Nueva Zelanda', 'Isla Salomon', 'Kiribati', 'Fiyi'],
    };
    var miContinente;
    for (var continente in continentes) {
        if (continentes[continente].indexOf(country) !== -1) {
            miContinente = continente;
            break;
        }
    }
    return miContinente;
}
console.log(continent("España"));
function isEven(number) {
    if (number % 2 === 0) {
        console.log('El numero es par');
    }
    else {
        console.log('El numero es impar');
    }
}
console.log(isEven(2));
