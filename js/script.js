"use strict";
let numberOfFilms = +prompt("How many films you have already watched", "");
console.log(numberOfFilms);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    let a = prompt("What is the last film you watched?", ""),
        b = prompt("Please rate it in numbers", "");
        if (a != "" & b != "" & a != null & b != null & a.length < 50) {
            personalMovieDB.movies[a] = b; 
           } else {
               console.log("Error");
               i--;
           }
}

if (personalMovieDB.count < 10 ) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    }
    else {
            console.log("Произошла ошибка");
        
}
console.log(personalMovieDB);
/* Задание на урок:



2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/



// Код возьмите из предыдущего домашнего задания