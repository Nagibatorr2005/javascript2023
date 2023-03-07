/*
- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let findMinValue = (a, b, c) => {
 if(a<b && a<c){
     console.log(a)
 }else if(b<a && b<c){
     console.log(b)
 }else {
     console.log(c)
 }
}
findMinValue(10,1,3)*/

/*
- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let findMaxValue = (a, b, c) => {
    if(a>b && a>c){
        console.log(a)
    }else if(b>a && b>c){
        console.log(b)
    }else {
        console.log(c)
    }
}
findMaxValue(10,1,3)*/

/*
- створити функцію яка повертає найбільше число з масиву
let findMaxValue = (arr) => {
    let i = -Infinity;
    for (let item of arr){
        if(item>i){
            i = item
        }
    }
    console.log(i)
}
findMaxValue([1,56,12,4,7,1000000])*/

/*
- створити функцію яка повертає найменьше число з масиву
let findMinValueOfArrey = (arr) => {
    let i = Infinity;
    for (let item of arr){
        if(item<i){
            i = item
        }
    }
    console.log(i)
}
findMinValueOfArrey([-1,23,5,3])*/

/*
- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let sum = (arr) => {
    let i =0;
    for (let item of arr){
        i +=item
    }
    console.log(i)
}
sum([1,2,3,4,5,6,7,8,9,10])*/

/*
-дано натуральное число n. Выведите все числа от 1 до n
let range = (n) =>{
    let i = 1;
    while (i<=n){
        console.log(i)
        i++
    }
}
range(17)*/

/*-даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания,
    если A < B, или в порядке убывания в противном случае.
let count = (a, b) => {
  if(a<b){
      while (a<=b){
          console.log(a)
          a++
      }
  }else{
      while (a>=b){
          console.log(a)
          a--
      }
  }
}
count(10, 1)*/

/*
-   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
  EXAMPLE:
  foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
  foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
  foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

let swich = (arr,number) => {
    let i = arr[number]
    arr[number] = arr[number+1]
    arr[number+1] = i
    console.log(arr)
}
swich([1,2,3],1)*/

/*
- Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
    Двожина масиву від 2 до 100
EXAMPLE:
    [1,0,6,0,3] => [1,6,3,0,0]
    [0,1,2,3,4] => [1,2,3,4,0]
    [0,0,1,0]   => [1,0,0,0]*!/
let mover = (arr) =>{
    let newArr = [];
    let i = 0;
    for (let item of arr){
        if (item!==0){
            newArr[i] = item
            i++
        }
    }
    for (let item of arr){
        if (item===0){
            newArr[i] = item
            i++
        }
    }
    console.log(newArr)
}
mover([1,0,6,0,3,0,1,2,3,4,0,0,1,0])*/
