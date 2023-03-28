// Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх 
//атрибутів.
// <body>
//   main class="mainClass check item">         
//      <div id="myDiv">
//          <p>First paragraph</p>           
//      </div>
//  </main> 
// </body >
    
const body = document.createElement("body");
const main = document.createElement("main");
main.classList.add("mainClass", "check", "item");
const div = document.createElement("div");
div.setAttribute("id", "myDiv");
const p = document.createElement("p");
p.textContent = "First paragraph";

div.appendChild(p);
main.appendChild(div);
body.appendChild(main);

document.documentElement.appendChild(body);
