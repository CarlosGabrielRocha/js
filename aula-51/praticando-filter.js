const library = [
    { type: 'book', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction', year: 1925, rating: 4.7 },
    { type: 'movie', title: 'Inception', director: 'Christopher Nolan', genre: 'Sci-Fi', year: 2010, rating: 4.8 },
    { type: 'music', title: 'Bohemian Rhapsody', artist: 'Queen', genre: 'Rock', year: 1975, rating: 4.9 },
    { type: 'book', title: '1984', author: 'George Orwell', genre: 'Dystopian', year: 1949, rating: 4.6 },
    { type: 'movie', title: 'The Matrix', director: 'The Wachowskis', genre: 'Sci-Fi', year: 1999, rating: 4.7 },
    { type: 'music', title: 'Thriller', artist: 'Michael Jackson', genre: 'Pop', year: 1982, rating: 4.8 },
]

function filterLibrary(library, criteria) {
    const filtrado = library.filter(function(elemento) {
        return elemento.type === criteria.type &&
               elemento.genre === criteria.genre &&
               elemento.year >= criteria.minYear &&
               elemento.rating >= criteria.minRating
    })
    return filtrado
}

const criteria = {
    type: 'movie',
    genre: 'Sci-Fi',
    minYear: 2000,
    minRating: 4.5
}

console.log(filterLibrary(library, criteria))

