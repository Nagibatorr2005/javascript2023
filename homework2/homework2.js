/*TASK #1
- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль*/
// let a = [1, 'a', 2, 'b', 3, 'c', 5, 'd', 6, 'e']
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);
// console.log(a[3]);
// console.log(a[4]);
// console.log(a[5]);
// console.log(a[6]);
// console.log(a[7]);
// console.log(a[8]);
// console.log(a[9]);

/*
TASK #2
- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.*/
/*
let book1 = {
    title: "Harry Potter",
    pageCount: 800,
    genre: "fantasy"
}
let book2 = {
    title: "Atlas shrugged",
    pageCount: 1200,
    genre: "novel"
}
let book3 = {
    title: "Tom Sauyer",
    pageCount: 300,
    genre: "tale"
}*/

/*
TASK #3
Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
    Поле "автори" - являється  масивом. Кожен автор має поля name та age.*/
/*
let book1 = {
    title: "Harry Potter",
    pageCount: 800,
    genre: "fantasy",
    author: ["Joan Rouling", 45]
}
let book2 = {
    title: "Atlas shrugged",
    pageCount: 1200,
    genre: "novel",
    author: ["Ayn Rend", 75]
}
let book3 = {
    title: "Tom Sawyer",
    pageCount: 300,
    genre: "tale",
    author: ["Mark Twen", 65]
}*/

/*TASK #4
Створити масив з 10 об'єктами які описують сутніть "користувач". ' +
'Поля: name, username,password. Вивести в консоль пароль кожного користувача*/
/*
let ivan = {
    name: "Ivan",
    username: "Ivan Ivanov",
    password: "12345678",
    status: "unemployed",
    age: 32,
    city: "Lviv",
    street:"Bakery",
    height: 179,
    hair: "brown",
    education: "no"
}
console.log(ivan["name"]);
console.log(ivan["username"]);
console.log(ivan["password"]);*/

/*
TASK #5
- Є змінна х, якій ви надаєте довільне числове значення.
    Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3*/
/*
let x = 5;
if(x = true){
    console.log("Вірно")
}else{
    console.log("Невірно")
}*/

/*TASK #6
- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).*/
/*
let time = 355
if (time < 0 || time > 61){
    console.log("Помилка")
} else if (time => 0 && time <= 15){
    console.log("Перша чверть")
}else if (time => 16 && time <= 30){
    console.log("Друга чверть")
}else if (time => 31 && time <= 45){
    console.log("Третя чверть")
}else if (time => 46 && time <= 60){
    console.log("Четверта чверть")
};
*/

/*
TASK #6
У змінній day дано якесь число від 1 до 31.
Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю)*/
/*
let day = +prompt("Введіть сьогоднішнє число");
if (day <= 0 || day > 31){
    console.log("Помилка")
}else if(day > 0 && day <=10){
    console.log("Перша декада")
}else if(day > 10 && day <=20){
    console.log("Друга декада")
}else if(day > 20 && day <= 31){
    console.log("Третя декада")
};*/

/*
TASK #7
- Скласти розклад на тиждень за домопоги switch.
    Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
    (можна замість плану на день, назву дня англійською).*/
/*
let day = prompt("Введіть сьогоднішній день")
switch (day){
    case "понеділок":
        console.log("Monday");
        break;
    case "вівторок":
        console.log("Tuesday");
        break;
    case "середа":
        console.log("Wednesday");
        break;
    case "четвер":
        console.log("Thursday");
        break;
    case "п'ятниця":
        console.log("Friday");
        break;
    case "субота":
        console.log("Saturday");
        break;
    case "неділя":
        console.log("Sunday");
        break;
}*/

/*
TASK #8
- Користувач вводить або має два числа.
    Потрібно знайти та вивести максимальне число з тих двох .
    Також потрібно врахувати коли введені рівні числа.*/
/*
let a = +prompt("Введіть перше число")
let b = +prompt("Введіть друге число")

if(a>b){
    console.log("Перше число більше")
}else if(a<b){
    console.log("Друге число більше")
}else{
    console.log("Числа рівні")
};*/

/*
TASK #9
- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
    за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні,
    тобто приводиться до false)*/

/*TASK #10
- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
За допомоги іф перевірити кожен його елемент на тривалість навчання.
У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".*/
/*let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if(coursesAndDurationArray[0].monthDuration > 5 ){
    console.log("Супер")};
if(coursesAndDurationArray[1].monthDuration > 5 ){
    console.log("Супер")};
if(coursesAndDurationArray[2].monthDuration > 5 ){
    console.log("Супер")};
if(coursesAndDurationArray[3].monthDuration > 5 ){
    console.log("Супер")};
if(coursesAndDurationArray[4].monthDuration > 5 ){
    console.log("Супер")};
if(coursesAndDurationArray[5].monthDuration > 5 ){
    console.log("Супер")};*/



