/*- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let findMin = function (a,b,c){
    if(a>b && a>c){
        console.log(a)
    }else if(b>a && b>c){
        console.log(b)
    }else{
        console.log(c)
    }
}
findMin(10, 5, 1)*/

/*
- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let findMax = function (a,b,c){
    if(a<b && a<c){
        console.log(a)
    }else if(b<a && b<c){
        console.log(b)
    }else{
        console.log(c)
    }
}
findMax(10, 5, 1)*/

/*
- створити функцію яка повертає найбільше число з масиву
function findMaxFromArrey(arrey){
    let i = 0;
    for(let item of arrey){
      if(item>i) {
          i = item
      }
    }
    console.log(i)
}
findMaxFromArrey([1, 2,1025, 15, 7, 56])*/

/*- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function findAverage(arrey){
    let i = 0;
    for (let item of arrey){
        i += item
    }
    console.log(i/arrey.length)
}
findAverage([2,3,4,3])*/

/*
створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
(Math використовувати заборонено);

function average(...rest){
   let i = -Infinity;
   let t = Infinity
    for (let item of rest){
        if(item > i){
            i = item}
        if (item < t){
            t = item
        }
    }
    console.log(i)
    return t

}
average(2,5,9,1,2,3,4,-7,1)*/

/*
- створити функцію яка заповнює масив рандомними числами
let arr = [];
function random(arr){
  let i = 0;
  while (i<10){ arr[i] = Math.round(Math.random()*100)
  i++}
  console.log(arr)
}
random(arr)*/

/*
- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

let arr = [];
function random(arr,max){
  let i = 0;
  while (i<10){
    let randomNumber = Math.round(Math.random()*100)
    if(randomNumber <= max){
      arr[i] = randomNumber
      i++
    }
    }
  console.log(arr)
}
random(arr,10)*/

/*
- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
function reverso(arr){
  let newArrey = [];
  let i = 0;
  let t =1
  for(let item in arr){
    newArrey[i] = arr[arr.length-t]
    t++
    i++
  }
  console.log(newArrey);
}
reverso([1,2,3]);*/

/*
- створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
function count(a,b){
  if(b===undefined){
    console.log(a)
  }else{
    console.log(a+b)
  }
}
count(1,5)
*/

/*- Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
EXAMPLE:
    [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
arr = [{name: 'Dima', age: 13}, {model: 'Camry'}]
function getKeys(arr) {
    const keys = [];
    for (let obj of arr) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                keys.push(key);
            }
        }
    }
    console.log(keys);
}
getKeys(arr)*/

/*
- Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
EXAMPLE:
    [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

arr = [{name: 'Dima', age: 13}, {model: 'Camry'}]

function getValue(arr){
    let newArrey = [];
    let i = 0;
    for(let item of arr){
        newArrey[i] = Object.values(item)
        i++
    }
    console.log(newArrey)
}
getValue(arr)
let user = {
    name:'vasya'
}*/
