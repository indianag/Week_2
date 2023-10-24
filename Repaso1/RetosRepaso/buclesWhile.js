// function hasEven(myNums: number[]): boolean{
//     let i = 0;
//     while(i < myNums.length){
//         if(myNums[i] % 2 === 0){
//             return true;
//         }
//         i++;
//     }
//     return false;
// };
// const numeros = [1,2,3,4,5,6,7,8,9,10];
// console.log(hasEven(numeros));
function starWithM(myNames) {
    var i = 0;
    while (i < myNames.length) {
        if (myNames[i][0] !== 'M' && myNames[i][0] !== 'm') {
            return false;
        }
        i++;
    }
    return true;
}
;
var arrNombres = ['Manuel', 'Maria', 'Marcos', 'Marta', 'Medro'];
console.log(starWithM(arrNombres));
