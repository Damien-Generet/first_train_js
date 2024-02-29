const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15},
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38},
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];
console.log("Est ce que tout à déjà été loué 1 x ? Une foué")
  var isrented = []
  books.forEach( rent => {
    if(rent.rented > 0)
    isrented.push(rent.rented)
  });

  if(isrented.length === books.length){
    console.log("TOUT ES LOUE")
  } else {
    console.log("Tout n'est pas loué !")
  }
  console.log(books.every(book => book.rented > 0));

///////////////////////////////////////////////////////////////////

console.log("Quel est le livre le plus lué ?")
let maxValue = 0;
let rent = Object.values(books);

rent.map((book) => {
    var numberRent = book.rented;
    maxValue = Math.max(maxValue, numberRent);  
});
books.forEach(book => {
    if(book.rented === maxValue)
    console.log(book)
})

console.log(books.slice().sort((a, b) => b.rented - a.rented)[0].title);

console.log("Et le mons loué alors ?!");
console.log(books.slice().sort((a, b) => a.rented - b.rented)[0].title);

console.log("Le livre avec l'id : 873495")
console.log(books.find(book => book.id === 873495).title);


console.log("Voici tout les livres avec le 133712 supprimé !")
let index = books.findIndex(book => book.id === 133712);
books.splice(index, 1);
console.log(books);

console.log("Voici les livres restant trié par ordre alphabétique !")

console.log(books.slice().sort((a, b) => a.title.localeCompare(b.title)));