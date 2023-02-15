/*
- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let rectangle = (firstSide, secondSide) => firstSide * secondSide;
    console.log(rectangle(2,3));*/

/*
- створити функцію яка обчислює та повертає площу кола з радіусом r
let circle = (radius) => (radius ** 2) * 3.14;
console.log(circle (5));*/

/*
- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinder = (heigth, radius) => 2*3.14*radius * (heigth + radius);
console.log(cylinder(10, 15));*/

/*
- створити функцію яка приймає масив та виводить кожен його елемент

let arrey = [1, 2, 3, 4, 5, 6, 7, 8, 9,10 ];
let arreyPrint = (arrey) => {
    for(let item of arrey){
        console.log (item);
    }

}
arreyPrint(arrey)*/

/*
- створити функцію яка створює параграф з текстом. Текст задати через аргумент
let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, vel!';
let paragraf = (text)=>(`<p>${text}</p>`);
document.write(paragraf(text));*/

/*
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let text = `Lorem ipsum dolor sit amet, consectetur adipisicing.`
let list = (text) => (`<ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    </ul>`)
document.write(list(text));*/

/*
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
    Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let text = `Lorem ipsum dolor sit amet, consectetur adipisicing.`
let i = 0;
let listPrinter = (text, itemsQuantity) => {
    for (i; i<itemsQuantity; i++){
        document.write(`<ul>
                            <li>${text}</li>
</ul>`);
    }
}
listPrinter(text,10);*/

/*
- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arr = [1, 'f', 45, 'df', 11, 36, 'vttv', 42, true, false, 25, 'kkk']
let arreyPrinter = (arr) => {
    for(let item of arr){
        document.write(`<ul>
                    <li>${item}</li>
</ul>`)
    }}
arreyPrinter(arr)
*/

/*
- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. ' +
'Для кожного об'єкту окремий блок.
    let arr = [
    {id: 1,
        name:'Vasia',
        age:17,},

    {id: 2,
        name:'Olia',
        age:25,},

    {id: 3,
        name:'Sam',
        age: 33,},
]
let printer = (arrey) => {
    for(let user of arrey){
        document.write(`<div>
        ${user}
</div>`)
    }
}
printer(arr);*/

/*- створити функцію яка повертає найменьше число з масиву
let i = 0;
let arr = [1,2,3,-2,5,6,7]
let littleNumber = (arrey) => {
    let t = arrey[0];
    for (let item of arrey){
        if(item<=t){
            t=item
        }
    }
    console.log(t)
}
littleNumber(arr)*/

/*- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let t = 0;
let arr = [1,2,3,-2,5,6,7,5]
let sum = (arrey) => {
    for (let item of arrey){
        t = t + item
    }
    console.log(t)
}
sum(arr);*/

/*- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let t = 0;
let arr = [1,'hello','world',-2,5,6,7,5]
let swap = (arr,index1,index2) => {
    let a = arr[`${index2}`]
    arr[`${index2}`] = arr[`${index1}`];
    arr[`${index1}`] = a
    console.log(arr)
}
swap(arr,1, 2);*/

/*- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for(let money of currencyValues){
        if (money.currency === exchangeCurrency){
            return (sumUAH /money.value);
        }
    }
}
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))*/
