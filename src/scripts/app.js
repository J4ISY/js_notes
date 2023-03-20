// Redeklaracja

// var x = 42;
// let x1 = 42;
// const x2 = 42;
//
// console.log(x, x1, x2);

// var x = 42; // OK
// let x1 = 42; // NOT
// const x2 = 42; // NOT

// Reinicjalizacja

// var x = 42;
// let x1 = 42;
// const x2 = 42;
//
// x = 666; // OK
// x1 = 666; // OK
// x2 = 666; // NOT
//
// console.log(x, x1, x2);

// Hoisting - przeniesienie deklaracji zmiennej, funkcji, class na górę aktualnie przetwarzanego zasięgu
// var, let, const - są hoistowane, ale let i const, trafiają do TDZ (Temporary Dead Zone)

// console.log(x);
// var x = 42;

// var x;
// console.log(x);
// x = 42;

// TDZ - Temporary Dead Zone
// console.log(x1);
// let x1 = 42;

// Scope, browser - window (global object), nodejs - object
// Rodzaje zasięgów:
// Funkcyjny - tworzony przez funkcje
// Blokowy - tworozny przez parę klamerek (Curly braces)

// if (true) {
//     var x = 42;
//     let x1 = 42;
//     const x2 = 42;
// }
//
// console.log(x, x1, x2);

// function magic() {
//     var x = 42;
//     let x1 = 42;
//     const x2 = 42;
// }
//
// magic();
// console.log(x, x1, x2);

