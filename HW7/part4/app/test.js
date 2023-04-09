// Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку.Можуть видалятися
// всі елементи в будь - якому порядку.
// https://user-images.githubusercontent.com/9075641/228462160-e0584c12-eb4a-4973-b598-46e1cde9b941.png

const deleteButton = document.getElementById('deleteButton');
const select = document.getElementById('mySelect');

deleteButton.addEventListener('click', function() {
  const selectedOption = select.options[select.selectedIndex];
  select.removeChild(selectedOption);
});

