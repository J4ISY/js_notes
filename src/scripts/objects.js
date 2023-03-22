// dzien 2, zad. 1

// const country = {
//     capital: 'Warsaw',
//     population: 37.8,
//     president: 'Andrew D.',
//     ministers: ['Sasin', 'Niedzielski']
// };

// console.log(country.capital, country.population, country.president, country.ministers);

// dzien 2, zad. 2

// const timeMachine = {
//     shape: 'square',
//     model: 'Delorean',
//     run(date, place){
//         return `Jesteś w ${place}, data: ${date}`;
//     }
// }
//
// console.log(timeMachine.shape, timeMachine.model, timeMachine.run('29.02.2028', 'Sochaczew'));

// dzien 2, zad. 4

// const person = {
//     name: 'Radosław',
//     age: 99,
//     sayHello() {
//         console.log('hello');
//     }
// };
//
// console.log(person.name, person.age);
// person.sayHello()

// dzien 2, zad. 5

// const favouriteRecipe = {
//     title: 'boiled water',
//     serving: 4
// }
//
// favouriteRecipe.ingredients = ['water'];
//
// console.log(favouriteRecipe.title, favouriteRecipe.serving, favouriteRecipe.ingredients);

// this

// const user = {
//     name: 'Janusz',
//     age: 44,
//     getName() {
//         return this.name;
//     }
// }
//
// console.log(user.getName());
//
// console.log(user.getName.call({name: 'Andrzej'}));

//dzien 2, zad 1, this

// const car = {
//     brand: 'BMW',
//     color: 'Black',
//     numberOfKilometers: 0,
//     printCarInfo() {
//         console.log(`${this.color} ${this.brand}, ${this.numberOfKilometers}`)
//     },
//     drive(km) {
//         this.numberOfKilometers += km;
//     }
// }
//
// car.printCarInfo();
// car.drive(240);
// car.printCarInfo();

//dzien 2, zad 2, this

// const calculator = {
//     save: function (newA, newB) {
//         this.a = newA;
//         this.b = newB;
//     },
//     sum(){
//         return this.a + this.b;
//     },
//     multiply(){
//         return this.a * this.b;
//     }
// };
//
// calculator.save(2, 3);
// console.log(calculator.sum());
// console.log(calculator.multiply());

// dzien 2, zad 3, this

// const stairs = {
//     step: 0,
//     up (){
//         this.step++;
//     },
//     down(){
//       this.step--;
//     },
//     printStep(){
//         console.log(this.step);
//     }
// }
//
// stairs.up();
// stairs.up();
// stairs.up();
// stairs.down();
// stairs.printStep()

// function User(name){
//     this.name = name;
// }
//
// const janusz = new User('Janusz');
// const ala = new User('Ala');
// console.log(janusz);
// console.log(ala);

// Array.prototype.myMap = function(cb){
//     const newArray = [];
//
//     for (let i = 0; i < this.length; i++){
//         const newValue = cb(this[i], i, this);
//         newArray.push(newValue);
//     }
//
//     return newArray;
// }

// dzien 2, zad.1 constructor

// function Basket() {
//     this.products = [];
//     this.sum = 0;
// }
//
// Basket.prototype.addProduct = function(name, price){
//     this.products.push({
//         name, price
//     });
//
//     this.sum += price;
// }
//
// Basket.prototype.showBasket = function(){
//     const formattedProducts = this.products.map((product) => `${product.name}: ${product.price}zł`)
//     console.log('-'.repeat(20));
//     console.log('Koszyk: ');
//     console.log(formattedProducts.join(`, `));
//     console.log(`Suma: ${this.sum}zł`);
// }

// const aliceBasket = new Basket();
// aliceBasket.addProduct("pomidor",10);
// aliceBasket.addProduct("arbuz",40);
// aliceBasket.showBasket();
//
// const bruceBasket = new Basket();
// bruceBasket.addProduct("rice", 10);
// bruceBasket.addProduct("grzyby mun",50);
// bruceBasket.addProduct("tofu",20);
// bruceBasket.showBasket();


// dzien 2, zad.2 constructor

// const Robot = function (name) {
//     this.name = name;
//     this.isFunctional = false;
// };
//
// Robot.prototype.sayHi = function (toWho) {
//     if (this.isFunctional) {
//         console.log("Robot " + this.name + " greets " + toWho);
//     } else {
//         console.log("Robot " + this.name + " is broken");
//     }
// };
//
// Robot.prototype.changeName = function (newName) {
//     console.log("Robot " + this.name + " changes name to " + newName);
//     this.name = newName;
// };
//
// Robot.prototype.fixIt = function () {
//     this.isFunctional = true;
//     console.log("Robot " + this.name + " was fixed");
// };
//
// const sophia = new Robot('Sophia');
// sophia.sayHi('Januszowi');
// sophia.changeName('Sophia 2');
// sophia.fixIt();
// sophia.sayHi('Januszowi');


// dzien 2, z.3 constructor

// function Calculator(){
//     this.operationsHistory = [];
// }
//
// Calculator.prototype.add = function (num1, num2) {
//     const result = num1 + num2;
//     this.operationsHistory.push(`added ${num1} to ${num2} got ${result}`);
//     return result;
// }
// Calculator.prototype.multiply = function (num1, num2) {
//     const result = num1 * num2;
//     this.operationsHistory.push(`multiplied ${num1} to ${num2} got ${result}`);
//     return result;
// }
// Calculator.prototype.subtract = function (num1, num2) {
//     const result = num1 - num2;
//     this.operationsHistory.push(`subtracted ${num1} to ${num2} got ${result}`);
//     return result;
// }
// Calculator.prototype.divide = function (num1, num2) {
//     const result = num1 / num2;
//     this.operationsHistory.push(`divided ${num1} to ${num2} got ${result}`);
//     return result;
// }
//
// Calculator.prototype.printOperations = function () {
//     const formattedData = this.operationsHistory
//         .map((operation, index ) => `${index + 1}. ${operation}`);
//
//     console.log(formattedData.join('\n'));
// }
//
// Calculator.prototype.clearOperations = function () {
//     this.operationsHistory = [];
// }
//
// const casio = new Calculator();
//
// casio.add(1, 2);
// casio.add(0.1, 0.2);
// casio.subtract(0.1, 0.2);
// casio.divide(0.1, 0.2);
// casio.multiply(0.1, 0.2);
//
// casio.printOperations();
// casio.clearOperations();
// casio.printOperations();

