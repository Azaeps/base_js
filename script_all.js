function bonjour() {
	console.log("Bonjour monde");
}

function salut() {
	nom = prompt("Quel est ton nom ?");
	console.log(`Bonjour, ${nom} !`);
}

function fact() {
	x = prompt("De quel nombre veux-tu calculer la factorielle ?");
	tmp = x - 1;
	while (tmp > 0) {
		x *= tmp;
		tmp--;
	}
	console.log(`Le résultat est : ${x}`);
}

function mario() {
	x = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
	tmp = 1;
	console.log("Voici votre pyramide !");
	while (tmp <= x) {
		console.log(" ".repeat(x - tmp) + "#".repeat(tmp));
		tmp++;
	}
}

function startup() {
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
}

function library() {
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
}

function life(str) {
	const acide_amine =[  
		{nom: 'Sérine', cordon: ["UCU","UCC","UCA","UCG","AGU","AGC"]},
		{nom: 'Proline', cordon: ["CCU","CCC","CCA","CCG"]},
		{nom: 'Leucine', cordon: ["UUA","UUG"]},
		{nom: 'Phénylalanine', cordon: ["UU","UUC"]},
		{nom: 'Arginine', cordon: ["CGU","CGC","CGA","CGG","AGA","AGG"]},
		{nom: 'Tyrosine', cordon: ["UAU","UAC"]}
	]

	let tmp = ""
	let array = []
	let x = 0
	let y = 0
	let z = 0
	while (str[x++]) {
		while (y++ <= 2) {
			tmp[y] = str[x];
		}
		
	}
}

bonjour();
salut();
fact();
mario();
startup();
library();