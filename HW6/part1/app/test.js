// На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів. У модальному вікні необхідно 
//послідовно вивести вміст:
//         1) першого елемента списку
//         2) останнього елемента списку
//         3) другого елемента списку
//         4) четвертого елемента списку
//         5) третього елемента списку
// Приклад:
// •        1
// •        2
// •        3
// •        4
// •        5
// Результат виводу: 1, 5, 2, 4, 3

const list = document.getElementById("list");
const items = list.getElementsByTagName("li");

const first = items[0].textContent;
const last = items[items.length - 1].textContent;
const second = items[1].textContent;
const fourth = items[3].textContent;
const third = items[2].textContent;

alert(`${first}, ${last}, ${second}, ${fourth}, ${third}`);
