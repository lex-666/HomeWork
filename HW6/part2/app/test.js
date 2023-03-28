// Для сторінки
// <body>
//   <h1>I'am a big header!!!</h1>
//   <div id="myDiv">
//     <p>First paragraph</p>
//     <p>Second paragraph</p>
//     <p>Third paragraph</p>
//     <p>Fourth paragraph</p>
//   </div>
//   <ul id="myList">
//     <li>Make</li>
//     <li>me</li>
//     <li>horizontal!</li>
//   </ul>
//   <span>Make me invisible, please!</span>
// </body>

// Напишіть скріпт, який за допомогою засобів DOM простилізує сторінку так як показано на картинці.

const title = document.querySelector("h1");
title.style.backgroundColor = "green";
const firstPar = document.querySelector("p");
firstPar.style.fontWeight = "bold";
document.getElementsByTagName("p")[1].style.color = "red";
document.getElementsByTagName("p")[2].style.textDecoration = "underline";
document.getElementsByTagName("p")[3].style.fontStyle = "italic";
const list = document.getElementById("myList");
list.style.listStyleType = "none";
const a = document.querySelectorAll('li');
let text = '';
a.forEach((li) => {
  text += li.textContent;
});
let myText = document.getElementById("myList");
myText.innerHTML = text;
const firstSpan = document.querySelector("span");
firstSpan.style.display = "none";

