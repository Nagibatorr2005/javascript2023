/*
TASK #1
-cворити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangle (firstSide, secondSide){
   let area = firstSide * secondSide;
   return area;
}
console.log(rectangle(8,9))*/

/*
TASK #2
- створити функцію яка обчислює та повертає площу кола з радіусом r
function circle (radius){
    return (radius ** 2) * 3.14;
}
console.log(circle (5))*/

/*
TASK #3
- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
2πR(H + R), де R, Н — радіус і висота циліндра відповідно.

function cylinder(heigth, radius){
    return 2*3.14*radius * (heigth + radius);
}
console.log(cylinder(10, 15));*/

/*
TASK #4
- створити функцію яка приймає масив та виводить кожен його елемент
let arrey = [1, 2, 3, 4, 5, 6, 7, 8, 9,10 ];
function arreyPrint(arrey){
    let i = 0
    for(let item of arrey){
        console.log (arrey[i]);
        i++
    }

}
arreyPrint(arrey)*/

/*
TASK #5
- створити функцію яка створює параграф з текстом. Текст задати через аргумент
let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, vel!';
function paragraf(text){
    document.write(`<p>${text}</p>`);
}
paragraf(text);*/

/*
TASK #6
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let text = `Lorem ipsum dolor sit amet, consectetur adipisicing.`
function list(text){
    document.write(`<ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    </ul>`);
}
list(text);*/

/*TASK #7
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
    Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let text = `Lorem ipsum dolor sit amet, consectetur adipisicing.`
let i = 0;
function listPrinter(text, itemsQuantity){
    for (i; i<itemsQuantity; i++){
        document.write(`<ul>
                            <li>${text}</li>
</ul>`);
    }
}
listPrinter(text,10);*/

/*
TASK #8
- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arr = [1, 'f', 45, 'df', 11, 36, 'vttv', 42, true, false, 25, 'kkk']
let i = 0;
function arreyPrinter (){
for(let item of arr){
    document.write(`<ul>
                    <li>${arr[i]}</li>
</ul>`)
    i++
}}
arreyPrinter()
*/

/*TASK #9
- створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
та виводить їх в документ. Для кожного об'єкту окремий блок.
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
let i = 0;
function printer(arrey){
    for(let user of arr){
       console.log(`<div>
        ${arr[i]}
</div>`)
        i++
    }
}
printer(arr);*/

/*
TASK #10
- створити функцію яка повертає найменьше число з масиву
let i = 0;
let arr = [1,2,3,-2,5,6,7]
function littleNumber(arrey){
    let t = arrey[0];
    for (let item of arrey){
        if(arrey[i]<=t){
            t=arrey[i]
        }
        i++
    }
    console.log(t)
}
littleNumber(arr)*/

/*
TASK #11
- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
    Приклад sum([1,2,10]) //->13
let i = 0;
let t = 0;
let arr = [1,2,3,-2,5,6,7,5]
function sum(arrey){
    for (let item of arrey){
       t = t + arrey[i]
        i++
    }
    console.log(t)
}
sum(arr);*/

/*TASK 12
- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
let i = 0;
let t = 0;
let arr = [1,'hello','world',-2,5,6,7,5]
function swap(arr,index1,index2){
    a = arr[`${index2}`]
    arr[`${index2}`] = arr[`${index1}`];
    arr[`${index1}`] = a
    console.log(arr)
}
swap(arr,1, 2);*/

/*
TASK #13
- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let i = 0;
let result;
function exchange(sumUAH,currencyValues,exchangeCurrency){
   for(let money of currencyValues){
       if (currencyValues[i].currency === exchangeCurrency){
           return (sumUAH /currencyValues[i].value);
       }
       i++
       }
}
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))*/
