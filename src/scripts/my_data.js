// const data = [
//     {
//         title: "Cybrepunk 2077",
//         maker: "CD Projekt Red",
//         game_genre: "RPG"
//     },
//
//     {
//         title: "Resident Evil 2 Remake",
//         maker: "Capcom",
//         game_genre: "Survival Horror"
//     },
//
//     {
//         title: "Red Dead Redemption 2",
//         maker: "cD PROJEKT RED",
//         game_genre: "RPG"
//     },
//
//     {
//         title: "Wiedzmin 3: Dziki Gon",
//         maker: "CD PROJEKT RED",
//         game_genre: "RPG"
//     },
//
//     {
//         title: "Devil May Cry 5",
//         maker: "Capcom",
//         game_genre: "Hack and Slash"
//     },
//
//     {
//         title: "Tekken 7",
//         maker: "bandai Namco",
//         game_genre: "Fighting"
//     },
//
//     {
//         title: "Battlefield 2042",
//         maker: "eA Dice",
//         game_genre: "Shooting"
//     },
//
//     {
//         title: "Resident Evil 4 Remake",
//         maker: "Capcom",
//         game_genre: "survival Horror"
//     },
//
//     {
//         title: "Battlefield 4",
//         maker: "EA DICE",
//         game_genre: "shooting"
//     },
// ];

// Tablica wszystkich gier.

// const getAllGames = (elements) => {
//     const title = [];
//
//     for (const element of elements){
//         for (const game of element.title){
//             title.push(game);
//         }
//     }
//     return elements;
// }

// const getAllGames = (elements) => elements
//     .flatMap((element) => element.title);
//
// console.log(getAllGames(data));

// Tablica wszystkich twórców. Wypisz jacy twórcy, ale nie mogą się powtarzać

// Sformatuj game_genre, żeby wszystkie zaczynały się wielką literą




// const data = [
//     {
//         manufacturer: 'KIA',
//         model: 'EV6',
//         power: 325,
//         engine: 'electric',
//         price: 264900,
//     },
//     {
//         manufacturer: 'Alfa Romeo',
//         model: 'Giulia',
//         power: 510,
//         engine: 'petrol',
//         price: 477500,
//     },    {
//         manufacturer: 'Nissan',
//         model: 'Micra',
//         power: 92,
//         engine: 'petrol',
//         price: 73500,
//     },    {
//         manufacturer: 'Tesla',
//         model: '3',
//         power: 325,
//         engine: 'electric',
//         price: 219990,
//     },    {
//         manufacturer: 'Peugeot',
//         model: '2008',
//         power: 136,
//         engine: 'electric',
//         price: 184600,
//     },    {
//         manufacturer: 'Ferrari',
//         model: 'Purosangue',
//         power: 725,
//         engine: 'petrol',
//         price: 1750000,
//     },    {
//         manufacturer: 'Dacia',
//         model: 'Spring',
//         power: 45,
//         engine: 'electric',
//         price: 106900,
//     },    {
//         manufacturer: 'BMW',
//         model: '440i',
//         power: 374,
//         engine: 'petrol',
//         price: 335000,
//     },
// ];

//Zad 1

// const getWildCars = (elements) => {
//     const cars = [];
//
//     for (const element of elements){
//         if (element.price > 300000){
//             cars.push(`${element.manufacturer} ${element.model} ${element.price}`);
//         }
//     }
//     return cars;
// }
//
// console.log(getWildCars(data));

//Zad 2

// const getCars = (cars) => cars
//     .map((cars) => `${cars.manufacturer} ${cars.model} - ${cars.power}HP`);
//
// console.log(getCars(data));

//Zad 3

// const electricCars = (cars) => {
//     const brum = [];
//
//     for (const car of cars) {
//         if (car.engine === 'electric' && car.price < 200000){
//             brum.push(`${car.manufacturer} ${car.model} ${car.price}`)
//         }
//     }
//     return brum;
// }
//
// console.log(electricCars(data));

