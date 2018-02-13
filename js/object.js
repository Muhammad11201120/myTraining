var movies = [{
        title: 'Breave Hart',
        rating: 5,
        hasWatched: true
    },
    {
        title: 'Titanic',
        rating: 5,
        hasWatched: true
    },
    {
        title: 'The Ring',
        rating: 3.5,
        hasWatched: false
    },
    {
        title: 'Gladiatoer',
        rating: 5,
        hasWatched: true
    }
];
//function to build the string which be printed
function buildString(movie) {
    var result = null;
    if (movie.hasWatched) {
        result = 'You Have Watched ' + movies[i].title + ' - ' + movies[i].rating + ' stars';
    } else {
        result = 'You havn\'t seen ' + movies[i].title + ' - ' + movies[i].rating + ' stars';
    }
    return result;
}

//looping inside the array above
for (var i = 0; i < movies.length; i++) {
    console.log(buildString(movies[i]));
}