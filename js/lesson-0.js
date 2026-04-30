// function getEvenNumbers(num) {
//     let ii = 0;
//     for (let i = 1; i < num; i++){
//         if (i % 2 === 0) {
//             console.log(i);
//           ii += i;
//         }
       
//     }
//      return ii;
// }
// console.log(getEvenNumbers(21));
// function sumDigits(num) {
//     const sepNumOne = Math.floor(num / 100);
//     const sepNumTwo = Math.floor(num % 100 / 10);
//     const sepNumThree = num % 100 % 10;
//     console.log(sepNumOne);
//     console.log(sepNumTwo);
//     console.log(sepNumThree);
//     return sepNumOne + sepNumTwo + sepNumThree;
// }
// console.log(sumDigits(534));

// function sumDigits(num) {
//     let sum = 0;

//     while (num > 0) {
//         const digit = num % 10;
//         console.log(digit);
//         sum += digit;
//         num = Math.floor(num / 10);
//     }

//     return sum;
// }

// console.log(sumDigits(534));
// const arr = [];
// for (let i = 0; i < 10; i++){
//     arr.push(i);
// }
// // console.log(arr);
// function filterEven(arr) {
//     let newArr = [];
//     for (const i of arr) {
//         if (i % 2 === 0) {
//             newArr.push(i);
//         }
//     }
//     return newArr;
// }
// console.log(filterEven(arr));
// function getUnique(arr) {
//     let newArr = [];
//     for (const number of arr) {
//         let isUnique = true;
//         for (const it of newArr) {
//             if (number === it) {
//                 isUnique = false;
//                 break;
//             }
//         }
//         if (isUnique) {
//             newArr.push(number);
//         }
//     }
//     return newArr;
// }
// console.log(getUnique([1, 2, 2, 3, 4, 4, 5]));
function groupElements(arr) {
    let result = [];
    for (const number of arr) {
        let found = false;
        for (const group of result) {
            if (group[0] === number) {
                group.push(number);
                found = true;
                break;
            }
        }
    if(!found) {result.push([number]);
    }
    }
    return result;
}

console.log(groupElements([1, 2, 2, 3, 3, 3, 4]));



function flatten(arr) {
    let stack = [...arr];
    let result = [];
    while (stack.length > 0) {
        const value = stack.pop()
        if (Array.isArray(value)) {
            for (const el of value) {
                stack.push(el);
            }
        }else{result.push(value)}
    }
    return result.reverse();
}
console.log(flatten([1, [2, [3, 4], 5], 6]));

function groupByParity(arr) {
    let evenNumber = [];
    let noEvenNumber = [];
    for(const el of arr){
        if (el % 2 === 0) {
            evenNumber.push(el);
        }else{noEvenNumber.push(el)}
    }
    return [evenNumber, noEvenNumber];
}
console.log(groupByParity([1, 2, 3, 4, 5, 6]));

const objOfTypes = {};

function groupByType(arr) {
    
    for (const el of arr) {
        const type = typeof el;
        if (!objOfTypes[type]) {
            objOfTypes[type] = [];
        }
        objOfTypes[type].push(el);
       }
        return objOfTypes;
    
}


console.log(groupByType([1, "hi", true, [1, 2], { a: 1 }, null, undefined, false, "x"]));


    function getUnique(arr) {
     let seen = {};
    let result = [];
    for (const elem of arr) {
        if (!seen[elem]) {
            seen[elem] = true;
            result.push(elem);
        }
    }
  
    return result;
}

  
console.log(getUnique([1, 2, 2, 3, 1, 4, 3]));
function serialize(obj) {
    let str = "";
    for (const key in obj) {
        str += key + ":" + obj[key] + "|";
    }
    return str;
}
function uniqueObjects(arr) {
    let seen = {};
    let result = [];
    for (const obj of arr) {
        const key = serialize(obj);
        if (!seen[key]) {
            seen[key] = true;
            result.push(obj);
       }
    }
    return result;
}


console.log(uniqueObjects([
  {a:1},
  {a:1},
  {b:2},
  {a:1},
  {b:2},
  {c:3}
]));