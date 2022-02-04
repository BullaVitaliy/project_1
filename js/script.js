"use strict";

// alert('Hello');

// const qwetion = confirm('Are you hare?');
// console.log(qwetion);

// const answer = +prompt("How old are you?", "18");
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt('What your name?', '');
// answers[1] = prompt('What your last name?', '');
// answers[2] = prompt('How old are you?', '');

// document.write(typeof(answers));

//інтерполяція
// const category = 'toys';
// console.log(`https://someurl/${category}/5`);

// const user = "Vitaliy";
// alert(`Hello, ${user}`);

//оператори в js + - * /

//increment and decrement
// let incr = 10,
//     decr = 10;
// incr++;
// decr--;
//postfix form record
// console.log(incr++); //10
// console.log(decr--); //10
//prefix
// console.log(++incr); //11
// console.log(--decr); //9

// const isChecked = true,
//       isClose = false;
// console.log(isChecked && isClose); //false

// const isChecked = false,
//       isClose = false;
// console.log(isChecked || !isClose); //true тому що бодай одна умова, але true(правдива)

// && - and
// || - or

// ! - оператор заперечення true => false && false => true
// console.log(2 + 2 * 2 !== '6');//true

//умови

//if else (if...else if...else)
// if (1) {
//     console.log("ok!");
// } else {
//     console.log("error!");
// }

//тирнарний оператор
// const num = 50;
//  (num = 50) ? console.log('ok') : console.log('error');

//switch case
// const num = '50';

//  switch (num) {
//      case '49':  //num === 49
//         console.log('false');
//         break;
//     case '100':
//         console.log('false');
//         break;
//     case '50':
//         console.log('true!');
//         break;

//     default:
//         console.log('false of false');
//         break;
//  }

// Цикли while(){} / do{}while() / for(){}

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// let num = 50;
// do {
//     console.log(num);
//     num++;
// } while (num < 55);

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         // break; //зупиняє цикл повністю
//         continue; // пропускає дану умову і йде собі дальше
//     }

//     console.log(i);
// }

// function

// function showMassage () {
//     console.log('Hello world!');
// }

// showMassage();

// function calculator(a, b){
//     return (a + b);
// }

// console.log( calculator(4, 3));
// console.log( calculator(10, 3));
// console.log( calculator(4, 5));

// function ret() {
//     let num = 50;

//     //any logic

//     return num;
// }

// const anyNum = ret();//присвоюємо в змінну результат виконання функції ret()
// console.log(anyNum);

// const foo = function() {
//     console.log('hello');
// };

// foo();

// const calc = (a, b) => { return a + b }; //якщо вираз вміщається в одному рядку то фігурних скобок не треба | або/і якщо один аргумент то дужок не треба

// Array

// const arr = [2, 3, 6, 8, 10];
// arr[50] = 0;

// console.log(arr.length);
// console.log(arr);

//forEach
// const arr = [2, 3, 6, 8, 10];
// arr.forEach(function(item, i, arr){
//     console.log(`${i}: ${item} в середині масива ${arr}`);
// })

// const arr = [1, 2, 3, 4, 5];
// arr.forEach((x) => {
//     console.log(x * x);
// });

// arr.map((x) => {
//     console.log(x * x);
// });

//split, join
// const str = prompt("Введіть товари через кому", "Помідор");
// const products = str.split(', ');
// products.sort()
// console.log(products.join('; '));

//sort
//string element of array
// const str = ['Картопля', 'Буряк', 'Ялинка', 'Морква'];
// str.sort()
// console.log(str);

//number element
// const number = [1, 10, 7, 5];
// number.sort(compareNum);
// console.log(number);

// function compareNum(a, b) {//декларативну функцію можна визивати перед обявленням
//     return a - b;
// }

//arr.splice
// const arr = [1, "str", { any: "any" }, false, 4, "str2"];
// arr.splice(3, 3, "deleted", true, 100 );
// console.log(arr);

//slice
// const arr = [1, 2, 88, 4, 7, 100, 99]
// const arrCopy = arr.slice(1, 6)
// console.log(arrCopy);

//concat
const arr = [1, 2, 88, 4, 7, 100, 99];
console.log(`ORIGINAL ARRAY: ${arr}`);
const arrPlus = arr.concat(101, false, "string");
console.log(`CONCAT ARRAY: ${arrPlus}`);
const arrReverse = arrPlus.reverse();
console.log(`REVERS ARRAY ALL: ${arrReverse}`);
