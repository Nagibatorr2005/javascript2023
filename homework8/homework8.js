/*/*- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname , email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let arr = [
    new User(1, 'dd', 'defef', 'abc@gmail.com', '0936582357'),
    new User(2, 'dd', 'defef', 'abc@gmail.com', '0936582357'),
    new User(3, 'dd', 'defef', 'abc@gmail.com', '0936582357'),
    new User(4, 'dd', 'defef', 'abc@gmail.com', '0936582357'),
    new User(5, 'dd', 'defef', 'abc@gmail.com', '0936582357'),
    new User(6, 'dd', 'defef', 'abc@gmail.com', '0936582357'),
    new User(7, 'dd', 'defef', 'abc@gmail.com', '0936582357'),
    new User(8, 'dd', 'defef', 'abc@gmail.com', '0936582357'),
    new User(9, 'dd', 'defef', 'abc@gmail.com', '0936582357'),
    new User(10, 'dd', 'defef', 'abc@gmail.com', '0936582357')];
console.log(arr)*/

/*
- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
function User(id, name, surname , email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let arr = [
    new User(1, 'dd', 'defef', 'abc@gmail.com', '0936582357'),
    new User(2, 'dd', 'defef', 'abc@gmail.com', '0936582357'),
    new User(3, 'dd', 'defef', 'abc@gmail.com', '0936582357'),
    new User(4, 'dd', 'defef', 'abc@gmail.com', '0936582357'),
    new User(5, 'dd', 'defef', 'abc@gmail.com', '0936582357'),
    new User(6, 'dd', 'defef', 'abc@gmail.com', '0936582357'),
    new User(7, 'dd', 'defef', 'abc@gmail.com', '0936582357'),
    new User(8, 'dd', 'defef', 'abc@gmail.com', '0936582357'),
    new User(9, 'dd', 'defef', 'abc@gmail.com', '0936582357'),
    new User(10, 'dd', 'defef', 'abc@gmail.com', '0936582357')];
let filteredUsers = arr.filter(function (user){return user.id % 2 ===0});
console.log(filteredUsers);*/

/*- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)function User(id, name, surname , email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let arr = [
    new User(1, 'dd', 'defef', 'abc@gmail.com', '0936582357'),
    new User(2, 'dd', 'defef', 'abc@gmail.com', '0936582357'),
    new User(3, 'dd', 'defef', 'abc@gmail.com', '0936582357'),
    new User(4, 'dd', 'defef', 'abc@gmail.com', '0936582357'),
    new User(5, 'dd', 'defef', 'abc@gmail.com', '0936582357'),
    new User(6, 'dd', 'defef', 'abc@gmail.com', '0936582357'),
    new User(7, 'dd', 'defef', 'abc@gmail.com', '0936582357'),
    new User(8, 'dd', 'defef', 'abc@gmail.com', '0936582357'),
    new User(9, 'dd', 'defef', 'abc@gmail.com', '0936582357'),
    new User(10, 'dd', 'defef', 'abc@gmail.com', '0936582357')];
let sortedUsers = arr.sort(function (a,b){return b.id - a.id})
console.log(sortedUsers)*/

/*- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client
class Client{
    constructor(id, name, surname , email, phone, order) {
        this.id = id
        this.name = name
        this.surname = surname;
        this.email = email
        this.phone = phone
        this.order = order
    }
}
let arr = [
    new Client(1, 'Vasua', 'Petrov', 'petrov@gmail.com', '0932586549',[milk,tem, bread,salt,sugar]),
    new Client(2, 'Petro', 'Petrov', 'petrov@gmail.com', '0932586549',[milk,tem, bread,salt,sugar]),
    new Client(3, 'Ivan', 'Petrov', 'petrov@gmail.com', '0932586549',[milk,tem, bread,salt,sugar]),
    new Client(4, 'Illa', 'Petrov', 'petrov@gmail.com', '0932586549',[milk,tem, bread,salt,sugar]),
    new Client(5, 'Julia', 'Petrov', 'petrov@gmail.com', '0932586549',[milk,tem, bread,salt,sugar]),
    new Client(6, 'Ann', 'Petrov', 'petrov@gmail.com', '0932586549',[milk,tem, bread,salt,sugar]),
    new Client(7, 'Sofia', 'Petrov', 'petrov@gmail.com', '0932586549',[milk,tem, bread,salt,sugar]),
    new Client(8, 'Vita', 'Petrov', 'petrov@gmail.com', '0932586549',[milk,tem, bread,salt,sugar]),
    new Client(9, 'Andriy', 'Petrov', 'petrov@gmail.com', '0932586549',[milk,tem, bread,salt,sugar]),
    new Client(10, 'Sveta', 'Petrov', 'petrov@gmail.com', '0932586549',[milk,tem, bread,salt,sugar]),
]*/

/*- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
class Client{
    constructor(id, name, surname , email, phone, order) {
        this.id = id
        this.name = name
        this.surname = surname;
        this.email = email
        this.phone = phone
        this.order = order
    }
}
let arr = [
    new Client(1, 'Vasua', 'Petrov', 'petrov@gmail.com', '0932586549',['milk','salt','sugar']),
    new Client(2, 'Petro', 'Petrov', 'petrov@gmail.com', '0932586549',['milk','tem', 'bread','salt']),
    new Client(3, 'Ivan', 'Petrov', 'petrov@gmail.com', '0932586549',['milk','tem']),
    new Client(4, 'Illa', 'Petrov', 'petrov@gmail.com', '0932586549',['milk','tem', 'bread', 'salt','sugar']),
    new Client(5, 'Julia', 'Petrov', 'petrov@gmail.com', '0932586549',['milk','tem', 'bread','salt','sugar','fish']),
    new Client(6, 'Ann', 'Petrov', 'petrov@gmail.com', '0932586549',['milk','tem', 'bread','salt','sugar','potatto']),
    new Client(7, 'Sofia', 'Petrov', 'petrov@gmail.com', '0932586549',['milk','tem', 'bread','salt','sugar',]),
    new Client(8, 'Vita', 'Petrov', 'petrov@gmail.com', '0932586549',['milk','tem', 'bread','salt','sugar']),
    new Client(9, 'Andriy', 'Petrov', 'petrov@gmail.com', '0932586549',['milk','tem', 'bread','salt','sugar']),
    new Client(10, 'Sveta', 'Petrov', 'petrov@gmail.com', '0932586549',['milk','tem', 'bread','salt','sugar','meat', 'cheese']),
];
let sortedClients = arr.sort(function (a,b){
    return a.order.length-b.order.length
})
console.log(sortedClients);*/

/*- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function NewCar(model, brand, year, max_speed, capacity){
    this.model = model
    this.brand = brand
    this.year = year
    this.max_speed = max_speed
    this.capacity = capacity
    this.driver = []

    this.drive  = function drive (){
        return (`їдемо зі швидкістю ${this.max_speed} км на годину`)
    }
    this.info = function info (){
        console.log(`Model:${this.model}`);
        console.log(`Brand:${this.brand}`);
        console.log(`Year:${this.year}`);
        console.log(`Max speed:${this.max_speed}`)
        console.log(`Capacity: ${this.capacity}`)
    }
    this.increaseMaxSpeed = function increaseMaxSpeed(newSpeed){
        return this.max_speed+newSpeed;
    }
    this.changeYear = function changeYear (newValue){
        return this.year = newValue
    };
    this.addDriver = function addDriver(driver){
        this.driver.push(driver)
    };
}
let car1 = new NewCar('VGSFBG','WGWRGWRG', 1999, 200, 5)*/

/*- (Те саме, тільки через клас)
Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


class Car {
    constructor(model, brand, year, max_speed, capacity){
        this.model = model
        this.brand = brand
        this.year = year
        this.max_speed = max_speed
        this.capacity = capacity
    }
    drive  = function drive (){
        return (`їдемо зі швидкістю ${this.max_speed} км на годину`)
    };

    info = function info (){
        console.log(`Model:${this.model}`);
        console.log(`Brand:${this.brand}`);
        console.log(`Year:${this.year}`);
        console.log(`Max speed:${this.max_speed}`)
        console.log(`Capacity: ${this.capacity}`)
    };

    increaseMaxSpeed = function increaseMaxSpeed(newSpeed){
        return this.max_speed = this.max_speed+newSpeed;
    };

    changeYear = function changeYear (newValue){
        return this.year = newValue
    };

   addDriver = function addDriver(name, age){
       let driver =  {
           name: name,
           age: age,
       }
       return driver;
   }

}
let car1 = new Car('VGSFBG','WGWRGWRG', 1999, 200, 5)
console.log(car1.drive());
console.log(car1.info());
console.log(car1.increaseMaxSpeed(200))
console.log(car1.changeYear(2005));
console.log(car1.addDriver('Ann', 22))*/

/*
-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку*!

function NewGirl(name, age, size){
    this.name = name;
    this.age = age;
    this.size = size;
}

let arr = [
    NewGirl('Ann',23,39),
    NewGirl('Ira',34,40),
    NewGirl('Yessica',20,38),
    NewGirl('Olia',13,36),
    NewGirl('Julia',45,45),
    NewGirl('Sofia',25,42),
    NewGirl('Kate',21,40),
    NewGirl('Sysi',22,39),
    NewGirl('Rapunsel',22,38),
    NewGirl('Marta',31,37),
]

function King(name, age, sizeOfShoes){
    this.name = name;
    this.age = age;
    this.sizeOfShuse = sizeOfShoes;
    this.findGirl = function findGirl(arr){
        for (let i = 0; i < arr.length; i++){
            if (arr[i].size === this.sizeOfShuse){}
            return (`${arr[i].name} is a princess`)
        }
    }
}
let prince = new King('Charls', 30, 39 )
console.log(prince.findGirl(arr))*/
