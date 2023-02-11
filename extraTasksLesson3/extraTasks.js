/*PART 1*/
/*
TASK #1
--створити масив з:
    - з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу
- та вивести його в консоль

-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль


let arr =[1, 2, 3, 4, 5, 'a', 'b', 'c', 'd', 'e', true, false, true, false, true ]
console.log(arr)*/
/*TASK #2
- є масив [2,17,13,6,22,31,45,66,100,-18] :
1. перебрати його циклом while
    2. перебрати його циклом for
    3. перебрати циклом while та вивести  числа тільки з непарним індексом
4. перебрати циклом for та вивести  числа тільки з непарним індексом
5. перебрати циклом while та вивести  числа тільки парні  значення
6. перебрати циклом for та вивести  числа тільки парні  значення
7. замінити кожне число кратне 3 на слово "okten"
8. вивести масив в зворотньому порядку.
9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

#1
let arr = [2,17,13,6,22,31,45,66,100,-18];
let i = 0;
while (i<arr.length){
    console.log(arr[i])
    i++
}

#2
let arr = [2,17,13,6,22,31,45,66,100,-18];
for(let i=0; i<arr.length; i++){
    console.log(arr[i])
}

#3
let arr = [2,17,13,6,22,31,45,66,100,-18];
let i = 1;
while (i<arr.length){
    console.log(arr[i])
    i +=2
}

#4
let arr = [2,17,13,6,22,31,45,66,100,-18];
for(let i=2; i<arr.length; i+=2){
    console.log(arr[i]);
}

#5
let arr = [2,17,13,6,22,31,45,66,100,-18];
let i = 0;
while (i<arr.length){
    if(arr[i] % 2 == 0){
    console.log(arr[i])}
    i++
}

#6
let arr = [2,17,13,6,22,31,45,66,100,-18];
for(let i=0; i<arr.length; i++){
    if(arr[i] % 2 == 0){
        console.log(arr[i]);}
}

#7
let arr = [2,17,13,6,22,31,45,66,100,-18];
for(let i=0; i<arr.length; i++){
    if(arr[i] % 3 == 0){
        arr[i] = 'okten';
        console.log(arr[i]);
    }else {
        console.log(arr[i]);
    }
}

#8
let arr = [2,17,13,6,22,31,45,66,100,-18];
let i = arr.length-1;
while (i>=0){
    console.log(arr[i])
    i--
}*/
/*
TASK #3

Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let i = 0; i<arr.length; i++){
    console.log(arr[i]);
}

- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arr = ['1',' 2', '3', '4', '5', '6', '7', '8', '9', '10'];
for(let i = 0; i<arr.length; i++){
    console.log(arr[i]);
}

- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arr = [true, 1, true, false, '2', false, true, 'ddv', true, false,];
for(let i = 0; i<arr.length; i++){
    console.log(arr[i]);
}

- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let arr = [true, 1, true, false, '2', false, true, 'ddv', true, false,];
for(let i = 0; i<arr.length; i++){
    if(typeof arr[i] == "boolean"){
        console.log(arr[i]);
    }
}

- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let arr = [true, 1, true, 5, '2', false, true, 'ddv', true, 11,];
for(let i = 0; i<arr.length; i++){
    if(typeof arr[i] == "number"){
        console.log(arr[i]);
    }
}

- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let arr = [true, 1, true, 'hello', '2', false, true, 'ddv', true, 'city',];
for(let i = 0; i<arr.length; i++){
    if(typeof arr[i] == "string"){
        console.log(arr[i]);
    }
}
*/
/*TASK 4
- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
    Вивести в консоль всі його елементи в циклі.
- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write*/
/*
TASK #5
стоврити масив книжок (назва, кількість сторінок, автори , жанри).
- знайти книжку/ки з найбільшою кількістю жанрів
- знайти книжку/ки з найдовшою назвою
- знайти книжку/ки які писали 2 автори
- знайти книжку/ки які писав 1 автор

let arr = [
    {
        title: 'Harry Potter',
        pages: 800,
        author: 'Joan Rouling',
        ganre: 'fantasy'
    },
    {
        title: 'Kolobok',
        pages: 30,
        author: ['Nitshe', 'Socrat'],
        ganre: 'fantasy'
    },
    {
        title: 'Tom Sawyer',
        pages: 500,
        author: 'Mark Twen',
        ganre: ['tail', 'novel']
    }
]
-знайти наібльшу книжку.
let t = 0
for (let book of arr){
   if(book.pages>t) {
       t = book.pages;
   }
}
console.log(t)
*/

/*PART 2*/
/*За допомогою циклу вивести всю інформацію про користувачів використовуючи шаблон Template 1.1
за допомоги стилів, побудувати сітку по 2 об'єкта в лінію

let usersList = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496'
            }
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets'
        }
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
                lat: '-43.9509',
                lng: '-34.4618'
            }
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains'
        }
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        address: {
            street: 'Douglas Extension',
            suite: 'Suite 847',
            city: 'McKenziehaven',
            zipcode: '59590-4157',
            geo: {
                lat: '-68.6102',
                lng: '-47.0653'
            }
        },
        phone: '1-463-123-4447',
        website: 'ramiro.info',
        company: {
            name: 'Romaguera-Jacobson',
            catchPhrase: 'Face to face bifurcated interface',
            bs: 'e-enable strategic applications'
        }
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        address: {
            street: 'Hoeger Mall',
            suite: 'Apt. 692',
            city: 'South Elvis',
            zipcode: '53919-4257',
            geo: {
                lat: '29.4572',
                lng: '-164.2990'
            }
        },
        phone: '493-170-9623 x156',
        website: 'kale.biz',
        company: {
            name: 'Robel-Corkery',
            catchPhrase: 'Multi-tiered zero tolerance productivity',
            bs: 'transition cutting-edge web services'
        }
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        address: {
            street: 'Skiles Walks',
            suite: 'Suite 351',
            city: 'Roscoeview',
            zipcode: '33263',
            geo: {
                lat: '-31.8129',
                lng: '62.5342'
            }
        },
        phone: '(254)954-1289',
        website: 'demarco.info',
        company: {
            name: 'Keebler LLC',
            catchPhrase: 'User-centric fault-tolerant solution',
            bs: 'revolutionize end-to-end systems'
        }
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        address: {
            street: 'Norberto Crossing',
            suite: 'Apt. 950',
            city: 'South Christy',
            zipcode: '23505-1337',
            geo: {
                lat: '-71.4197',
                lng: '71.7478'
            }
        },
        phone: '1-477-935-8478 x6430',
        website: 'ola.org',
        company: {
            name: 'Considine-Lockman',
            catchPhrase: 'Synchronised bottom-line interface',
            bs: 'e-enable innovative applications'
        }
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        address: {
            street: 'Rex Trail',
            suite: 'Suite 280',
            city: 'Howemouth',
            zipcode: '58804-1099',
            geo: {
                lat: '24.8918',
                lng: '21.8984'
            }
        },
        phone: '210.067.6132',
        website: 'elvis.io',
        company: {
            name: 'Johns Group',
            catchPhrase: 'Configurable multimedia task-force',
            bs: 'generate enterprise e-tailers'
        }
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        address: {
            street: 'Ellsworth Summit',
            suite: 'Suite 729',
            city: 'Aliyaview',
            zipcode: '45169',
            geo: {
                lat: '-14.3990',
                lng: '-120.7677'
            }
        },
        phone: '586.493.6943 x140',
        website: 'jacynthe.com',
        company: {
            name: 'Abernathy Group',
            catchPhrase: 'Implemented secondary concept',
            bs: 'e-enable extensible e-tailers'
        }
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        address: {
            street: 'Dayna Park',
            suite: 'Suite 449',
            city: 'Bartholomebury',
            zipcode: '76495-3109',
            geo: {
                lat: '24.6463',
                lng: '-168.8889'
            }
        },
        phone: '(775)976-6794 x41206',
        website: 'conrad.com',
        company: {
            name: 'Yost and Sons',
            catchPhrase: 'Switchable contextually-based project',
            bs: 'aggregate real-time technologies'
        }
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        address: {
            street: 'Kattie Turnpike',
            suite: 'Suite 198',
            city: 'Lebsackbury',
            zipcode: '31428-2261',
            geo: {
                lat: '-38.2386',
                lng: '57.2232'
            }
        },
        phone: '024-648-3804',
        website: 'ambrose.net',
        company: {
            name: 'Hoeger LLC',
            catchPhrase: 'Centralized empowering task-force',
            bs: 'target end-to-end models'
        }
    }
];

for (const user of usersList) {
    document.write(`<div class="users-box">
                        <div class="user-block">
                            <h2>${user.id} - ${user.name} - ${user.username}</h2>
                            <h3>${user.email} -${user.phone}</h3>
                            <div class="address-block">
                                <p>City - ${user.address.city}</p>
                                <p>Street - ${user.address.street}</p>
                                <p>Suite - ${user.address.suite}</p>
                                <p>Zip code - ${user.address.zipcode}</p>
                             </div>
                        </div>     
                    </div>`)
}*/

/*PART 3*/
/*TASK #1
1. Створити пустий масив та :

a. заповнити його 50 парними числами за допомоги циклу.
let arr = [];
let i = 0;
let t = 0;
while(arr.length<50){
    t++
    if (t%2 ==0 ){
        arr[i] = t
        i++
    }
}
console.log(arr)

b. заповнити його 50 непарними числами за допомоги циклу.
let arrOdd = [];
let i = 0;
let t = 0;
while(arrOdd.length<50){
    t++
    if (t%2 ==1 || t == 1){
        arrOdd[i] = t
        i++
    }
}
console.log(arrOdd)

c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
let arr = [];
let i = 0;
while(arr.length<20){
    arr[i] = Math.ceil(Math.random() * 100);
    i++
}
console.log(arr)

d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)*!/let arr = [];
let i = 0;
while(arr.length<20){
    let number = Math.ceil(Math.random() * 1000);
    if (number > 7 && number < 733){
        arr[i] = number
    }
    i++
}
console.log(arr)*/

/*
TASK #2
2. Вивести за допомогою console.log кожен третій елемен
let cars = ["Saab", "Volvo", "BMW", "AUDI", "RENAUT", "HONDA", "SHKODA", "FORD", "DODGE", "CHEVY", "SCANIA", "KIA", "JEEP"];
let i = 0
for (let car of cars){
    if(i%3==0){
        console.log(cars[i])
    }
    i++
}
*/

/*
TASK #3
Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
*!/
let cars = ["Saab", "Volvo", "BMW", "AUDI", "RENAUT", "HONDA", "SHKODA", "FORD", "DODGE", "CHEVY", "SCANIA", "KIA", "JEEP"];
let i = 0
for (let car of cars){
    if(i%3==0 && i%2==0){
        console.log(cars[i])
    }
    i++
}
*/

/*
TASK #4
4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let cars = ["Saab", "Volvo", "BMW", "AUDI", "RENAUT", "HONDA", "SHKODA", "FORD", "DODGE", "CHEVY", "SCANIA", "KIA", "JEEP"];
let newCars = [];
let i = 0;
let t = 0;
for (let car of cars){
    if(i%3==0 && i%2==0){
        console.log(cars[i])
        newCars[t] = cars[i];
        t++
    }
    i++
}
console.log(newCars);*/

/*
TASK #5
5. Вивести кожен елемент масиву, сусід справа якого є парним
EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
let arr = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
let i = 0;
for(let item of arr){
    if(arr[i]%2 == 0 ){
        console.log(arr[i-1]);
    };
    i++
};*/

/*
TASK #6
6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.*!/
let price = [100,250,50,168,120,345,188];
let i = 0;
let t = 0;
for (let product of price){
    t = t+price[i]
    i++
}
console.log(Math.round(t/price.length))*/

/*TASK #7
7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let arr = [];
let masive = [];
let i = 0;
while(i<10){
    arr[i] = Math.round(Math.random()*100);
    i++;
}
console.log(arr);
let t = 0;
for(let item of arr){
    masive[t] = arr[t] * 5;
   t++;
}
console.log(masive);*/

/*TASK #8
8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let arr = [47, "Volvo", 1, "AUDI", 2, "HONDA", "SHKODA", true, false, "CHEVY", 45, "KIA", 66];
let massive = [];
let i = 0;
for (let item of arr){
    if(typeof arr[i] == "number"){
        massive.push(arr[i]);

    }
    i++;
}
console.log(massive);*/

/*
TASK #9
- Дано 2 масиви з рівною кількістю об'єктів.
Масиви:
    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
    Записати цей об'єкт в новий масив
Example:
    let usersWithCities = [
        {
            id: 1, // <===
            name: 'vasya',
            age: 31,
            status: false,
            address: {
                user_id: 1, // <===
                country: 'Ukraine',
                city: 'Ternopil'
            }
        },
        // TO BE CONTINUED .....
    ]

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

let usersWithCities = [];
let i = 0;
for (let user of usersWithId){
    usersWithCities[i] = usersWithId[i];
    i++;
}
let t = 0;
for (let item of citiesWithId ){
    usersWithCities.address = citiesWithId[t];
    t++;
}
console.log(usersWithCities);*/

/*
TASK #10
- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let arr = [46, 25, 86, 48, 22, 33, 44, 76, 23, 33];
let i = 0;
while(i<arr.length-1){
    if(arr[i]%2 == 0){
        console.log(arr[i])
    }
    i++;
}*/

/*
TASK #11
- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

let arr = [46, 25, 86, 48, 22, 33, 44, 76, 23, 33];
let massive = [];
let i = 0;

while(i<arr.length){
    massive[i] = arr[i];
    i++
}
document.write(`${massive}`);*/

/*TASK #12

- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let arr = [ 'a', 'b', 'c'];
let t ='';
for (let i = 0; i<arr.length; i++){
    t = t + arr[i];
}
document.write(`${t}`);

- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

let arr = [ 'a', 'b', 'c'];
let t ='';
let i = 0;
while(i<3){
    t = t + arr[i];
    i++;
}
document.write(`${t}`);

- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let arr = [ 'a', 'b', 'c'];
let t ='';
let i = 0;
for (let item of arr){
    t = t + arr[i];
    i++
}
document.write(`${t}`);*/
