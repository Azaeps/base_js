const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

x = 0;
books.forEach(elmnt => {
    if(elmnt.rented <= 0) {
        x++;
    }
});
if (x === 0) {
    console.log("Tous les livres ont été empruntés au moins une fois !")
}
else {
    console.log(x + " livres n'ont jamais été empruntés !")
}

let sort_books_by_rent = books.sort((a, b) => a.rented - b.rented);
let nbr_books = sort_books_by_rent.length - 1
console.log("Le livre ayant été le plus emprunté est : " + sort_books_by_rent[nbr_books].title);

console.log("Le livre ayant été le moins emprunté est : " + sort_books_by_rent[0].title);

console.log("Le livre portant l'id 873495 est : " + books.find(book => book.id == 873495).title);

books.forEach(elmnt => {
    if(elmnt.id == 133712) {
        books.pop(elmnt)
    }
});

console.log("Voici la liste des livres triés par ordre alphabétique : ");
console.log(books.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)));