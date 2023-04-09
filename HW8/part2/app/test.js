// Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.Валідними вважаються
// всі символи на різних позиціях.
// Приклад роботи:
// checkEmail("Qmail2@gmail.com");
// true

function checkEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return console.log(regex.test(email));
}
checkEmail("Qmail2@gmail.com");