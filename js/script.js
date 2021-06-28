"use strict";
let numberOfFilms; 

function start() {
    numberOfFilms = +prompt("How many films you have already watched", ""); 
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many films you have already watched", ""); 
    }
}

start();


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


// for (let i = 0; i < 2; i++) {
//     let a = prompt("What is the last film you watched?", ""),
//         b = prompt("Please rate it in numbers", "");
//         if (a != "" & b != "" & a != null & b != null & a.length < 50) {
//             personalMovieDB.movies[a] = b; 
//            } else {
//                console.log("Error");
//                i--;
//            }
// }
function rememberMyFilms() {
    let i = 0;
    while (i < 2) {
        let a = prompt("What is the last film you watched?", ""),
            b = prompt("Please rate it in numbers", "");
            i++;
        if (a != "" & b != "" & a != null & b != null & a.length < 50) {
            personalMovieDB.movies[a] = b; 
        } else {
            console.log("Error");
            i--;
        }
    }
}
// rememberMyFilms();

function detectPersonalLevel () {
    if (personalMovieDB.count < 10 ) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
    }  else {
            console.log("Произошла ошибка");
            
    }
}

// detectPersonalLevel();

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres () {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Your favourite genre number ${i+1}`);
    }
}
writeYourGenres();