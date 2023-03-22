const data = [
    {
        name: "pawel",
        age: 38,
        city: "krakow",
        hobbies: ["js", "python", "drugs"]
    },
    {
        name: "jakub",
        age: 20,
        city: "szczecin",
        hobbies: ["skateboard", "webDev", "gaming"]
    },
    {
        name: "Norbert",
        age: 46,
        city: "Kraków",
        hobbies: ["motoryzacja", "architektura", "komputery"]
    },
    {
        name: "adam",
        age: 31,
        city: "warszawa",
        hobbies: ["wow", "super", "fajne"]
    },
    {
        name: "paulina",
        age: 28,
        city: "dabrowa gornicza",
        hobbies: ['cycling', "volleyball", "movies"]
    },
    {
        name: "marcin",
        age: 37,
        city: "jesionka",
        hobbies: ["tennis", "skiing", "cooking"]
    },
    {
        name: "Jakub",
        age: 24,
        city: "Głowno",
        hobbies: ["football", "games", "music"]
    },
    {
        name: "kamil",
        age: 26,
        city: "warsaw",
        hobbies: ["dancing", "cycling", "reading"]
    },
    {
        name: "kasia",
        age: 34,
        city: "warszawa",
        hobbies: ["konie", "podroze", "old-timery"]
    },
    {
        name: "pawel",
        age: 41,
        city: "zabrze",
        hobbies: ["wfb", "running", "js"]
    }
];

// oblicz średnią wieku

// const avgAge = (persons) => {
//     let sumAge = 0;
//
//     for (const person of persons) {
//         sumAge += + person.age;
//     }
//
//     return sumAge / persons.length;
// }

// const avgAge = (persons) => {
//     const ages = persons.map((person) => person.age);
//     return ages.reduce((acc, ce) => acc + ce) / persons.length
// }

// PROFESJONALNE PODEJŚCE

// const avgAge = (persons) => persons.reduce((acc, ce) => acc + ce.age, 0) / persons.length;

// console.log(avgAge(data));

// średnia wieku dla ludzi, którzy mają imię powyżej 5 znaków

// const avgAge2 = (people) => {
//     let sumAge = 0;
//     let counter = 0;
//
//     for (const person of people) {
//         if (person.name.length > 5) {
//             sumAge += person.age;
//             counter++;
//         }
//     }
//     return sumAge / counter;
// }

// const avgAge2 = (people) => {
//     const filteredPeople = people.filter((person) => person.name.length > 5);
//     const mappedPeople = filteredPeople.map((person) => person.age);
//
//     return mappedPeople.reduce((acc, ce) => acc + ce) / mappedPeople.length;
// }

// console.log(avgAge2(data));

// Tablica wszystkich imion od dużej litery

// const getAllNames = (elements) => {
//     const names = [];
//
//     for (const person of elements){
//         names.push(person.name[0].toUpperCase() + person.name.slice(1));
//     }
//     return names;
// }

// function capitalize(text) {
//     return text[0].toUpperCase() + text.slice(1);
// }
// const getAllNames = (elements) => elements.map((person) => capitalize(person.name));


// console.log(getAllNames(data));

// Sprawdź czy wszyscy mają 3 hobby

// const checkHobbies = (elements) => {
//     for (const element of elements) {
//         if (element.hobbies.length !== 3){
//             return false;
//         }
//     }
//     return true;
// }

// const checkHobbies = (elements) => elements.every((element) => element.hobbies.length === 3);


// const checkHobbies = (elements) => !elements.some((element) => element.hobbies.length !== 3);

// console.log(checkHobbies(data));


// Zwróć tablicę wszystkich hobby

// const getAllHobbies = (elements) => {
//     const hobbies = [];
//
//     for (const element of elements){
//         for (const hobby of element.hobbies){
//             hobbies.push(hobby);
//         }
//     }
//     return hobbies;
// }

// const getAllHobbies = (elements) => elements
//     .map((element) => element.hobbies)
//     .flat();

// const getAllHobbies = (elements) => elements
//     .flatMap((element) => element.hobbies);
//
// console.log(getAllHobbies(data));


// const getNameWhoLoveJS = (items) => {
//     // pusta tablica do trzymania imion
//     const names = [];
//
//     // iteracja po tablicy, aby można było przetwarzać każdy element z osobna
//     for (const item of items){
//         if(item.hobbies.map((hobby) => hobby.toLowerCase()).includes("js")){
//             names.push(item.name);
//         }
//     }
//     return names;
//     // sprawdzamy, czy osoba ma js w hobbies -> includes
//     // dodajemy imię do tablicy imion
//
//     // zwracamy tablice imion
// }

// console.log(getNameWhoLoveJS(data));

// sformatuj dane, tak, aby wyświetlić tablicie imie - miasto - wiek
// 'pawel - krakow - 38'

// function formatData(persons){
//     // zmienna na tablice, w której będziemy trzymać dane
//     const tab = [];
//
//     for (const person of persons) {
//         tab.push(`${person.name} - ${person.city} - ${person.age}`);
//     }
//
//     return tab;

    // przeiteruj po wszystkich elementach
    // do tablicy z danymi, włóż tekst (push) wygenerowany przez template literal string

    // zwróć tablicę

// }

// const formatData = (persons) => persons
//     .map((person) => `${person.name} - ${person.city} - ${person.age}`)
//
// console.log(formatData(data));

// function capitalize(text) {
//     return text[0].toUpperCase() + text.slice(1);
// }
//
// const list = data
//     .map((item, id) => `${id}. ${capitalize(item.name)}, ${capitalize(item.city)}`);


// policz, ile jest niepowtarzalnych hobby

function countUniqueHobby(elements) {
    // tablica na unique hobby
    const uniqueHobbies = [];

    // loop po wszystkich obiektach elements
    // 2 loop po każdym hobby z osobna
    for (const element of elements){
        for (const hobby of element.hobbies){
//     sprawdź, czy już takie jest (uwzględnij wielkość liter)
            if (!uniqueHobbies.includes(hobby.toLowerCase())){
//     jeżeli nie ma to dodaj
                uniqueHobbies.push(hobby.toLowerCase());
            }
        }
    }
//return ilość unikalnych hobby
    return uniqueHobbies;
}

// const countUniqueHobby = (elements) => new Set(
//     elements.flatMap((element) => element.hobbies)
// ).size
//
console.log(countUniqueHobby(data));

// function getLuckyPersons(items) {
//     //tablica na imiona
//     const luckyPersons = [];
//
//     // for (item of items) {
//     //     if(item[i] % 3 == 0) {
//     //         names.push
//     //     }
//     // }
//
//     for (let i = 0; i < items.length; i++){
//         if (i % 3 === 0){
//             luckyPersons.push(items[i].name);
//         }
//     }
//
//     return luckyPersons.join(', ');
//     // loop po wszystkich elementach używając indeksu
//     // sprawdzenie czy indeks jest podzielny przez 3, modulo
//     // dodac imie, jezeli jest podzielny index przez 3
//
//     // return imiona jako tekst, oddzielone przecinkami
// }

// const getLuckyPersons = (items) => items
//     .filter((item, id) => id % 3 === 0)
//     .map((item) => item.name)
//     .join(', ');
//
// console.log(getLuckyPersons(data));