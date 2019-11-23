/* eslint no-restricted-globals: 'off' */
//DONE WITH THE PROJECT!!!
// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {

    let copy = [...array];

    copy.sort((a, b) => {
        if (a.year > b.year) return 1;
        if (a.year < b.year) return -1;
        if (a.year == b.year) {
            if (a.title > b.title) return 1;
            if (a.title < b.title) return -1;
        }

    });
    return copy;
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(array) {
    let dramaMovies = array.filter(movie => movie.genre.includes("Drama"))
    let stevenDramaMovies = dramaMovies.filter(steven => steven.director.includes("Steven Spielberg"))
    return stevenDramaMovies.length
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {

    let movieByTitle = array.map(movie => movie.title)
    let topTwenty = movieByTitle.sort((a, b) => (a > b) ? 1 : -1)
       topTwenty.length > 20 ? topTwenty.splice(20) : topTwenty;

    return topTwenty
 }

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array) {

    if (array.length == 0) {
        return 0
    }
    let totalRates = array.reduce((a, c) => {

        return a + (c.rate ? c.rate : 0);
    }, 0);
    let avgRate = (totalRates / array.length).toFixed(2);

    return Number(avgRate);

}


// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array) {
    let dramaMovies = array.filter(function(movie) {
       if (movie.genre.indexOf('Drama') !== -1) {
           return true;
       }
       return false
    });
   
    if (dramaMovies.length == 0 ){
        return 0;
    }
   
    return (ratesAverage(dramaMovies));
   
   }
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {

  return JSON.parse(JSON.stringify(movies)).map((movie) => {
    const hours = movie.duration.match(/\d+(?=h)/g);
    const minutes = movie.duration.match(/\d+(?=min)/g);
    if (hours) {
      movie.duration = (Number(hours) * 60 + Number(minutes));
      return movie;
    }
    movie.duration = Number(minutes);
    return movie;
  })
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
