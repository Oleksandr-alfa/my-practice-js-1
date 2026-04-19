// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkout(array) {
//    const name = prompt("Please enter your name:");
    
//     if (array.includes(name)) {
//         alert(`Welcome, ${name}!`);
//     }else{
//         alert(`User not found`);
//     }
//     return;
    
// }
// checkout(logins);

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function calculateAverage(...args) {
//     let sum = 0;
//      let count = 0;

//     for (const arg of args) {
//         if (typeof arg === 'number' && !isNaN(arg)) {
//             sum += arg;
//            count++;
//         }
//     }
       
//     return sum / count || 0;
// }
// console.log(calculateAverage(1, 2, 3, 4, 5)); // 3
// console.log(calculateAverage(10, 20, 30, `gggg`)); // 20


// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,

//     allSalaries() {
//         const salariesValues = Object.values(salaries)
//         for (const salaryValue of salariesValues) {
//             sum += salaryValue;
//         }
//     }
// };
  

// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

const calculator = {
    read(a, b) {
        this.a = a;
        this.b = b;
    },
    sum() {
        if (!this.exist()) {
            return 'No such propeties';
        }
        return this.a + this.b;
    },
    mult() {
        if (!this.exist()) {
            return 'No such propeties';
        }
        return this.a * this.b;
    },
   exist() {
    return this.a != null && this.b != null;
}


}
calculator.read(3, 10);
console.log(calculator.sum()); 
// console.log(calculator.mult());     
console.log(calculator.exist());




