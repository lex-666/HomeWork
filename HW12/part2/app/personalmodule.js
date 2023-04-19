// Необхідно створити власний модуль personalmodule.js, який містить функцію, що приймає ім’я системного юзера і
// працює з поточним часом та на основі пори доби виводить повідомлення із привітанням юзера.Щоб експортувати
// змінні чи функції модуля на зовні можна використати об’єкт module.exports.

function greeting(username) {
  const date = new Date();
  const hour = date.getHours();
  let greetingMsg = "";

  if (hour >= 0 && hour < 6) {
    greetingMsg = "Доброї ночі";
  } else if (hour >= 6 && hour < 12) {
    greetingMsg = "Доброго ранку";
  } else if (hour >= 12 && hour < 18) {
    greetingMsg = "Доброго дня";
  } else {
    greetingMsg = "Доброго вечора";
  }

  return `${greetingMsg}, ${username}!`;
}

module.exports = {
  greeting,
};
