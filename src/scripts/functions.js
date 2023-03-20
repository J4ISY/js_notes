// function add(a, b) {
//     return a + b;
// }

// const result = add(5, 7);
// console.log(result);

// function expressuion / wyrażenie funkcyjne
// const add1 = function (a, b){
//     return a + b;
// }

// console.log(add1);
// console.log(add1(2, 3));

// const add2 = (a, b) => {
//     return a + b;
// }

// console.log(add2);
// console.log(add2(5, 3));

// const add3 = (a, b) => {
//     return a + b;
// }
//
// const add4 = () => {
//     return 1 + 2;
// }
//
// const add5 = a => {
//     return a + 5;
// }
//
// const add6 = (a, b) => a + b;
//
// const magic = a => a <= 0;
//

// Funkcja, która mówi, czy jest ciepło, czy zimno

// function checkWeather(temp) {
//     if (temp < 20){
//         return 'zimno';
//     }
//     return 'cieplo';
// }
//
// console.log(checkWeather(22));

// Zwróć najwyższą liczbę

// const max = (digits) => {
//     let result = digits[0];
//
//     for(let i = 0; i < digits.length; i++){
//         if(result < digits[i]){
//             result = digits[i];
//         }
//     }
//     return result;
// }

// const max = (digits) => {
//     let result = digits[0];
//
//     for (const digit of digits) {
//         if (result < digit) {
//             result = digit;
//         }
//     }
//
//     return result;
// }

// const max = (digits) => {
//     return Math.max(digits);
// }

const max = (digits) => Math.max(...digits);

console.log(max([1, 2, 3, 4, -5, 33]));