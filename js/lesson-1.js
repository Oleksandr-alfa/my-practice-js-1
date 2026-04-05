

// console.log("hello world")
// const number = Number(prompt(10));
// if(number === 10) {
//     alert("Virno");
// }else{ alert('nevirno'); }

// task-2
// const min = Math.floor(Math.random() * 59);

// console.log(alert)
// Запитуємо число у користувача
// let number = prompt("Введіть число");

// // Перетворюємо введене значення на число
// number = Number(number);

// // Перевіряємо, чи дорівнює число 10
// if (number === 10) {
//   alert("Вірно");
// } else {
//   alert("Невірно");
// }

// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"


// const min = Math.floor(Math.random() * 59);
// if (min <= 15) {
//     console.log(`${min} vhodit v pershu chvert!`);
// }else if (15 < min <= 30) {
//     console.log(`${min} vhodit v drugu chvert!`);
// } else if (30 < min <= 45) {
//     console.log(`${min} vhodit v tretu chvert!`);
// } else if (45 < min <= 60) {
//     console.log(`${min} vhodit v chetvertu chvert!`);
// }

// let num = Number(prompt());
// let result;
// switch (num) {
//     case 1:
//         result = 'zima';
//         break;
//     case 2:
//         result = 'vesna';
//         break;
//     case 3:
//         result = 'lito';
//         break;
//     case 4:
//         result = 'osin';
//         break;
//     default: result = 'Вибачте, але ви маєте ввести значення від 1 до 4 включно';
// }
// console.log(result);

// task--4
// let num = Number(prompt());
// let hours = Math.floor(num / 60);
// let mins = num % 60;
// let formattedHours = String(hours).padStart(2, '0');
// let formattedMinutes = String(mins).padStart(2, '0');
// console.log(`${formattedHours}:${formattedMinutes}`);

// let log = prompt()
// if (log === 'admin') {
//     let password = prompt();
//     if (password === 'I am main') {
//         alert(`welcome!`);
//     } else if (password === null || password === '') {
//         alert(`cancel`);
//     } else {
//         alert(`password is invalid`);
//     }
// }else if (log === null || log === '') {
//         alert(`cancel`);
// }else {
//         alert(`i don't know you!`);
//     }

// let i = 1;
// while (i <=20){
//     console.log(i);
//     i++;
// }



// function getNumbers(min, max) {
//     let sum = 0;
//     for (let i = max; i >= min; i--){
//         console.log(i);
//         if (i % 2 === 0) {
//             sum += i;
//        }
//     }
//     return sum;
// }
// const result = getNumbers(3, 20);
// console.log("Сума парних чисел:", result);

// function min(a, b) {
//     if (!Number.isFinite(a) || !Number.isFinite(b)) {
//         return 'it isn\'t valided number';
//     }
//     if (a < b) {
//         console.log(a);
//     } else {
//         console.log(b);
//     }
// }



// function min(a, b) {
//   if (!Number.isFinite(a) || !Number.isFinite(b)) {
//     return "Not a number!";
//   }
//   return a < b ? a : b;
// }

// console.log(min(3, 7));        // 3
// console.log(min(-10, 3));      // -10
// console.log(min("3", 7));      // Not a number!
// console.log(min(NaN, 5));      // Not a number!
// console.log(min(Infinity, 5)); // Not a number!

// console.log(min(4, 'aaaa'));

// function isAdult(age) {
//     if (age >= 18) {
//         return 'true';
//     } else {
//         return confirm(age);
//     }
// }

// function isAdult(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm("Вам є 18 років?");
//   }
// }
// console.log(isAdult(20)); // true
// console.log(isAdult(15)); // відкриється confirm

function fizzBuss(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`fizzbuss`);
        } else if(i % 3 ===0) {
            console.log(`fizz`);
        } else if (i % 5 === 0) {
            console.log(`buss`);
        } else {
            console.log(i);
        }
    }
}

// console.log(fizzBuss(64));
fizzBuss(15);