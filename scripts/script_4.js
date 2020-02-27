const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log("Les entrepreneurs qui sont nés dans les années 70 :")
entrepreneurs.forEach(element => {
    if (element.year >= 1970 && element.year <= 1979) {
        console.log(`${element.first} ${element.last} né en ${element.year}`);
    }
})

console.log("Les prénoms et noms de tous les entrepreneurs :")
let array = [];
entrepreneurs.forEach(element => {
    array.push(`${element.first} ${element.last}`);
})
console.log(array);

console.log("L'âge qu'aurait chaque inventeur aujourd'hui :")
entrepreneurs.forEach(element => {
    if (element.year >= 1970 && element.year <= 1979) {
        console.log(`${element.first} ${element.last} né en ${element.year} aurait ${2020 - element.year} ans aujourd'hui !`);
    }
})

console.log("La liste des entrepreneurs triés par ordre alphabétique : ")
console.log(entrepreneurs.sort((a,b) => (a.last > b.last) ? 1 : ((b.last > a.last) ? -1 : 0)));