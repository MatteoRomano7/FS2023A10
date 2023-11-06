/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

function concatAndUppercase(str1, str2) {
  const firstPart = str1.slice(0, 2);
  const secondPart = str2.slice(-3);

  const concatenatedString = firstPart + secondPart;

  const uppercaseString = concatenatedString.toUpperCase();

  console.log(uppercaseString);
}
concatAndUppercase("Welcome", "Jungle");

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/

function RandomArray() {
  const randomArray = [];

  for (let i = 0; i < 10; i++) {
    const randomValue = Math.floor(Math.random() * 101);
    randomArray.push(randomValue);
  }

  return randomArray;
}
const randomNumbers = RandomArray();
console.log(randomNumbers);

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/


function prendiPari(NumeriPari) {
  return NumeriPari % 2 === 0;}
  const arrayNumerico = [32, 33, 34, 35, 36, 37, 38, 39, 40];
  const result = arrayNumerico.filter(prendiPari);
  console.log(result)

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

function sommaArray(array) {
  let somma = 0;

  array.forEach(function(elemento) {
    somma += elemento;
  });

  return somma;
}

let array = [41,42, 43, 44, 45];
let risultato = sommaArray(array);
console.log(risultato);


/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

function sommaReduce(add){
  const somma = add.reduce((acc, currentValue) => acc + currentValue, 0);
  return somma;
}

const listaNumerica = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const addizione2 = sommaReduce(listaNumerica);
console.log(addizione2);

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

function add15(gruppo, n) {
  const finale = gruppo.map(numero => numero + n);
  return finale;
}

const numeri = [1, 2, 3, 4, 5];
const n = 15;
const finale = add15(numeri, n);
console.log(finale);




/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

function lunghezzeStringhe(arrayDiStringhe) {
  const lungStri = arrayDiStringhe.map(function(stringa) {
    return stringa.length;
  });

  return lungStri;
}
const arrayDiStringhe = ["Pull", "Me", "Out", "Of", "This"];
const lungStri = lunghezzeStringhe(arrayDiStringhe);
console.log(lungStri);


/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
function oddNumbers() {
  const dispari = [];

  for (let i = 1; i <= 99; i++) {
    if (i % 2 !== 0) {
      dispari.push(i);
    }
  }

  return dispari;
}
const numeriDispari = oddNumbers();
console.log(numeriDispari);



/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

let filmPiuVecchio = movies[0];

movies.forEach(function(film) {
  const annoFilmCorrente = parseInt(film.Year);
  const annoFilmPiuVecchio = parseInt(filmPiuVecchio.Year);

  if (annoFilmCorrente < annoFilmPiuVecchio) {
    filmPiuVecchio = film; // Assegno il film corrente come il più vecchio
  }
});

console.log('Il film più vecchio è:');
console.log(filmPiuVecchio);

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

function numeroDiFilm(FilmNumbers) {
  return FilmNumbers.length;
}
;
const numeroFilm = numeroDiFilm(movies);
console.log(`Il numero di film nell'array è: ${numeroFilm}`);




/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

function getTitle(arrayDiFilm) {
  const titoli = arrayDiFilm.map(function(film) {
    return film.Title;
  });

  return titoli;
}
const titoliDeiFilm = getTitle(movies);
console.log(titoliDeiFilm);

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/function Millennial(arrayDiFilm) {
  const dataCorrente = new Date();
  const annoCorrente = dataCorrente.getFullYear();

  const thisMillennium = arrayDiFilm.filter(function(film) {
    const annoFilm = parseInt(film.Year);
    return annoFilm >= annoCorrente - 23 && annoFilm <= annoCorrente;
  });

  return thisMillennium;
}

const thisMillennium = Millennial(movies);
console.log(thisMillennium);

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

function sommaAnniFilm(arrayDiFilm) {
  const sommaDegliAnni = arrayDiFilm.reduce(function(acc, film) {
    const annoFilm = parseInt(film.Year);
    return acc + annoFilm;
  }, 0);

  return sommaDegliAnni;
};

const sommaDegliAnni = sommaAnniFilm(movies);

console.log('La somma di tutti gli anni di produzione dei film è:', sommaDegliAnni);


/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
