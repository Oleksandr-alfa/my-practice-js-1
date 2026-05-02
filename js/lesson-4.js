

// 1 - отримай body елемент і виведи його в консоль;
const bodyEl = document.querySelector(`body`);
console.log(bodyEl);
// 2 - отримай елемент id="title" і виведи його в консоль;
const titleId = document.getElementById(`title`);
console.log(titleId);
// 3 - отримай елемент class="list" і виведи його в консоль;
const elemClass = document.querySelector(`.list`);
console.log(elemClass);
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const elems = document.querySelectorAll(`[data-topic]`);
console.log(elems);
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const firstElem = elems[0];
console.log(firstElem);
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const lastElem = elems[elems.length - 1];
console.log(lastElem);
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
const nextElem = document.querySelector(`h1`).nextElementSibling;
console.log(nextElem);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const allTitle = document.querySelectorAll(`h3`);
allTitle.forEach(h3 => console.log(h3.textContent));

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
allTitle.forEach(h3 => h3.classList.add(`active`));
console.log(allTitle);


// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const liElem = document.querySelector(`[data-topic="navigation"]`);
console.log(liElem);
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
liElem.style.backgroundColor = `yellow`;


// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
const liElemP = liElem.querySelector(`p`);
liElemP.textContent = `Я змінив тут текст!`;
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
const currentTopic = "manipulation";
const el = document.querySelector(`[data-topic ="${currentTopic}"]`);
console.log(el);
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
el.setAttribute(`style`, `background-color: blue`);

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
const title = document.querySelector(`.completed`);
console.log(title);
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
const completedHeader = document.querySelector('.completed');

if (completedHeader) {
  const li = completedHeader.closest('li');
  li.remove();
}

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
const foundElement = document.querySelector(`h1`);
const p = document.createElement(`p`);
const newElem = foundElement.insertAdjacentElement(`afterend`, p);
newElem.textContent = `Обєктна модель документа (Document Object Model)`;
console.log(newElem);
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML"
// а опис (р) - "Ще один спосіб створити DOM-елементи
// і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу".
//  тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку

const list = document.querySelector(`ul`);
const li = document.createElement(`li`);
li.classList.add(`item`);
const h3 = document.createElement(`h3`);
h3.textContent = `Властивість innerHTML`;
const pp = document.createElement(`p`);
pp.textContent = `Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу`;
li.append(h3, pp);
list.append(li);
console.log(list);

// // 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// const liTwo = document.createElement(`li`);
//  liTwo.innerHTML = ` <h3 class="completed">Властивість innerHTML</h3>
//         <p class="text">
//           Ще один спосіб створити DOM-елементи і помістити їх в дерево - це
//           використовувати рядки з тегами і дозволити браузеру зробити всю важку
//           роботу
//         </p>
//       </li>`;
// list.insertAdjacentElement(`beforeend`, liTwo);
list.insertAdjacentHTML(`beforeend`, `<li class="item"></li><h3 class="completed">Властивість innerHTML</h3>
        <p class="text">
          Ще один спосіб створити DOM-елементи і помістити їх в дерево - це
          використовувати рядки з тегами і дозволити браузеру зробити всю важку
          роботу
        </p>
      </li>`);

// // 20 - очисти список
const ul = document.querySelector(`ul`)
ul.innerHTML = ``;

2
// Створіть контейнер div (з класом number-container) в HTML-документі 
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer). 
// Парні числа повинні мати зелений фон (додати клас even), 
// Непарні числа - жовтий фон (додати клас odd).


const container = document.querySelector(`.number-container`);
for (let i = 0; i < 100; i++){
  const div = document.createElement(`div`);
  div.classList.add(`number`);
  const randomNum = Math.floor(Math.random() * 100) + 1;
  div.textContent = randomNum;

if (randomNum % 2 === 0) {
 div.classList.add(`even`);
} else {
  div.classList.add(`odd`);
  }
  container.appendChild(div);
}

container.style.width = `600px`;
container.style.margin = `0 auto`;
  
