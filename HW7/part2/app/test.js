// Для заданої HTML-сторінки:
// <p id ='text'>I learning JavaScript events!</p> 
// <div>
//         <button . . . . . >Change style!</button>
// </div>

// напишіть функцію changeCSS(), яка спрацьовуватиме по кліку на кнопку і змінюватиме стиль 
// вмісту тега < p >: колір шрифту – оранжевий, розмір шрифту 20px, шрифт сімейства "Comic Sans MS".

function changeCSS() {
  const text = document.querySelector('#text');
  text.style.color = 'orange';
  text.style.fontSize = '20px';
  text.style.fontFamily = 'Comic Sans MS';
}
